import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceSelector from './components/ServiceSelector';
import TechnicalSpecs from './components/TechnicalSpecs';
import CaseStudies from './components/CaseStudies';
import IntegrationPartners from './components/IntegrationPartners';
import ResourceCenter from './components/ResourceCenter';
import { useLocation, useNavigate } from 'react-router-dom';


const AIServicesEcosystem = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Mock data for AI services
  const services = [
    {
      id: 'text-to-speech',
      name: 'Text-to-Speech',
      icon: 'Volume2',
      shortDescription: 'Convert written text into natural-sounding speech with advanced AI voice synthesis',
      description: `Transform written content into lifelike speech with our advanced AI-powered text-to-speech technology. Our solution offers multiple voice options, customizable speech patterns, and seamless integration capabilities for applications ranging from accessibility tools to interactive voice responses.`,
      features: [
        'Natural voice synthesis',
        'Multiple language support',
        'Custom voice training',
        'Real-time processing',
        'SSML compatibility',
        'Batch processing'
      ],
      complexity: 'Medium',
      timeline: '2-4 weeks',
      techSpecs: {
        architecture: [
          'Deep Learning based voice synthesis',
          'MultiLingual Support for more than 100+ Languages',
          'Real Time processing within 24 Hours',
          'Voice variations for both M/F in various accents'
        ],
        performance: [
          { label: 'Processing Speed', value: '< 200ms', percentage: '95%' },
          { label: 'Voice Quality', value: '4.8/5.0', percentage: '96%' },
          { label: 'Language Accuracy', value: '99.2%', percentage: '99%' },
          { label: 'Uptime', value: '99.9%', percentage: '100%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Requirements Analysis',
            description: 'Define voice requirements, language needs, and integration specifications',
            duration: '3-5 days',
            team: '2-3 specialists'
          },
          {
            title: 'Voice Model Selection',
            description: 'Choose optimal voice models and configure speech parameters',
            duration: '1-2 weeks',
            team: '1-2 engineers'
          },
          {
            title: 'API Integration',
            description: 'Implement API endpoints and configure authentication',
            duration: '3-5 days',
            team: '2-3 developers'
          },
          {
            title: 'Testing & Optimization',
            description: 'Comprehensive testing and performance optimization',
            duration: '1 week',
            team: '2-4 specialists'
          }
        ],
        codeExample: `import { TextToSpeechClient } from '@givi-ai/tts-sdk';

const ttsClient = new TextToSpeechClient({
  apiKey: 'your-api-key',
  region: 'us-east-1'
});

const synthesizeSpeech = async (text, options = {}) => {
  try {
    const audioBuffer = await ttsClient.synthesize({
      text: text,
      voice: options.voice || 'neural-female-1',
      language: options.language || 'en-US',
      format: 'mp3',
      speed: options.speed || 1.0
    });

    return audioBuffer;
  } catch (error) {
    console.error('TTS Error:', error);
    throw error;
  }
};`
      },
      integration: {
        platforms: [
          { name: 'Google Cloud', icon: 'Cloud' },
          { name: 'AWS', icon: 'Server' },
          { name: 'Azure', icon: 'Globe' },
          { name: 'REST API', icon: 'Code' }
        ],
        apis: [
          {
            method: 'POST',
            endpoint: '/api/v1/tts/synthesize',
            description: 'Convert text to speech',
            version: 'v1.2'
          },
          {
            method: 'GET',
            endpoint: '/api/v1/tts/voices',
            description: 'List available voices',
            version: 'v1.2'
          },
          {
            method: 'POST',
            endpoint: '/api/v1/tts/batch',
            description: 'Batch text processing',
            version: 'v1.2'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Starter',
            description: 'Perfect for small projects',
            price: '29',
            period: 'month',
            features: [
              '10,000 characters/month',
              '5 voice options',
              'Basic API access',
              'Email support'
            ]
          },
          {
            name: 'Professional',
            description: 'Ideal for growing businesses',
            price: '99',
            period: 'month',
            popular: true,
            features: [
              '100,000 characters/month',
              '20+ voice options',
              'Advanced API features',
              'Priority support',
              'Custom voice training'
            ]
          },
          {
            name: 'Enterprise',
            description: 'For large-scale deployments',
            price: '299',
            period: 'month',
            features: [
              'Unlimited characters',
              'All voice options',
              'White-label solution',
              '24/7 dedicated support',
              'Custom integrations'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'EduTech Solutions',
          industry: { name: 'Education Technology', icon: 'GraduationCap' },
          challenge: 'Needed to make educational content accessible to visually impaired students while maintaining engagement and comprehension levels.',
          solution: 'Implemented our Text-to-Speech solution with custom educational voices and SSML markup for enhanced learning experiences.',
          results: [
            { value: '85%', metric: 'Accessibility Improvement' },
            { value: '40%', metric: 'Student Engagement' },
            { value: '60%', metric: 'Content Consumption' },
            { value: '25%', metric: 'Learning Retention' }
          ],
          timeline: '6 weeks',
          teamSize: '4 specialists'
        },
        {
          company: 'Global News Network',
          industry: { name: 'Media & Broadcasting', icon: 'Radio' },
          challenge: 'Required automated voice-over generation for breaking news and multilingual content distribution across global markets.',
          solution: 'Deployed enterprise TTS solution with real-time processing and multi-language support for 24/7 news broadcasting.',
          results: [
            { value: '70%', metric: 'Production Speed' },
            { value: '50%', metric: 'Cost Reduction' },
            { value: '12', metric: 'Languages Supported' },
            { value: '99.8%', metric: 'Uptime Achievement' }
          ],
          timeline: '8 weeks',
          teamSize: '6 specialists'
        }
      ],
      partners: [
        {
          name: 'Google Cloud AI',
          description: 'Advanced neural voice models with global infrastructure',
          icon: 'Cloud',
          integrationLevel: 'Native',
          features: ['Neural voices', 'Global CDN', 'Auto-scaling'],
          setupTime: '< 1 hour'
        },
        {
          name: 'Amazon Polly',
          description: 'Lifelike speech synthesis with SSML support',
          icon: 'Volume2',
          integrationLevel: 'Full',
          features: ['SSML', 'Neural TTS', 'Voice effects'],
          setupTime: '2-4 hours'
        },
        {
          name: 'Microsoft Azure',
          description: 'Cognitive services with custom voice capabilities',
          icon: 'Mic',
          integrationLevel: 'Deep',
          features: ['Custom voices', 'Real-time', 'Batch processing'],
          setupTime: '1-2 hours'
        }
      ],
      techStack: [
        { name: 'TensorFlow', icon: 'Cpu', version: '2.13' },
        { name: 'PyTorch', icon: 'Zap', version: '2.0' },
        { name: 'FastAPI', icon: 'Code', version: '0.104' },
        { name: 'Redis', icon: 'Database', version: '7.2' },
        { name: 'Docker', icon: 'Package', version: '24.0' },
        { name: 'Kubernetes', icon: 'Server', version: '1.28' }
      ],
      resources: {
        documentation: [
          {
            title: 'Getting Started Guide',
            description: 'Complete setup and integration guide',
            icon: 'BookOpen'
          },
          {
            title: 'API Reference',
            description: 'Comprehensive API documentation',
            icon: 'Code'
          },
          {
            title: 'Voice Customization',
            description: 'Guide to creating custom voices',
            icon: 'Settings'
          },
          {
            title: 'Best Practices',
            description: 'Optimization tips and recommendations',
            icon: 'Star'
          }
        ],
        tools: [
          {
            name: 'Voice Preview Tool',
            description: 'Test different voices and settings',
            type: 'Interactive',
            duration: '5 min'
          },
          {
            name: 'Cost Calculator',
            description: 'Estimate usage costs and pricing',
            type: 'Calculator',
            duration: '2 min'
          },
          {
            name: 'Integration Wizard',
            description: 'Step-by-step integration assistant',
            type: 'Wizard',
            duration: '15 min'
          }
        ],
        support: [
          {
            title: 'Technical Support',
            description: '24/7 technical assistance and troubleshooting',
            availability: 'Available',
            channel: 'Chat & Email'
          },
          {
            title: 'Implementation Support',
            description: 'Dedicated support during integration phase',
            availability: 'Available',
            channel: 'Video Call'
          },
          {
            title: 'Training Sessions',
            description: 'Live training sessions for your team',
            availability: 'Scheduled',
            channel: 'Video Conference'
          }
        ],
        faq: [
          {
            question: 'What audio formats are supported?',
            answer: 'We support MP3, WAV, OGG, and FLAC formats with customizable bitrates and sample rates.'
          },
          {
            question: 'Can I create custom voices?',
            answer: 'Yes, our Professional and Enterprise plans include custom voice training capabilities with your own voice samples.'
          },
          {
            question: 'What languages are available?',
            answer: 'We support over 40 languages and dialects with native speaker quality voices and regional accents.'
          },
          {
            question: 'How fast is the processing?',
            answer: 'Real-time processing with typical response times under 200ms for standard requests and batch processing for large volumes.'
          }
        ]
      }
    },
    {
      id: 'speech-to-text',
      name: 'Speech-to-Text',
      icon: 'Mic',
      shortDescription: 'Convert spoken words into accurate text with real-time transcription capabilities',
      description: `Transform audio content into accurate text transcriptions using our state-of-the-art speech recognition technology. Our solution supports real-time transcription, multiple languages, and specialized vocabularies for various industries and use cases.`,
      features: [
        'Real-time transcription',
        'Multi-language support',
        'Custom vocabulary',
        'Speaker identification',
        'Noise cancellation',
        'Batch processing'
      ],
      complexity: 'High',
      timeline: '3-6 weeks',
      techSpecs: {
        architecture: [
          'Deep learning speech recognition',
          'Real-time streaming pipeline',
          'WebSocket and REST APIs',
          'Distributed processing system',
          'Edge computing support'
        ],
        performance: [
          { label: 'Accuracy Rate', value: '97.5%', percentage: '98%' },
          { label: 'Processing Speed', value: 'Real-time', percentage: '100%' },
          { label: 'Language Support', value: '50+ languages', percentage: '90%' },
          { label: 'Uptime', value: '99.95%', percentage: '100%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Audio Analysis',
            description: 'Analyze audio requirements and quality specifications',
            duration: '1 week',
            team: '2-3 specialists'
          },
          {
            title: 'Model Configuration',
            description: 'Configure speech models and custom vocabularies',
            duration: '2-3 weeks',
            team: '2-4 engineers'
          },
          {
            title: 'Integration Setup',
            description: 'Implement streaming and batch processing endpoints',
            duration: '1 week',
            team: '3-4 developers'
          },
          {
            title: 'Accuracy Optimization',
            description: 'Fine-tune models and optimize for specific use cases',
            duration: '1-2 weeks',
            team: '2-3 specialists'
          }
        ],
        codeExample: `import { SpeechToTextClient } from '@givi-ai/stt-sdk';

const sttClient = new SpeechToTextClient({
  apiKey: 'your-api-key',
  region: 'us-east-1'
});

// Real-time transcription
const startRealTimeTranscription = async () => {
  const stream = await sttClient.createStream({
    language: 'en-US',
    sampleRate: 16000,
    encoding: 'LINEAR16',
    enableSpeakerDiarization: true
  });

  stream.on('transcript', (result) => {
    console.log('Transcript:', result.text);
    console.log('Confidence:', result.confidence);
  });

  return stream;
};`
      },
      integration: {
        platforms: [
          { name: 'WebRTC', icon: 'Mic' },
          { name: 'Twilio', icon: 'Phone' },
          { name: 'Zoom SDK', icon: 'Video' },
          { name: 'Mobile SDKs', icon: 'Smartphone' }
        ],
        apis: [
          {
            method: 'POST',
            endpoint: '/api/v1/stt/transcribe',
            description: 'Transcribe audio file',
            version: 'v1.3'
          },
          {
            method: 'WS',
            endpoint: '/api/v1/stt/stream',
            description: 'Real-time transcription',
            version: 'v1.3'
          },
          {
            method: 'POST',
            endpoint: '/api/v1/stt/batch',
            description: 'Batch audio processing',
            version: 'v1.3'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Basic',
            description: 'For small applications',
            price: '39',
            period: 'month',
            features: [
              '10 hours/month',
              'Basic accuracy',
              'Standard API',
              'Email support'
            ]
          },
          {
            name: 'Professional',
            description: 'For business applications',
            price: '149',
            period: 'month',
            popular: true,
            features: [
              '100 hours/month',
              'High accuracy',
              'Real-time streaming',
              'Priority support',
              'Custom vocabulary'
            ]
          },
          {
            name: 'Enterprise',
            description: 'For large-scale deployments',
            price: '499',
            period: 'month',
            features: [
              'Unlimited hours',
              'Maximum accuracy',
              'On-premise deployment',
              '24/7 dedicated support',
              'Custom model training'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'LegalTech Pro',
          industry: { name: 'Legal Services', icon: 'Scale' },
          challenge: 'Needed accurate transcription of legal proceedings and client meetings with specialized legal terminology.',
          solution: 'Implemented custom STT solution with legal vocabulary and speaker identification for court reporting.',
          results: [
            { value: '98.5%', metric: 'Transcription Accuracy' },
            { value: '75%', metric: 'Time Savings' },
            { value: '90%', metric: 'Cost Reduction' },
            { value: '100%', metric: 'Compliance Rate' }
          ],
          timeline: '10 weeks',
          teamSize: '5 specialists'
        }
      ],
      partners: [
        {
          name: 'Google Speech API',
          description: 'Advanced speech recognition with global language support',
          icon: 'Mic',
          integrationLevel: 'Native',
          features: ['Real-time', 'Batch processing', 'Custom models'],
          setupTime: '< 2 hours'
        },
        {
          name: 'Azure Cognitive',
          description: 'Enterprise-grade speech services with custom models',
          icon: 'Cloud',
          integrationLevel: 'Deep',
          features: ['Custom speech', 'Speaker recognition', 'Noise reduction'],
          setupTime: '2-4 hours'
        }
      ],
      techStack: [
        { name: 'Whisper', icon: 'Mic', version: '3.0' },
        { name: 'PyTorch', icon: 'Zap', version: '2.0' },
        { name: 'WebRTC', icon: 'Globe', version: '1.0' },
        { name: 'Redis', icon: 'Database', version: '7.2' },
        { name: 'Docker', icon: 'Package', version: '24.0' },
        { name: 'Kubernetes', icon: 'Server', version: '1.28' }
      ],
      resources: {
        documentation: [
          {
            title: 'Quick Start Guide',
            description: 'Get started with speech-to-text in minutes',
            icon: 'Play'
          },
          {
            title: 'API Documentation',
            description: 'Complete API reference and examples',
            icon: 'Code'
          },
          {
            title: 'Custom Vocabulary',
            description: 'How to add domain-specific terms',
            icon: 'Book'
          }
        ],
        tools: [
          {
            name: 'Audio Tester',
            description: 'Test transcription with your audio files',
            type: 'Interactive',
            duration: '3 min'
          },
          {
            name: 'Accuracy Calculator',
            description: 'Estimate accuracy for your use case',
            type: 'Calculator',
            duration: '5 min'
          }
        ],
        support: [
          {
            title: 'Technical Support',
            description: 'Expert help with integration and optimization',
            availability: 'Available',
            channel: 'Chat & Email'
          },
          {
            title: 'Model Training',
            description: 'Custom model training for your domain',
            availability: 'Available',
            channel: 'Consultation'
          }
        ],
        faq: [
          {
            question: 'What audio formats are supported?',
            answer: 'We support WAV, MP3, FLAC, and OGG formats with various sample rates and bit depths.'
          },
          {
            question: 'How accurate is the transcription?',
            answer: 'Our accuracy rates range from 95-98% depending on audio quality and language, with custom models achieving even higher accuracy.'
          }
        ]
      }
    },
//     {
//       id: 'chatbots',
//       name: 'AI Chatbots',
//       icon: 'MessageCircle',
//       shortDescription: 'Intelligent conversational AI that understands context and provides human-like responses',
//       description: `Create sophisticated AI chatbots that understand natural language, maintain context, and provide intelligent responses. Our chatbot solutions integrate seamlessly with your existing systems and can be customized for any industry or use case.`,
//       features: [
//         'Natural language understanding',
//         'Context awareness',
//         'Multi-channel deployment',
//         'Custom knowledge base',
//         'Analytics dashboard',
//         'Human handoff'
//       ],
//       complexity: 'High',
//       timeline: '4-8 weeks',
//       techSpecs: {
//         architecture: [
//           'Transformer-based NLP models',
//           'Microservices architecture',
//           'Real-time conversation engine',
//           'Multi-channel integration',
//           'Scalable cloud infrastructure'
//         ],
//         performance: [
//           { label: 'Response Time', value: '< 500ms', percentage: '95%' },
//           { label: 'Intent Accuracy', value: '96.8%', percentage: '97%' },
//           { label: 'User Satisfaction', value: '4.7/5.0', percentage: '94%' },
//           { label: 'Uptime', value: '99.9%', percentage: '100%' }
//         ]
//       },
//       implementation: {
//         steps: [
//           {
//             title: 'Use Case Analysis',
//             description: 'Define conversation flows and business requirements',
//             duration: '1-2 weeks',
//             team: '3-4 specialists'
//           },
//           {
//             title: 'Knowledge Base Setup',
//             description: 'Create and train custom knowledge base',
//             duration: '2-3 weeks',
//             team: '2-3 engineers'
//           },
//           {
//             title: 'Integration Development',
//             description: 'Integrate with existing systems and channels',
//             duration: '1-2 weeks',
//             team: '3-4 developers'
//           },
//           {
//             title: 'Testing & Training',
//             description: 'Comprehensive testing and model fine-tuning',
//             duration: '1-2 weeks',
//             team: '2-4 specialists'
//           }
//         ],
//         codeExample: `import { ChatbotClient } from '@givi-ai/chatbot-sdk';
//
// const chatbot = new ChatbotClient({
//   apiKey: 'your-api-key',
//   botId: 'your-bot-id',
//   region: 'us-east-1'
// });
//
// const handleUserMessage = async (message, sessionId) => {
//   try {
//     const response = await chatbot.sendMessage({
//       text: message,
//       sessionId: sessionId,
//       context: {
//         userId: 'user-123',
//         channel: 'web'
//       }
//     });
//
//     return {
//       text: response.text,
//       intent: response.intent,
//       confidence: response.confidence,
//       suggestions: response.suggestions
//     };
//   } catch (error) {
//     console.error('Chatbot Error:', error);
//     return { text: 'Sorry, I encountered an error.' };
//   }
// };`
//       },
//       integration: {
//         platforms: [
//           { name: 'WhatsApp', icon: 'MessageSquare' },
//           { name: 'Slack', icon: 'Hash' },
//           { name: 'Facebook', icon: 'Facebook' },
//           { name: 'Web Widget', icon: 'Globe' }
//         ],
//         apis: [
//           {
//             method: 'POST',
//             endpoint: '/api/v1/chat/message',
//             description: 'Send message to chatbot',
//             version: 'v2.1'
//           },
//           {
//             method: 'GET',
//             endpoint: '/api/v1/chat/history',
//             description: 'Get conversation history',
//             version: 'v2.1'
//           },
//           {
//             method: 'POST',
//             endpoint: '/api/v1/chat/train',
//             description: 'Train with new data',
//             version: 'v2.1'
//           }
//         ]
//       },
//       pricing: {
//         tiers: [
//           {
//             name: 'Starter',
//             description: 'For small businesses',
//             price: '79',
//             period: 'month',
//             features: [
//               '1,000 conversations/month',
//               'Basic NLP',
//               'Web widget',
//               'Email support'
//             ]
//           },
//           {
//             name: 'Business',
//             description: 'For growing companies',
//             price: '249',
//             period: 'month',
//             popular: true,
//             features: [
//               '10,000 conversations/month',
//               'Advanced NLP',
//               'Multi-channel support',
//               'Analytics dashboard',
//               'Priority support'
//             ]
//           },
//           {
//             name: 'Enterprise',
//             description: 'For large organizations',
//             price: '799',
//             period: 'month',
//             features: [
//               'Unlimited conversations',
//               'Custom AI models',
//               'White-label solution',
//               'Advanced analytics',
//               '24/7 dedicated support'
//             ]
//           }
//         ]
//       },
//       caseStudies: [
//         {
//           company: 'RetailMax',
//           industry: { name: 'E-commerce', icon: 'ShoppingCart' },
//           challenge: 'High customer service volume with repetitive inquiries affecting response times and customer satisfaction.',
//           solution: 'Deployed AI chatbot with product knowledge base and order management integration for 24/7 customer support.',
//           results: [
//             { value: '80%', metric: 'Query Resolution' },
//             { value: '60%', metric: 'Response Time Reduction' },
//             { value: '45%', metric: 'Support Cost Savings' },
//             { value: '4.8/5', metric: 'Customer Satisfaction' }
//           ],
//           timeline: '12 weeks',
//           teamSize: '6 specialists'
//         }
//       ],
//       partners: [
//         {
//           name: 'OpenAI GPT',
//           description: 'Advanced language models for natural conversations',
//           icon: 'Brain',
//           integrationLevel: 'Native',
//           features: ['GPT-4', 'Function calling', 'Context retention'],
//           setupTime: '< 1 hour'
//         },
//         {
//           name: 'Dialogflow',
//           description: 'Google\'s conversational AI platform',
//           icon: 'MessageCircle',
//           integrationLevel: 'Full',
//           features: ['Intent recognition', 'Entity extraction', 'Multi-language'],
//           setupTime: '2-4 hours'
//         }
//       ],
//       techStack: [
//         { name: 'OpenAI', icon: 'Brain', version: 'GPT-4' },
//         { name: 'LangChain', icon: 'Link', version: '0.0.350' },
//         { name: 'FastAPI', icon: 'Code', version: '0.104' },
//         { name: 'PostgreSQL', icon: 'Database', version: '15.0' },
//         { name: 'Redis', icon: 'Zap', version: '7.2' },
//         { name: 'Docker', icon: 'Package', version: '24.0' }
//       ],
//       resources: {
//         documentation: [
//           {
//             title: 'Chatbot Builder Guide',
//             description: 'Step-by-step chatbot creation guide',
//             icon: 'Bot'
//           },
//           {
//             title: 'Conversation Design',
//             description: 'Best practices for conversation flows',
//             icon: 'MessageSquare'
//           },
//           {
//             title: 'Integration Guide',
//             description: 'Connect to popular platforms',
//             icon: 'Plug'
//           }
//         ],
//         tools: [
//           {
//             name: 'Conversation Simulator',
//             description: 'Test your chatbot conversations',
//             type: 'Interactive',
//             duration: '10 min'
//           },
//           {
//             name: 'Intent Analyzer',
//             description: 'Analyze user intent patterns',
//             type: 'Analytics',
//             duration: '5 min'
//           }
//         ],
//         support: [
//           {
//             title: 'Bot Training',
//             description: 'Help with training and optimization',
//             availability: 'Available',
//             channel: 'Video Call'
//           },
//           {
//             title: 'Conversation Design',
//             description: 'Expert help with conversation flows',
//             availability: 'Available',
//             channel: 'Consultation'
//           }
//         ],
//         faq: [
//           {
//             question: 'How long does it take to train a chatbot?',
//             answer: 'Initial training takes 2-4 weeks depending on complexity. The bot continues learning from interactions.'
//           },
//           {
//             question: 'Can the chatbot handle multiple languages?',
//             answer: 'Yes, our chatbots support 40+ languages with native understanding and response capabilities.'
//           }
//         ]
//       }
//     },
    {
      id: 'bigquery-sql',
      name: 'BigQuery & SQL',
      icon: 'Database',
      shortDescription: 'Advanced data analytics and SQL optimization for large-scale data processing',
      description: `Unlock the power of your data with our BigQuery and SQL optimization services. We help you design efficient data warehouses, optimize query performance, and create automated data pipelines for real-time analytics and business intelligence.`,
      features: [
        'Query optimization',
        'Data warehouse design',
        'Real-time analytics',
        'Automated pipelines',
        'Cost optimization',
        'Performance monitoring'
      ],
      complexity: 'High',
      timeline: '6-12 weeks',
      techSpecs: {
        architecture: [
          'Cloud-native data warehouse',
          'Serverless query processing',
          'Real-time streaming',
          'Multi-cloud compatibility'
        ],
        performance: [
          { label: 'Query Speed', value: '10x faster', percentage: '95%' },
          { label: 'Cost Reduction', value: '60%', percentage: '85%' },
          { label: 'Data Freshness', value: 'Real-time', percentage: '100%' },
          { label: 'Uptime', value: '99.99%', percentage: '100%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Data Assessment',
            description: 'Analyze current data infrastructure and requirements',
            duration: '2-3 weeks',
            team: '3-4 specialists'
          },
          {
            title: 'Architecture Design',
            description: 'Design optimal data warehouse architecture',
            duration: '2-4 weeks',
            team: '2-3 architects'
          },
          {
            title: 'Migration & Setup',
            description: 'Migrate data and set up BigQuery environment',
            duration: '3-4 weeks',
            team: '4-5 engineers'
          },
          {
            title: 'Optimization & Training',
            description: 'Optimize queries and train team on best practices',
            duration: '2-3 weeks',
            team: '2-3 specialists'
          }
        ],
        codeExample: `-- Optimized BigQuery query example
WITH user_metrics AS (
  SELECT
    user_id,
    DATE(created_at) as date,
    COUNT(*) as daily_actions,
    SUM(revenue) as daily_revenue
  FROM \`project.dataset.user_events\`
  WHERE DATE(created_at) >= DATE_SUB(CURRENT_DATE(), INTERVAL 30 DAY)
  GROUP BY user_id, DATE(created_at)
),
user_summary AS (
  SELECT
    user_id,
    AVG(daily_actions) as avg_daily_actions,
    SUM(daily_revenue) as total_revenue,
    COUNT(DISTINCT date) as active_days
  FROM user_metrics
  GROUP BY user_id
)
SELECT
  us.*,
  CASE
    WHEN avg_daily_actions > 10 THEN 'High'
    WHEN avg_daily_actions > 5 THEN 'Medium' ELSE'Low'
  END as engagement_level
FROM user_summary us
WHERE total_revenue > 0
ORDER BY total_revenue DESC;`
      },
      integration: {
        platforms: [
          { name: 'Google Cloud', icon: 'Cloud' },
          { name: 'Looker', icon: 'BarChart3' },
          { name: 'Tableau', icon: 'PieChart' },
          { name: 'Power BI', icon: 'TrendingUp' }
        ],
        apis: [
          {
            method: 'POST',
            endpoint: '/bigquery/v2/projects/{projectId}/jobs',
            description: 'Execute BigQuery job',
            version: 'v2'
          },
          {
            method: 'GET',
            endpoint: '/bigquery/v2/projects/{projectId}/datasets',
            description: 'List datasets',
            version: 'v2'
          },
          {
            method: 'POST',
            endpoint: '/bigquery/v2/projects/{projectId}/queries',
            description: 'Run query',
            version: 'v2'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Consultation',
            description: 'One-time optimization',
            price: '2,500',
            period: 'project',
            features: [
              'Query optimization',
              'Performance audit',
              'Best practices guide',
              '30-day support'
            ]
          },
          {
            name: 'Implementation',
            description: 'Full setup and migration',
            price: '15,000',
            period: 'project',
            popular: true,
            features: [
              'Complete migration',
              'Custom architecture',
              'Training sessions',
              '90-day support',
              'Performance monitoring'
            ]
          },
          {
            name: 'Managed Service',
            description: 'Ongoing management',
            price: '5,000',
            period: 'month',
            features: [
              'Continuous optimization',
              'Monitoring & alerts',
              'Regular reporting',
              'Dedicated support',
              'Cost optimization'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'DataCorp Analytics',
          industry: { name: 'Financial Services', icon: 'TrendingUp' },
          challenge: 'Slow query performance and high BigQuery costs affecting real-time reporting capabilities.',
          solution: 'Redesigned data architecture with optimized queries and implemented cost-effective data partitioning strategies.',
          results: [
            { value: '85%', metric: 'Query Speed Improvement' },
            { value: '70%', metric: 'Cost Reduction' },
            { value: '99.9%', metric: 'Uptime Achievement' },
            { value: '50%', metric: 'Development Time Savings' }
          ],
          timeline: '16 weeks',
          teamSize: '7 specialists'
        }
      ],
      partners: [
        {
          name: 'Google Cloud',
          description: 'Native BigQuery integration and optimization',
          icon: 'Cloud',
          integrationLevel: 'Native',
          features: ['BigQuery ML', 'Data Studio', 'Cloud Functions'],
          setupTime: 'Immediate'
        },
        {
          name: 'dbt',
          description: 'Data transformation and modeling framework',
          icon: 'GitBranch',
          integrationLevel: 'Deep',
          features: ['Data modeling', 'Testing', 'Documentation'],
          setupTime: '1-2 days'
        }
      ],
      techStack: [
        { name: 'BigQuery', icon: 'Database', version: 'Latest' },
        { name: 'dbt', icon: 'GitBranch', version: '1.7' },
        { name: 'Airflow', icon: 'Workflow', version: '2.7' },
        { name: 'Terraform', icon: 'Settings', version: '1.6' },
        { name: 'Python', icon: 'Code', version: '3.11' },
        { name: 'Docker', icon: 'Package', version: '24.0' }
      ],
      resources: {
        documentation: [
          {
            title: 'BigQuery Optimization Guide',
            description: 'Complete guide to query optimization',
            icon: 'Zap'
          },
          {
            title: 'Data Modeling Best Practices',
            description: 'Design efficient data models',
            icon: 'Database'
          },
          {
            title: 'Cost Optimization Strategies',
            description: 'Reduce BigQuery costs effectively',
            icon: 'DollarSign'
          }
        ],
        tools: [
          {
            name: 'Query Analyzer',
            description: 'Analyze and optimize your queries',
            type: 'Analyzer',
            duration: '15 min'
          },
          {
            name: 'Cost Calculator',
            description: 'Estimate BigQuery costs',
            type: 'Calculator',
            duration: '5 min'
          }
        ],
        support: [
          {
            title: 'Architecture Review',
            description: 'Expert review of your data architecture',
            availability: 'Available',
            channel: 'Video Call'
          },
          {
            title: 'Performance Optimization',
            description: 'Ongoing query and cost optimization',
            availability: 'Available',
            channel: 'Consultation'
          }
        ],
        faq: [
          {
            question: 'How much can I save on BigQuery costs?',
            answer: 'Typical cost savings range from 40-70% through query optimization, partitioning, and efficient data modeling.'
          },
          {
            question: 'Do you support other cloud platforms?',
            answer: 'Yes, we also work with AWS Redshift, Azure Synapse, and Snowflake for multi-cloud data strategies.'
          }
        ]
      }
    },
    {
      id: 'google-sheets',
      name: 'Google Sheets',
      icon: 'FileSpreadsheet',
      shortDescription: 'Automate workflows and create powerful applications using Google Sheets and Apps Script',
      description: `Transform Google Sheets into powerful business applications with custom automation, data processing, and integration capabilities. Our Apps Script solutions help you automate repetitive tasks and create sophisticated workflows within the Google Workspace ecosystem.`,
      features: [
        'Workflow automation',
        'Custom functions',
        'Data integration',
        'Report generation',
        'Email automation',
        'API integrations'
      ],
      complexity: 'Medium',
      timeline: '2-6 weeks',
      techSpecs: {
        architecture: [
          'Google Apps Script runtime',
          'Serverless automation',
          'Small Scale Business CRM',
          'Formula & Sheet Dashboard'
        ],
        performance: [
          { label: 'Execution Speed', value: '< 2 seconds', percentage: '90%' },
          { label: 'Reliability', value: '99.5%', percentage: '95%' },
          { label: 'Integration Success', value: '98%', percentage: '98%' },
          { label: 'User Satisfaction', value: '4.6/5.0', percentage: '92%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Requirements Gathering',
            description: 'Analyze current workflows and automation needs',
            duration: '3-5 days',
            team: '1-2 specialists'
          },
          {
            title: 'Script Development',
            description: 'Develop custom Apps Script solutions',
            duration: '1-3 weeks',
            team: '1-2 developers'
          },
          {
            title: 'Integration Setup',
            description: 'Connect with external APIs and services',
            duration: '3-7 days',
            team: '1-2 engineers'
          },
          {
            title: 'Testing & Deployment',
            description: 'Test automation and deploy to production',
            duration: '3-5 days',
            team: '1-2 specialists'
          }
        ],
        codeExample: `// Google Apps Script automation example
function automateReportGeneration() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const data = sheet.getDataRange().getValues();

  // Process data and generate report
  const report = processData(data);

  // Create new sheet for report
  const reportSheet = SpreadsheetApp.create('Monthly Report');
  const reportRange = reportSheet.getActiveSheet();

  // Populate report data
  reportRange.getRange(1, 1, report.length, report[0].length)
           .setValues(report);

  // Format report
  formatReport(reportRange);

  // Send email notification
  sendReportEmail(reportSheet.getUrl());
}

function processData(data) {
  // Custom data processing logic
  return data.map(row => {
    // Transform data as needed
    return [
      row[0], // Date
      row[1], // Amount
      row[2] * 1.1 // Apply calculation
    ];
  });
}

function sendReportEmail(reportUrl) {
  MailApp.sendEmail({
    to: 'manager@company.com',
    subject: 'Monthly Report Generated',
    body: \`Your monthly report is ready: \${reportUrl}\`
  });
}`
      },
      integration: {
        platforms: [
          { name: 'Gmail', icon: 'Mail' },
          { name: 'Google Drive', icon: 'HardDrive' },
          { name: 'Google Calendar', icon: 'Calendar' },
          { name: 'External APIs', icon: 'Plug' }
        ],
        apis: [
          {
            method: 'GET',
            endpoint: 'SpreadsheetApp.openById()',
            description: 'Access Google Sheets',
            version: 'Apps Script'
          },
          {
            method: 'POST',
            endpoint: 'MailApp.sendEmail()',
            description: 'Send automated emails',
            version: 'Apps Script'
          },
          {
            method: 'GET',
            endpoint: 'UrlFetchApp.fetch()',
            description: 'External API calls',
            version: 'Apps Script'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Basic Automation',
            description: 'Simple workflow automation',
            price: '500',
            period: 'project',
            features: [
              'Up to 3 automations',
              'Basic integrations',
              'Email notifications',
              '30-day support'
            ]
          },
          {
            name: 'Advanced Solution',
            description: 'Complex business applications',
            price: '2,500',
            period: 'project',
            popular: true,
            features: [
              'Unlimited automations',
              'API integrations',
              'Custom functions',
              'Training session',
              '90-day support'
            ]
          },
          {
            name: 'Enterprise Package',
            description: 'Large-scale implementations',
            price: '7,500',
            period: 'project',
            features: [
              'Multi-sheet applications',
              'Advanced integrations',
              'User management',
              'Comprehensive training',
              '6-month support'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'Marketing Agency Plus',
          industry: { name: 'Marketing & Advertising', icon: 'Megaphone' },
          challenge: 'Manual reporting processes taking 20+ hours weekly, affecting client service delivery and team productivity.',
          solution: 'Automated report generation system with Google Sheets, Apps Script, and client data integration.',
          results: [
            { value: '90%', metric: 'Time Savings' },
            { value: '95%', metric: 'Accuracy Improvement' },
            { value: '100%', metric: 'Client Satisfaction' },
            { value: '50%', metric: 'Cost Reduction' }
          ],
          timeline: '8 weeks',
          teamSize: '3 specialists'
        }
      ],
      partners: [
        {
          name: 'Google Workspace',
          description: 'Native integration with all Google services',
          icon: 'Globe',
          integrationLevel: 'Native',
          features: ['Sheets API', 'Drive API', 'Gmail API'],
          setupTime: 'Immediate'
        },
        {
          name: 'Zapier',
          description: 'Connect with 3000+ external applications',
          icon: 'Zap',
          integrationLevel: 'Full',
          features: ['Webhooks', 'Triggers', 'Actions'],
          setupTime: '< 1 hour'
        }
      ],
      techStack: [
        { name: 'Apps Script', icon: 'Code', version: 'V8 Runtime' },
        { name: 'Google APIs', icon: 'Globe', version: 'Latest' },
        { name: 'JavaScript', icon: 'Code', version: 'ES6+' },
        { name: 'HTML/CSS', icon: 'Layout', version: 'HTML5' },
        { name: 'JSON', icon: 'FileText', version: 'Latest' },
        { name: 'OAuth 2.0', icon: 'Shield', version: '2.0' }
      ],
//       resources: {
//         documentation: [
//           {
//             title: 'Apps Script Fundamentals',
//             description: 'Learn the basics of Google Apps Script',
//             icon: 'BookOpen'
//           },
//           {
//             title: 'Automation Recipes',
//             description: 'Common automation patterns and examples',
//             icon: 'Zap'
//           },
//           {
//             title: 'API Integration Guide',
//             description: 'Connect external services to Sheets',
//             icon: 'Plug'
//           }
//         ],
//         tools: [
//           {
//             name: 'Script Generator',
//             description: 'Generate Apps Script code for common tasks',
//             type: 'Generator',
//             duration: '5 min'
//           },
//           {
//             name: 'Automation Planner',
//             description: 'Plan your workflow automation',
//             type: 'Planner',
//             duration: '10 min'
//           }
//         ],
//         support: [
//           {
//             title: 'Script Development',
//             description: 'Custom script development and optimization',
//             availability: 'Available',
//             channel: 'Email & Chat'
//           },
//           {
//             title: 'Troubleshooting',
//             description: 'Help with script errors and debugging',
//             availability: 'Available',
//             channel: 'Video Call'
//           }
//         ],
//         faq: [
//           {
//             question: 'What can be automated with Apps Script?',
//             answer: 'Almost any repetitive task in Google Workspace: data processing, report generation, email automation, calendar management, and more.'
//           },
//           {
//             question: 'Are there any limitations?',
//             answer: 'Apps Script has execution time limits (6 minutes) and daily quotas, but these rarely affect typical business automations.'
//           }
//         ]
//       }
    },
    {
      id: 'data-visualization',
      name: 'Data Visualization',
      icon: 'BarChart3',
      shortDescription: 'Transform complex data into compelling visual stories and interactive dashboards',
      description: `Create stunning, interactive data visualizations that make complex information accessible and actionable. Our solutions combine advanced analytics with beautiful design to help you communicate insights effectively and drive data-driven decisions.`,
      features: [
        'Interactive dashboards',
        'Real-time updates',
        'Custom chart types',
        'Mobile responsive',
        'Export capabilities',
        'Collaborative features'
      ],
      complexity: 'Medium',
      timeline: '3-8 weeks',
      techSpecs: {
        architecture: [
          'Modern web technologies',
          'Real-time data streaming',
          'Cloud-based rendering',
          'API-driven architecture',
          'Multiple Data Source Support',
          'Tools: Looker Studio, PowerBI'
        ],
        performance: [
          { label: 'Load Time', value: '< 1 second', percentage: '95%' },
          { label: 'Interactivity', value: '< 100ms', percentage: '98%' },
          { label: 'Mobile Performance', value: '90+ score', percentage: '92%' },
          { label: 'Data Accuracy', value: '99.9%', percentage: '100%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Data Analysis',
            description: 'Analyze data sources and visualization requirements',
            duration: '1 week',
            team: '2-3 specialists'
          },
          {
            title: 'Design & Prototyping',
            description: 'Create wireframes and interactive prototypes',
            duration: '1-2 weeks',
            team: '2-3 designers'
          },
          {
            title: 'Development',
            description: 'Build interactive dashboards and visualizations',
            duration: '2-4 weeks',
            team: '3-4 developers'
          },
          {
            title: 'Testing & Optimization',
            description: 'Performance testing and user experience optimization',
            duration: '1 week',
            team: '2-3 specialists'
          }
        ],
        codeExample: `import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';

const InteractiveDashboard = ({ dataSource }) => {
  const [data, setData] = useState([]);
  const [chartType, setChartType] = useState('line');

  useEffect(() => {
    // Fetch real-time data
    const fetchData = async () => {
      const response = await fetch(dataSource);
      const result = await response.json();
      setData(result);
    };

    fetchData();
    const interval = setInterval(fetchData, 30000); // Update every 30s

    return () => clearInterval(interval);
  }, [dataSource]);

  const renderChart = () => {
    const ChartComponent = chartType === 'line' ? LineChart : BarChart;
    const DataComponent = chartType === 'line' ? Line : Bar;

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ChartComponent data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <DataComponent
            dataKey="value"
            stroke="#4f8cf7"
            fill="#4f8cf7"
          />
        </ChartComponent>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="dashboard">
      <div className="controls">
        <button onClick={() => setChartType('line')}>Line Chart</button>
        <button onClick={() => setChartType('bar')}>Bar Chart</button>
      </div>
      {renderChart()}
    </div>
  );
};`
      },
      integration: {
        platforms: [
          { name: 'Tableau', icon: 'PieChart' },
          { name: 'Power BI', icon: 'TrendingUp' },
          { name: 'D3.js', icon: 'BarChart3' },
          { name: 'React/Vue', icon: 'Code' }
        ],
        apis: [
          {
            method: 'GET',
            endpoint: '/api/v1/data/charts',
            description: 'Fetch chart data',
            version: 'v1.4'
          },
          {
            method: 'POST',
            endpoint: '/api/v1/dashboards',
            description: 'Create dashboard',
            version: 'v1.4'
          },
          {
            method: 'PUT',
            endpoint: '/api/v1/charts/{id}',
            description: 'Update chart configuration',
            version: 'v1.4'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Basic Charts',
            description: 'Simple visualizations',
            price: '1,200',
            period: 'project',
            features: [
              'Up to 5 chart types',
              'Static dashboards',
              'Basic interactivity',
              '30-day support'
            ]
          },
          {
            name: 'Interactive Dashboard',
            description: 'Full-featured dashboards',
            price: '4,500',
            period: 'project',
            popular: true,
            features: [
              'Unlimited chart types',
              'Real-time updates',
              'Advanced interactions',
              'Mobile responsive',
              '90-day support'
            ]
          },
          {
            name: 'Enterprise Solution',
            description: 'Large-scale implementations',
            price: '12,000',
            period: 'project',
            features: [
              'Custom visualizations',
              'Multi-user dashboards',
              'Advanced analytics',
              'White-label solution',
              '6-month support'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'HealthTech Innovations',
          industry: { name: 'Healthcare', icon: 'Heart' },
          challenge: 'Complex medical data needed to be presented clearly to both medical professionals and patients.',
          solution: 'Created interactive health dashboards with real-time patient monitoring and predictive analytics visualizations.',
          results: [
            { value: '65%', metric: 'Decision Speed' },
            { value: '80%', metric: 'Data Comprehension' },
            { value: '45%', metric: 'Patient Engagement' },
            { value: '30%', metric: 'Error Reduction' }
          ],
          timeline: '14 weeks',
          teamSize: '5 specialists'
        }
      ],
      partners: [
        {
          name: 'D3.js',
          description: 'Powerful data visualization library',
          icon: 'BarChart3',
          integrationLevel: 'Native',
          features: ['Custom charts', 'Animations', 'SVG rendering'],
          setupTime: '1-2 days'
        },
        {
          name: 'Chart.js',
          description: 'Simple yet flexible charting library',
          icon: 'PieChart',
          integrationLevel: 'Full',
          features: ['Responsive', 'Animated', 'Lightweight'],
          setupTime: '< 1 day'
        }
      ],
      techStack: [
        { name: 'D3.js', icon: 'BarChart3', version: '7.8' },
        { name: 'React', icon: 'Code', version: '18.2' },
        { name: 'TypeScript', icon: 'Code', version: '5.0' },
        { name: 'WebGL', icon: 'Zap', version: '2.0' },
        { name: 'Canvas API', icon: 'Image', version: 'HTML5' },
        { name: 'WebSockets', icon: 'Wifi', version: 'Latest' }
      ],
      resources: {
        documentation: [
          {
            title: 'Visualization Guide',
            description: 'Best practices for effective data visualization',
            icon: 'Eye'
          },
          {
            title: 'Chart Types Reference',
            description: 'When to use different chart types',
            icon: 'BarChart3'
          },
          {
            title: 'Interactive Features',
            description: 'Adding interactivity to your charts',
            icon: 'MousePointer'
          }
        ],
        tools: [
          {
            name: 'Chart Builder',
            description: 'Build charts with drag-and-drop interface',
            type: 'Builder',
            duration: '10 min'
          },
          {
            name: 'Color Palette Generator',
            description: 'Generate accessible color schemes',
            type: 'Generator',
            duration: '3 min'
          }
        ],
        support: [
          {
            title: 'Design Consultation',
            description: 'Expert advice on visualization design',
            availability: 'Available',
            channel: 'Video Call'
          },
          {
            title: 'Technical Support',
            description: 'Help with implementation and optimization',
            availability: 'Available',
            channel: 'Chat & Email'
          }
        ],
        faq: [
          {
            question: 'What data sources are supported?',
            answer: 'We support all major data sources including databases, APIs, CSV files, and real-time streams.'
          },
          {
            question: 'Can visualizations be embedded in other applications?',
            answer: 'Yes, our visualizations can be embedded as widgets or iframes in any web application.'
          }
        ]
      }
    },
    {
      id: 'website development',
      name: 'WebSite Development',
      icon: 'Globe',
      shortDescription: 'Modern, responsive web applications built with cutting-edge technologies',
      description: `Build powerful, scalable web sites using the latest technologies. Our development team creates responsive, animated sites  that deliver exceptional user experiences.`,
      features: [
        'Landing Pages',
        'Portfolio Design',
        '3D Animations',
        'Domain Purchase',
        'SEO friendly',
        'Upgrading Existing Websites'
      ],
      complexity: 'High',
      timeline: '8-16 weeks',
      techSpecs: {
        architecture: [
        'Landing Pages',
        'Portfolio Design',
        '3D Animations',
        'Domain Purchase',
        'SEO friendly',
        'Upgrading Existing Websites'
      ],
        performance: [
          { label: 'Page Load Speed', value: '< 2 seconds', percentage: '95%' },
          { label: 'Lighthouse Score', value: '90+', percentage: '92%' },
          { label: 'Mobile Performance', value: '95+', percentage: '90%' },
          { label: 'Uptime', value: '99.9%', percentage: '100%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Discovery & Planning',
            description: 'Requirements gathering and technical architecture planning',
            duration: '2-3 weeks',
            team: '3-4 specialists'
          },
          {
            title: 'Design & Prototyping',
            description: 'UI/UX design and interactive prototypes',
            duration: '2-4 weeks',
            team: '2-3 designers'
          },
          {
            title: 'Development',
            description: 'Frontend and backend development',
            duration: '6-10 weeks',
            team: '4-6 developers'
          },
          {
            title: 'Testing & Deployment',
            description: 'Quality assurance and production deployment',
            duration: '1-2 weeks',
            team: '2-3 specialists'
          }
        ],
        codeExample: `// Modern React application with TypeScript
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

// Components
import Header from '../../components/ui/Header';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { AuthProvider } from './contexts/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className={\`app \${theme}\`}>
            <Header theme={theme} setTheme={setTheme} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Toaster position="top-right" />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;`
      },
      integration: {
        platforms: [
          { name: 'React/Next.js', icon: 'Code' },
          { name: 'Node.js', icon: 'Server' },
          { name: 'AWS/GCP', icon: 'Cloud' },
          { name: 'MongoDB/PostgreSQL', icon: 'Database' }
        ],
        apis: [
          {
            method: 'GET',
            endpoint: '/api/v1/applications',
            description: 'List applications',
            version: 'v1.0'
          },
          {
            method: 'POST',
            endpoint: '/api/v1/deploy',
            description: 'Deploy application',
            version: 'v1.0'
          },
          {
            method: 'GET',
            endpoint: '/api/v1/metrics',
            description: 'Application metrics',
            version: 'v1.0'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Landing Page',
            description: 'Simple marketing websites',
            price: '3,500',
            period: 'project',
            features: [
              'Responsive design',
              'SEO optimization',
              'Contact forms',
              '30-day support'
            ]
          },
          {
            name: 'Web Application',
            description: 'Full-featured web apps',
            price: '15,000',
            period: 'project',
            popular: true,
            features: [
              'Custom functionality',
              'User authentication',
              'Database integration',
              'API development',
              '90-day support'
            ]
          },
          {
            name: 'Enterprise Platform',
            description: 'Large-scale applications',
            price: '50,000',
            period: 'project',
            features: [
              'Scalable architecture',
              'Advanced security',
              'Multi-tenant support',
              'DevOps setup',
              '6-month support'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'TechStartup Inc',
          industry: { name: 'Technology', icon: 'Laptop' },
          challenge: 'Needed a scalable SaaS platform to support rapid user growth and complex business logic.',
          solution: 'Built modern React application with Node.js backend, implementing microservices architecture and automated deployment.',
          results: [
            { value: '300%', metric: 'User Growth' },
            { value: '50%', metric: 'Load Time Reduction' },
            { value: '99.9%', metric: 'Uptime Achievement' },
            { value: '40%', metric: 'Development Speed' }
          ],
          timeline: '20 weeks',
          teamSize: '8 specialists'
        }
      ],
      partners: [
        {
          name: 'Vercel',
          description: 'Modern deployment platform for frontend applications',
          icon: 'Globe',
          integrationLevel: 'Native',
          features: ['Edge functions', 'Auto-scaling', 'Global CDN'],
          setupTime: '< 1 hour'
        },
        {
          name: 'AWS',
          description: 'Comprehensive cloud infrastructure services',
          icon: 'Cloud',
          integrationLevel: 'Deep',
          features: ['EC2', 'RDS', 'Lambda', 'CloudFront'],
          setupTime: '1-2 days'
        }
      ],
      techStack: [
        { name: 'React', icon: 'Code', version: '18.2' },
        { name: 'Next.js', icon: 'Globe', version: '14.0' },
        { name: 'TypeScript', icon: 'Code', version: '5.0' },
        { name: 'Node.js', icon: 'Server', version: '20.0' },
        { name: 'PostgreSQL', icon: 'Database', version: '15.0' },
        { name: 'Docker', icon: 'Package', version: '24.0' }
      ],
      resources: {
        documentation: [
          {
            title: 'Development Guide',
            description: 'Complete guide to modern web development',
            icon: 'Code'
          },
          {
            title: 'Best Practices',
            description: 'Industry best practices and patterns',
            icon: 'Star'
          },
          {
            title: 'Deployment Guide',
            description: 'Deploy applications to production',
            icon: 'Upload'
          }
        ],
        tools: [
          {
            name: 'Project Estimator',
            description: 'Estimate project timeline and cost',
            type: 'Calculator',
            duration: '10 min'
          },
          {
            name: 'Tech Stack Advisor',
            description: 'Choose the right technologies',
            type: 'Advisor',
            duration: '15 min'
          }
        ],
        support: [
          {
            title: 'Architecture Review',
            description: 'Expert review of your application architecture',
            availability: 'Available',
            channel: 'Video Call'
          },
          {
            title: 'Code Review',
            description: 'Professional code review and optimization',
            availability: 'Available',
            channel: 'Consultation'
          }
        ],
        faq: [
          {
            question: 'What technologies do you use?',
            answer: 'We use modern technologies like React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Vercel.'
          },
          {
            question: 'Do you provide ongoing maintenance?',
            answer: 'Yes, we offer maintenance packages including updates, security patches, and feature enhancements.'
          }
        ]
      }
    },
    {
      id: 'web-development',
      name: 'Web Development',
      icon: 'Globe',
      shortDescription: 'Modern, responsive web applications built with cutting-edge technologies',
      description: `Build powerful, scalable web applications using the latest technologies and best practices. Our development team creates responsive, performant, and user-friendly applications that drive business growth and deliver exceptional user experiences.`,
      features: [
        'Responsive design',
        'Modern frameworks',
        'API integration',
        'Performance optimization',
        'SEO friendly',
        'Security best practices'
      ],
      complexity: 'High',
      timeline: '8-16 weeks',
      techSpecs: {
        architecture: [
          'Modern JavaScript frameworks',
          'Microservices architecture',
          'Cloud-native deployment',
          'Progressive Web App (PWA)',
          'API-first development'
        ],
        performance: [
          { label: 'Page Load Speed', value: '< 2 seconds', percentage: '95%' },
          { label: 'Lighthouse Score', value: '90+', percentage: '92%' },
          { label: 'Mobile Performance', value: '95+', percentage: '90%' },
          { label: 'Uptime', value: '99.9%', percentage: '100%' }
        ]
      },
      implementation: {
        steps: [
          {
            title: 'Discovery & Planning',
            description: 'Requirements gathering and technical architecture planning',
            duration: '2-3 weeks',
            team: '3-4 specialists'
          },
          {
            title: 'Design & Prototyping',
            description: 'UI/UX design and interactive prototypes',
            duration: '2-4 weeks',
            team: '2-3 designers'
          },
          {
            title: 'Development',
            description: 'Frontend and backend development',
            duration: '6-10 weeks',
            team: '4-6 developers'
          },
          {
            title: 'Testing & Deployment',
            description: 'Quality assurance and production deployment',
            duration: '1-2 weeks',
            team: '2-3 specialists'
          }
        ],
        codeExample: `// Modern React application with TypeScript
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

// Components
import Header from '../../components/ui/Header';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import { AuthProvider } from './contexts/AuthContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <div className={\`app \${theme}\`}>
            <Header theme={theme} setTheme={setTheme} />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              </Routes>
            </main>
            <Toaster position="top-right" />
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;`
      },
      integration: {
        platforms: [
          { name: 'React/Next.js', icon: 'Code' },
          { name: 'Node.js', icon: 'Server' },
          { name: 'AWS/GCP', icon: 'Cloud' },
          { name: 'MongoDB/PostgreSQL', icon: 'Database' }
        ],
        apis: [
          {
            method: 'GET',
            endpoint: '/api/v1/applications',
            description: 'List applications',
            version: 'v1.0'
          },
          {
            method: 'POST',
            endpoint: '/api/v1/deploy',
            description: 'Deploy application',
            version: 'v1.0'
          },
          {
            method: 'GET',
            endpoint: '/api/v1/metrics',
            description: 'Application metrics',
            version: 'v1.0'
          }
        ]
      },
      pricing: {
        tiers: [
          {
            name: 'Landing Page',
            description: 'Simple marketing websites',
            price: '3,500',
            period: 'project',
            features: [
              'Responsive design',
              'SEO optimization',
              'Contact forms',
              '30-day support'
            ]
          },
          {
            name: 'Web Application',
            description: 'Full-featured web apps',
            price: '15,000',
            period: 'project',
            popular: true,
            features: [
              'Custom functionality',
              'User authentication',
              'Database integration',
              'API development',
              '90-day support'
            ]
          },
          {
            name: 'Enterprise Platform',
            description: 'Large-scale applications',
            price: '50,000',
            period: 'project',
            features: [
              'Scalable architecture',
              'Advanced security',
              'Multi-tenant support',
              'DevOps setup',
              '6-month support'
            ]
          }
        ]
      },
      caseStudies: [
        {
          company: 'TechStartup Inc',
          industry: { name: 'Technology', icon: 'Laptop' },
          challenge: 'Needed a scalable SaaS platform to support rapid user growth and complex business logic.',
          solution: 'Built modern React application with Node.js backend, implementing microservices architecture and automated deployment.',
          results: [
            { value: '300%', metric: 'User Growth' },
            { value: '50%', metric: 'Load Time Reduction' },
            { value: '99.9%', metric: 'Uptime Achievement' },
            { value: '40%', metric: 'Development Speed' }
          ],
          timeline: '20 weeks',
          teamSize: '8 specialists'
        }
      ],
      partners: [
        {
          name: 'Vercel',
          description: 'Modern deployment platform for frontend applications',
          icon: 'Globe',
          integrationLevel: 'Native',
          features: ['Edge functions', 'Auto-scaling', 'Global CDN'],
          setupTime: '< 1 hour'
        },
        {
          name: 'AWS',
          description: 'Comprehensive cloud infrastructure services',
          icon: 'Cloud',
          integrationLevel: 'Deep',
          features: ['EC2', 'RDS', 'Lambda', 'CloudFront'],
          setupTime: '1-2 days'
        }
      ],
      techStack: [
        { name: 'React', icon: 'Code', version: '18.2' },
        { name: 'Next.js', icon: 'Globe', version: '14.0' },
        { name: 'TypeScript', icon: 'Code', version: '5.0' },
        { name: 'Node.js', icon: 'Server', version: '20.0' },
        { name: 'PostgreSQL', icon: 'Database', version: '15.0' },
        { name: 'Docker', icon: 'Package', version: '24.0' }
      ],
      resources: {
        documentation: [
          {
            title: 'Development Guide',
            description: 'Complete guide to modern web development',
            icon: 'Code'
          },
          {
            title: 'Best Practices',
            description: 'Industry best practices and patterns',
            icon: 'Star'
          },
          {
            title: 'Deployment Guide',
            description: 'Deploy applications to production',
            icon: 'Upload'
          }
        ],
        tools: [
          {
            name: 'Project Estimator',
            description: 'Estimate project timeline and cost',
            type: 'Calculator',
            duration: '10 min'
          },
          {
            name: 'Tech Stack Advisor',
            description: 'Choose the right technologies',
            type: 'Advisor',
            duration: '15 min'
          }
        ],
        support: [
          {
            title: 'Architecture Review',
            description: 'Expert review of your application architecture',
            availability: 'Available',
            channel: 'Video Call'
          },
          {
            title: 'Code Review',
            description: 'Professional code review and optimization',
            availability: 'Available',
            channel: 'Consultation'
          }
        ],
        faq: [
          {
            question: 'What technologies do you use?',
            answer: 'We use modern technologies like React, Next.js, Node.js, TypeScript, and cloud platforms like AWS and Vercel.'
          },
          {
            question: 'Do you provide ongoing maintenance?',
            answer: 'Yes, we offer maintenance packages including updates, security patches, and feature enhancements.'
          }
        ]
      }
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);

  // Handle URL-based service selection
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const serviceId = urlParams.get('service');
    
    if (serviceId) {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        setSelectedService(service);
      }
    }
  }, [location.search]);

//   const handleServiceSelect = (service) => {
//     setSelectedService(service);
//     // Update URL without page reload
//     const newUrl = `${location.pathname}?service=${service.id}`;
//     window.history.pushState({}, '', newUrl);
//   };

  const handleServiceSelect = (service) => {
    setSelectedService(service);

    // Navigate to demo page for supported services
    if (service.id === 'text-to-speech' || service.id === 'speech-to-text') {
      navigate(`/demo/${service.id}`);
    } else {
        setSelectedService(service);
      // For other services, you can show a message or redirect to a general info page
       const newUrl = `${location.pathname}?service=${service.id}`;
       window.history.pushState({}, '', newUrl);
      // You could show a modal or redirect to a different page
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">

        <ServiceSelector
          services={services}
          selectedService={selectedService}
          onServiceSelect={handleServiceSelect}
        />
{/*         <ServiceHero  */}
{/*           selectedService={selectedService} */}
{/*           onServiceSelect={handleServiceSelect} */}
{/*         /> */}

        <TechnicalSpecs selectedService={selectedService} />
        
{/*         <CaseStudies selectedService={selectedService} /> */}
        
{/*         <IntegrationPartners selectedService={selectedService} /> */}
        
{/*         <ResourceCenter selectedService={selectedService} /> */}
      </main>
    </div>
  );
};

export default AIServicesEcosystem;