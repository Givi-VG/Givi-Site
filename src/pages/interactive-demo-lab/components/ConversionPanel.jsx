import React, { useState } from 'react';

import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConversionPanel = ({ completedDemos, demoResults }) => {
  const [consultationForm, setConsultationForm] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  });
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const conversionOptions = [
    {
      id: 'consultation',
      title: 'Schedule Consultation',
      description: 'Discuss your AI implementation with our experts',
      icon: 'Calendar',
      action: 'Book Now',
      highlight: true
    },
    {
      id: 'documentation',
      title: 'Download Documentation',
      description: 'Get technical guides and implementation resources',
      icon: 'Download',
      action: 'Download',
      highlight: false
    },
    {
      id: 'beta',
      title: 'Join Beta Program',
      description: 'Get early access to experimental AI features',
      icon: 'Zap',
      action: 'Join Beta',
      highlight: false
    },
    {
      id: 'proposal',
      title: 'Request Proposal',
      description: 'Get a custom quote for your AI project',
      icon: 'FileText',
      action: 'Request',
      highlight: false
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setConsultationForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowForm(false);
    
    // Show success message or redirect
    alert('Consultation request submitted successfully! We\'ll contact you within 24 hours.');
  };

  const getRecommendation = () => {
    if (completedDemos >= 5) {
      return {
        title: 'Ready for Implementation',
        message: 'You\'ve explored multiple demos! Let\'s discuss how to implement these solutions in your business.',
        cta: 'Schedule Strategy Call'
      };
    } else if (completedDemos >= 3) {
      return {
        title: 'Great Progress',
        message: 'You\'re getting familiar with our AI capabilities. Ready to see how they fit your needs?',
        cta: 'Book Consultation'
      };
    } else if (completedDemos >= 1) {
      return {
        title: 'Nice Start',
        message: 'You\'ve tried your first demo! Explore more to discover the full potential.',
        cta: 'Continue Exploring'
      };
    } else {
      return {
        title: 'Welcome to the Lab',
        message: 'Start with any demo to experience our AI capabilities firsthand.',
        cta: 'Try First Demo'
      };
    }
  };

  const recommendation = getRecommendation();

  return (
    <div className="space-y-6">
      {/* Progress-based Recommendation */}
      <div className="surface-elevated p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Icon name="Lightbulb" size={24} color="white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">{recommendation.title}</h3>
            <p className="text-muted-foreground mb-4">{recommendation.message}</p>
            <Button
              variant="default"
              iconName="ArrowRight"
              iconPosition="right"
              className="btn-primary"
              onClick={() => completedDemos >= 3 ? setShowForm(true) : null}
            >
              {recommendation.cta}
            </Button>
          </div>
        </div>
      </div>

      {/* Conversion Options */}
      <div className="surface-elevated p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Next Steps</h3>
        <div className="space-y-3">
          {conversionOptions.map((option) => (
            <div
              key={option.id}
              className={`flex items-center justify-between p-4 rounded-lg border transition-smooth hover-lift ${
                option.highlight
                  ? 'bg-primary/10 border-primary/20' :'bg-muted/10 border-muted/20 hover:bg-muted/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Icon 
                  name={option.icon} 
                  size={20} 
                  className={option.highlight ? 'text-primary' : 'text-muted-foreground'} 
                />
                <div>
                  <h4 className="font-medium text-foreground">{option.title}</h4>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                </div>
              </div>
              <Button
                variant={option.highlight ? 'default' : 'outline'}
                size="sm"
                onClick={() => option.id === 'consultation' ? setShowForm(true) : null}
                className={option.highlight ? 'btn-primary' : ''}
              >
                {option.action}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Demo Results Summary */}
      {completedDemos > 0 && (
        <div className="surface-elevated p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Your Demo Results</h3>
          <div className="space-y-3">
            {demoResults.slice(0, 3).map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/10 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Icon name={result.icon} size={16} className="text-accent" />
                  <div>
                    <span className="text-sm font-medium text-foreground">{result.title}</span>
                    <div className="text-xs text-muted-foreground">
                      Completed {result.completedAt}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-accent">{result.score}%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>
            ))}
            {demoResults.length > 3 && (
              <div className="text-center pt-2">
                <Button variant="ghost" size="sm" iconName="ChevronDown">
                  View All Results
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Information */}
      <div className="surface-elevated p-6">
        <h3 className="text-lg font-semibold text-foreground mb-4">Need Help?</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Icon name="MessageCircle" size={16} className="text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground">Live Chat Support</span>
              <div className="text-xs text-muted-foreground">Available 24/7</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Mail" size={16} className="text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground">demo@givi.ai</span>
              <div className="text-xs text-muted-foreground">Technical support</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={16} className="text-primary" />
            <div>
              <span className="text-sm font-medium text-foreground">++91 9751671018</span>
              <div className="text-xs text-muted-foreground">Sales inquiries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Consultation Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-lg w-full max-w-md">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground">Schedule Consultation</h3>
              <Button variant="ghost" iconName="X" onClick={() => setShowForm(false)} />
            </div>
            
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <Input
                label="Full Name"
                type="text"
                name="name"
                required
                value={consultationForm.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
              />
              
              <Input
                label="Email Address"
                type="email"
                name="email"
                required
                value={consultationForm.email}
                onChange={handleInputChange}
                placeholder="your.email@company.com"
              />
              
              <Input
                label="Company"
                type="text"
                name="company"
                value={consultationForm.company}
                onChange={handleInputChange}
                placeholder="Your company name"
              />
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Primary Interest
                </label>
                <select
                  name="interest"
                  value={consultationForm.interest}
                  onChange={handleInputChange}
                  className="w-full p-2 bg-input border border-border rounded-lg text-foreground"
                  required
                >
                  <option value="">Select your interest</option>
                  <option value="text-to-speech">Text-to-Speech Solutions</option>
                  <option value="speech-to-text">Speech-to-Text Services</option>
                  <option value="chatbot">AI Chatbot Development</option>
                  <option value="data-viz">Data Visualization</option>
                  <option value="custom">Custom AI Solution</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={consultationForm.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 bg-input border border-border rounded-lg text-foreground resize-none"
                  placeholder="Tell us about your project requirements..."
                />
              </div>
              
              <div className="flex items-center space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForm(false)}
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  loading={isSubmitting}
                  iconName="Calendar"
                  iconPosition="left"
                  className="btn-primary flex-1"
                >
                  {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversionPanel;