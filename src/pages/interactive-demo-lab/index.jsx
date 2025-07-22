import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import DemoCard from './components/DemoCard';
import DemoInterface from './components/DemoInterface';
import ProgressTracker from './components/ProgressTracker';
import TechnicalDocs from './components/TechnicalDocs';
import PerformanceBenchmarks from './components/PerformanceBenchmarks';
import ConversionPanel from './components/ConversionPanel';

const InteractiveDemoLab = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [activeDemo, setActiveDemo] = useState(null);
  const [completedDemos, setCompletedDemos] = useState(0);
  const [demoResults, setDemoResults] = useState([]);
  const [activeTab, setActiveTab] = useState('demos');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');

  const demoCategories = [
    { id: 'all', name: 'All Demos', icon: 'Grid3x3' },
    { id: 'voice', name: 'Voice AI', icon: 'Mic' },
    { id: 'text', name: 'Text Processing', icon: 'FileText' },
    { id: 'data', name: 'Data & Analytics', icon: 'BarChart3' },
    { id: 'conversation', name: 'Conversational AI', icon: 'MessageCircle' }
  ];

  const availableDemos = [
    {
      id: 'text-to-speech',
      title: 'Text-to-Speech Synthesis',
      category: 'Voice AI',
      categoryId: 'voice',
      description: 'Convert written text into natural-sounding speech with customizable voice options, speed control, and multiple language support.',
      icon: 'Volume2',
      difficulty: 'Beginner',
      duration: '5-10 min',
      completions: '2.3k',
      rating: 4.8,
      tags: ['Voice Synthesis', 'Natural Language', 'Audio Processing'],
      devTime: '2-3 weeks'
    },
    {
      id: 'speech-to-text',
      title: 'Speech Recognition',
      category: 'Voice AI',
      categoryId: 'voice',
      description: 'Accurately transcribe spoken words into text with real-time processing, speaker identification, and punctuation optimization.',
      icon: 'Mic',
      difficulty: 'Intermediate',
      duration: '8-12 min',
      completions: '1.8k',
      rating: 4.9,
      tags: ['Speech Recognition', 'Transcription', 'Real-time Processing'],
      devTime: '3-4 weeks'
    },
    {
      id: 'chatbot',
      title: 'AI Chatbot Builder',
      category: 'Conversational AI',
      categoryId: 'conversation',
      description: 'Create intelligent conversational agents with context awareness, intent recognition, and seamless integration capabilities.',
      icon: 'MessageCircle',
      difficulty: 'Advanced',
      duration: '15-20 min',
      completions: '1.5k',
      rating: 4.7,
      tags: ['Chatbot', 'NLP', 'Conversation Flow'],
      devTime: '4-6 weeks'
    },
    {
      id: 'data-viz',
      title: 'Smart Data Visualization',
      category: 'Data & Analytics',
      categoryId: 'data',
      description: 'Transform raw data into interactive visualizations with AI-powered insights, automated chart selection, and custom styling.',
      icon: 'BarChart3',
      difficulty: 'Intermediate',
      duration: '10-15 min',
      completions: '2.1k',
      rating: 4.6,
      tags: ['Data Visualization', 'Analytics', 'Business Intelligence'],
      devTime: '2-4 weeks'
    },
    {
      id: 'sentiment-analysis',
      title: 'Sentiment Analysis Engine',
      category: 'Text Processing',
      categoryId: 'text',
      description: 'Analyze emotional tone and sentiment in text content with advanced NLP models and detailed confidence scoring.',
      icon: 'Heart',
      difficulty: 'Beginner',
      duration: '5-8 min',
      completions: '1.9k',
      rating: 4.5,
      tags: ['Sentiment Analysis', 'NLP', 'Text Mining'],
      devTime: '1-2 weeks'
    },
    {
      id: 'document-ai',
      title: 'Document Intelligence',
      category: 'Text Processing',
      categoryId: 'text',
      description: 'Extract structured information from documents with OCR, entity recognition, and automated data classification.',
      icon: 'FileSearch',
      difficulty: 'Advanced',
      duration: '12-18 min',
      completions: '1.2k',
      rating: 4.8,
      tags: ['OCR', 'Document Processing', 'Entity Recognition'],
      devTime: '5-8 weeks'
    },
    {
      id: 'predictive-analytics',
      title: 'Predictive Analytics',
      category: 'Data & Analytics',
      categoryId: 'data',
      description: 'Build predictive models with automated feature engineering, model selection, and performance optimization.',
      icon: 'TrendingUp',
      difficulty: 'Advanced',
      duration: '20-25 min',
      completions: '890',
      rating: 4.9,
      tags: ['Machine Learning', 'Predictive Modeling', 'Analytics'],
      devTime: '6-10 weeks'
    },
    {
      id: 'voice-assistant',
      title: 'Voice Assistant Framework',
      category: 'Voice AI',
      categoryId: 'voice',
      description: 'Create custom voice assistants with wake word detection, command processing, and multi-turn conversations.',
      icon: 'Headphones',
      difficulty: 'Advanced',
      duration: '18-25 min',
      completions: '756',
      rating: 4.7,
      tags: ['Voice Assistant', 'Wake Word', 'Command Processing'],
      devTime: '8-12 weeks'
    }
  ];

  const userProgress = {
    totalTime: '2h 34m',
    avgScore: 94,
    recentActivity: [
      { action: 'Completed Text-to-Speech Demo', timestamp: '2 hours ago' },
      { action: 'Started Speech Recognition Demo', timestamp: '3 hours ago' },
      { action: 'Downloaded API Documentation', timestamp: '1 day ago' },
      { action: 'Joined Interactive Demo Lab', timestamp: '2 days ago' }
    ]
  };

  const tabs = [
    { id: 'demos', name: 'Demo Lab', icon: 'Play' },
    { id: 'progress', name: 'Progress', icon: 'TrendingUp' },
    { id: 'docs', name: 'Documentation', icon: 'FileText' },
    { id: 'benchmarks', name: 'Benchmarks', icon: 'BarChart3' },
    { id: 'next-steps', name: 'Next Steps', icon: 'ArrowRight' }
  ];

  useEffect(() => {
    // Load user progress from localStorage
    const savedProgress = localStorage.getItem('demoLabProgress');
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setCompletedDemos(progress.completed || 0);
      setDemoResults(progress.results || []);
    }
  }, []);

  const filteredDemos = availableDemos.filter(demo => {
    const matchesSearch = demo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         demo.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         demo.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = filterCategory === 'all' || demo.categoryId === filterCategory;

    return matchesSearch && matchesCategory;
  });

  const handleStartDemo = (demo) => {
    setActiveDemo(demo);
    setSelectedDemo(demo);
  };

  const handleCloseDemo = () => {
    setActiveDemo(null);
  };

  const handleCompleteDemo = (demo, result) => {
    const newResult = {
      id: demo.id,
      title: demo.title,
      icon: demo.icon,
      score: Math.floor(Math.random() * 20) + 80, // Mock score between 80-100
      completedAt: new Date().toLocaleDateString(),
      result: result
    };

    const updatedResults = [...demoResults, newResult];
    const newCompletedCount = completedDemos + 1;

    setDemoResults(updatedResults);
    setCompletedDemos(newCompletedCount);

    // Save to localStorage
    localStorage.setItem('demoLabProgress', JSON.stringify({
      completed: newCompletedCount,
      results: updatedResults
    }));

    setActiveDemo(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'demos':
        return (
          <div className="space-y-6">
            {/* Search and Filter */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search demos, features, or technologies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex items-center space-x-2 overflow-x-auto">
                {demoCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setFilterCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                      filterCategory === category.id
                        ? 'bg-primary text-white' :'bg-muted/20 text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                    }`}
                  >
                    <Icon name={category.icon} size={16} />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Demo Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDemos.map((demo) => (
                <DemoCard
                  key={demo.id}
                  demo={demo}
                  onStartDemo={handleStartDemo}
                  isActive={selectedDemo?.id === demo.id}
                />
              ))}
            </div>

            {filteredDemos.length === 0 && (
              <div className="text-center py-12">
                <Icon name="Search" size={48} className="mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-lg font-medium text-foreground mb-2">No demos found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or category filter
                </p>
              </div>
            )}
          </div>
        );

      case 'progress':
        return (
          <ProgressTracker
            completedDemos={completedDemos}
            totalDemos={availableDemos.length}
            userProgress={userProgress}
          />
        );

      case 'docs':
        return <TechnicalDocs selectedDemo={selectedDemo} />;

      case 'benchmarks':
        return <PerformanceBenchmarks selectedDemo={selectedDemo} />;

      case 'next-steps':
        return (
          <ConversionPanel
            completedDemos={completedDemos}
            demoResults={demoResults}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Interactive Demo Lab - Experience Givi AI Solutions</title>
        <meta name="description" content="Hands-on playground to experience Givi's AI capabilities. Test voice synthesis, speech recognition, chatbots, and data visualization with real-time processing." />
        <meta name="keywords" content="AI demo, interactive playground, voice AI, speech recognition, chatbot testing, data visualization, machine learning demo" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-16">
          {/* Hero Section */}
          <section className="py-16 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center animate-float">
                    <Icon name="Zap" size={32} color="white" strokeWidth={2.5} />
                  </div>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Interactive <span className="text-gradient">Demo Lab</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                  Experience Givi's AI capabilities firsthand through our hands-on playground.
                  Test, explore, and understand how our solutions can transform your business.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Play"
                    iconPosition="left"
                    className="btn-primary"
                    onClick={() => setActiveTab('demos')}
                  >
                    Start Exploring
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    iconName="BookOpen"
                    iconPosition="left"
                    onClick={() => setActiveTab('docs')}
                  >
                    View Documentation
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">{availableDemos.length}</div>
                  <div className="text-sm text-muted-foreground">AI Demos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">15k+</div>
                  <div className="text-sm text-muted-foreground">Tests Run</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">98.5%</div>
                  <div className="text-sm text-muted-foreground">Avg Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Available</div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="py-12 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* Tab Navigation */}
              <div className="border-b border-border mb-8">
                <nav className="flex space-x-0 overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
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

              {/* Tab Content */}
              <div className="min-h-[600px]">
                {renderTabContent()}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Schedule a consultation with our AI experts to discuss your specific needs and get a custom implementation plan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  className="btn-primary"
                >
                  Schedule Consultation
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Download"
                  iconPosition="left"
                >
                  Download Resources
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Demo Interface Modal */}
        {activeDemo && (
          <DemoInterface
            demo={activeDemo}
            onClose={handleCloseDemo}
            onComplete={handleCompleteDemo}
          />
        )}

        {/* Footer */}
        <footer className="py-12 px-6 lg:px-8 border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="Bot" size={20} color="white" />
                  </div>
                  <div>
                    <span className="text-xl font-bold text-gradient">Givi AI</span>
                    <div className="text-xs text-muted-foreground">Demo Lab</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Experience the future of AI through hands-on demonstrations and interactive testing environments.
                </p>
                <div className="flex items-center space-x-4">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span className="text-sm text-muted-foreground">Enterprise-grade security</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
                <div className="space-y-2">
                  <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    API Documentation
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Integration Guides
                  </a>
                  <a href="#" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Support Center
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Support</h4>
                <div className="space-y-2">
                  <div className="text-sm text-muted-foreground">demo@givi.ai</div>
                  <div className="text-sm text-muted-foreground">++91 9751671018</div>
                  <div className="text-sm text-muted-foreground">24/7 Live Chat</div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Givi AI. All rights reserved. | Privacy Policy | Terms of Service
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default InteractiveDemoLab;