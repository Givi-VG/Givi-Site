import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import botImage from '/Users/vipin-16319/Downloads/a-minimalist-flat-vector-illustration-fo_HwPupX7LQyS29WpG8rYqtA_9M5xTDosR_K0VQXQ33Z7zg.jpeg';


const DemoInterface = ({ demo, onClose, onComplete }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  useEffect(() => {
    if (isProcessing) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsProcessing(false);
            generateMockResult();
            return 100;
          }
          return prev + 10;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isProcessing]);

  const generateMockResult = () => {
    const mockResults = {
      'text-to-speech': {
        audioUrl: 'https://www.soundjay.com/misc/sounds/bell-ringing-05.wav',
        quality: '98%',
        processingTime: '1.2s',
        voiceClarity: 'Excellent'
      },
      'speech-to-text': {
        transcription: 'Hello, this is a sample transcription with 99.2% accuracy.',
        confidence: '99.2%',
        processingTime: '0.8s',
        wordsDetected: 12
      },
      'chatbot': {
        response: 'I understand your query about AI implementation. Based on your requirements, I recommend starting with our Text-to-Speech service for better user engagement.',
        confidence: '95%',
        responseTime: '0.5s',
        intent: 'service_inquiry'
      },
      'data-viz': {
        chartGenerated: true,
        dataPoints: 150,
        processingTime: '2.1s',
        insights: 'Revenue trend shows 23% growth over last quarter'
      }
    };
    setResult(mockResults[demo.id] || mockResults['text-to-speech']);
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setProgress(0);
    setResult(null);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const renderDemoContent = () => {
    switch (demo.id) {
      case 'text-to-speech':
        return (
          <div className="space-y-4">
            <Input
              label="Enter text to convert to speech"
              type="text"
              placeholder="Type your message here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Voice Type</label>
                <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground">
                  <option>Natural Female</option>
                  <option>Natural Male</option>
                  <option>Professional</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Speed</label>
                <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-full" />
              </div>
            </div>
          </div>
        );

      case 'speech-to-text':
        return (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Icon name="Mic" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">Upload audio file or record directly</p>
              <input
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                className="hidden"
                id="audio-upload"
              />
              <label htmlFor="audio-upload">
                <Button variant="outline" iconName="Upload">
                  Upload Audio
                </Button>
              </label>
            </div>
            {uploadedFile && (
              <div className="flex items-center space-x-2 p-3 bg-muted/20 rounded-lg">
                <Icon name="FileAudio" size={20} />
                <span className="text-sm">{uploadedFile.name}</span>
              </div>
            )}
          </div>
        );

      case 'chatbot':
        return (
          <div className="space-y-4">
            <div className="h-64 bg-muted/10 rounded-lg p-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <img
              src={botImage}
              alt="AI Bot"
              className="w-20 h-20 object-cover rounded-full"
            />
{/*                     <Icon name="Bot" size={16} color="white" /> */}
                  </div>
                  <div className="bg-muted/50 rounded-lg p-3 max-w-xs">
                    <p className="text-sm">Hello! I'm Givi's AI assistant. How can I help you today?</p>
                  </div>
                </div>
              </div>
            </div>
            <Input
              type="text"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
        );

      case 'data-viz':
        return (
          <div className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <Icon name="BarChart3" size={48} className="mx-auto mb-4 text-muted-foreground" />
              <p className="text-muted-foreground mb-4">Upload CSV or Excel file</p>
              <input
                type="file"
                accept=".csv,.xlsx,.xls"
                onChange={handleFileUpload}
                className="hidden"
                id="data-upload"
              />
              <label htmlFor="data-upload">
                <Button variant="outline" iconName="Upload">
                  Upload Data
                </Button>
              </label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Chart Type</label>
                <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground">
                  <option>Bar Chart</option>
                  <option>Line Chart</option>
                  <option>Pie Chart</option>
                  <option>Scatter Plot</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Theme</label>
                <select className="w-full p-2 bg-input border border-border rounded-lg text-foreground">
                  <option>Dark</option>
                  <option>Light</option>
                  <option>Colorful</option>
                </select>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Demo interface not available</div>;
    }
  };

  const renderResult = () => {
    if (!result) return null;

    return (
      <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="CheckCircle" size={20} className="text-accent" />
          <h4 className="font-semibold text-foreground">Processing Complete</h4>
        </div>
        
        {demo.id === 'text-to-speech' && (
          <div className="space-y-2">
            <div className="flex items-center space-x-4">
              <Button variant="outline" iconName="Play" size="sm">Play Audio</Button>
              <Button variant="outline" iconName="Download" size="sm">Download</Button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Quality: <span className="text-accent">{result.quality}</span></div>
              <div>Processing Time: <span className="text-accent">{result.processingTime}</span></div>
            </div>
          </div>
        )}

        {demo.id === 'speech-to-text' && (
          <div className="space-y-2">
            <div className="p-3 bg-muted/20 rounded border">
              <p className="text-sm">{result.transcription}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Confidence: <span className="text-accent">{result.confidence}</span></div>
              <div>Words: <span className="text-accent">{result.wordsDetected}</span></div>
            </div>
          </div>
        )}

        {demo.id === 'chatbot' && (
          <div className="space-y-2">
            <div className="p-3 bg-muted/20 rounded border">
              <p className="text-sm">{result.response}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Confidence: <span className="text-accent">{result.confidence}</span></div>
              <div>Response Time: <span className="text-accent">{result.responseTime}</span></div>
            </div>
          </div>
        )}

        {demo.id === 'data-viz' && (
          <div className="space-y-2">
            <div className="h-32 bg-muted/20 rounded border flex items-center justify-center">
              <Icon name="BarChart3" size={48} className="text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Data Points: <span className="text-accent">{result.dataPoints}</span></div>
              <div>Processing Time: <span className="text-accent">{result.processingTime}</span></div>
            </div>
            <p className="text-sm text-muted-foreground">{result.insights}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name={demo.icon} size={20} color="white" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">{demo.title}</h2>
              <p className="text-sm text-muted-foreground">{demo.category}</p>
            </div>
          </div>
          <Button variant="ghost" iconName="X" onClick={onClose} />
        </div>

        <div className="p-6">
          <div className="mb-6">
            <p className="text-muted-foreground mb-4">{demo.description}</p>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Icon name="Clock" size={14} />
                <span>Est. {demo.duration}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Target" size={14} />
                <span>{demo.difficulty}</span>
              </div>
            </div>
          </div>

          {renderDemoContent()}

          {isProcessing && (
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Processing...</span>
                <span className="text-sm text-muted-foreground">{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {renderResult()}

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
            <Button variant="outline" iconName="ArrowLeft" onClick={onClose}>
              Back to Lab
            </Button>
            <div className="flex items-center space-x-3">
              {result && (
                <Button 
                  variant="outline" 
                  iconName="Download"
                  onClick={() => onComplete(demo, result)}
                >
                  Save Results
                </Button>
              )}
              <Button
                variant="default"
                iconName="Play"
                iconPosition="left"
                onClick={handleProcess}
                disabled={isProcessing}
                loading={isProcessing}
                className="btn-primary"
              >
                {isProcessing ? 'Processing...' : 'Run Demo'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoInterface;