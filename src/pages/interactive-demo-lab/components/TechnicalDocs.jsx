import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalDocs = ({ selectedDemo }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview', icon: 'FileText' },
    { id: 'implementation', name: 'Implementation', icon: 'Code' },
    { id: 'api', name: 'API Reference', icon: 'Book' },
    { id: 'examples', name: 'Examples', icon: 'Lightbulb' }
  ];

  const documentationContent = {
    'text-to-speech': {
      overview: `Our Text-to-Speech service converts written text into natural-sounding speech using advanced neural networks. The service supports multiple languages, voice types, and customization options for speed, pitch, and tone.

Key Features:
• Natural voice synthesis with human-like intonation
• Multiple voice options (male, female, neutral)
• Real-time processing with low latency
• Support for SSML markup for advanced control
• High-quality audio output (16kHz, 22kHz, 44kHz)`,
      
      implementation: `// Installation
npm install @givi-ai/text-to-speech

// Basic Implementation
import { TextToSpeech } from '@givi-ai/text-to-speech';

const tts = new TextToSpeech({
  apiKey: 'your-api-key',
  voice: 'natural-female',
  language: 'en-US'
});

// Convert text to speech
const audioBuffer = await tts.synthesize({
  text: 'Hello, welcome to Givi AI solutions!',
  format: 'mp3',
  speed: 1.0
});

// Play audio
const audio = new Audio(URL.createObjectURL(audioBuffer));
audio.play();`,
      
      api: `POST /api/v1/text-to-speech/synthesize

Headers:
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

Request Body:
{
  "text": "Text to convert to speech",
  "voice": "natural-female",
  "language": "en-US",
  "speed": 1.0,
  "pitch": 0,
  "format": "mp3"
}

Response:
{
  "audio_url": "https://api.givi.ai/audio/12345.mp3",
  "duration": 5.2,
  "size": 83456,
  "format": "mp3"
}`,
      
      examples: `// Example 1: Basic text conversion
const result = await tts.synthesize({
  text: "Welcome to our AI-powered platform"
});

// Example 2: SSML markup for advanced control
const ssmlText = \`
<speak>
  <prosody rate="slow">Hello</prosody>
  <break time="1s"/>
  <prosody pitch="high">World!</prosody>
</speak>
\`;

const result = await tts.synthesize({
  text: ssmlText,
  format: 'ssml'
});

// Example 3: Batch processing
const texts = ["Hello", "How are you?", "Goodbye"];
const results = await Promise.all(
  texts.map(text => tts.synthesize({ text }))
);`
    },
    
    'speech-to-text': {
      overview: `Our Speech-to-Text service provides accurate transcription of audio content using state-of-the-art automatic speech recognition (ASR) technology. The service handles various audio formats and provides real-time transcription capabilities.

Key Features:
• High accuracy transcription (99%+ for clear audio)
• Real-time and batch processing modes
• Multiple language support
• Speaker diarization and identification
• Punctuation and formatting optimization`,
      
      implementation: `// Installation
npm install @givi-ai/speech-to-text

// Basic Implementation
import { SpeechToText } from '@givi-ai/speech-to-text';

const stt = new SpeechToText({
  apiKey: 'your-api-key',
  language: 'en-US',
  model: 'enhanced'
});

// Transcribe audio file
const result = await stt.transcribe({
  audioFile: audioBlob,
  format: 'wav'
});

console.log(result.transcript);
console.log('Confidence:', result.confidence);`,
      
      api: `POST /api/v1/speech-to-text/transcribe

Headers:
Authorization: Bearer YOUR_API_KEY
Content-Type: multipart/form-data

Request Body:
{
  "audio": [audio file],
  "language": "en-US",
  "model": "enhanced",
  "enable_speaker_diarization": true
}

Response:
{
  "transcript": "Hello, this is a test transcription",
  "confidence": 0.992,
  "words": [
    {"word": "Hello", "start": 0.0, "end": 0.5, "confidence": 0.99},
    {"word": "this", "start": 0.6, "end": 0.8, "confidence": 0.98}
  ],
  "speakers": [
    {"speaker": "Speaker 1", "segments": [...]}
  ]
}`,
      
      examples: `// Example 1: Real-time transcription
const stream = await stt.createStream({
  language: 'en-US',
  interim_results: true
});

stream.on('data', (result) => {
  console.log('Interim:', result.interim_transcript);
  if (result.is_final) {
    console.log('Final:', result.transcript);
  }
});

// Example 2: Batch transcription with timestamps
const result = await stt.transcribe({
  audioFile: file,
  include_timestamps: true,
  include_confidence: true
});

// Example 3: Multi-speaker transcription
const result = await stt.transcribe({
  audioFile: file,
  enable_speaker_diarization: true,
  num_speakers: 2
});`
    }
  };

  const currentDoc = documentationContent[selectedDemo?.id] || documentationContent['text-to-speech'];

  const renderContent = () => {
    const content = currentDoc[activeTab];
    if (!content) return <div className="text-muted-foreground">Content not available</div>;

    if (activeTab === 'implementation' || activeTab === 'api' || activeTab === 'examples') {
      return (
        <div className="relative">
          <pre className="bg-muted/20 p-4 rounded-lg overflow-x-auto text-sm font-mono">
            <code className="text-foreground">{content}</code>
          </pre>
          <Button
            variant="ghost"
            size="sm"
            iconName="Copy"
            className="absolute top-2 right-2"
            onClick={() => navigator.clipboard.writeText(content)}
          >
            Copy
          </Button>
        </div>
      );
    }

    return (
      <div className="prose prose-invert max-w-none">
        <div className="text-muted-foreground whitespace-pre-line">{content}</div>
      </div>
    );
  };

  return (
    <div className="surface-elevated">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Icon name="FileText" size={24} className="text-primary" />
            <div>
              <h3 className="text-lg font-semibold text-foreground">Technical Documentation</h3>
              <p className="text-sm text-muted-foreground">
                {selectedDemo ? selectedDemo.title : 'Select a demo to view documentation'}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" iconName="Download">
              Download PDF
            </Button>
            <Button variant="outline" size="sm" iconName="ExternalLink">
              Full Docs
            </Button>
          </div>
        </div>
      </div>

      <div className="border-b border-border">
        <nav className="flex space-x-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-primary text-primary bg-primary/5' :'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/20'
              }`}
            >
              <Icon name={tab.icon} size={16} />
              <span>{tab.name}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="p-6">
        {selectedDemo ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">
                  Complexity: {selectedDemo.difficulty}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span className="text-sm font-medium text-foreground">
                  Est. Development: {selectedDemo.devTime}
                </span>
              </div>
            </div>
            
            {renderContent()}
            
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>Last updated: July 10, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="GitBranch" size={14} />
                  <span>Version 2.1.0</span>
                </div>
              </div>
              <Button variant="outline" size="sm" iconName="MessageCircle">
                Get Support
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <Icon name="FileText" size={48} className="mx-auto mb-4 text-muted-foreground" />
            <h4 className="text-lg font-medium text-foreground mb-2">No Demo Selected</h4>
            <p className="text-muted-foreground">
              Choose a demo from the lab to view its technical documentation
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechnicalDocs;