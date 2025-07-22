import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 text-center">
        <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} color="white" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Welcome to Givi AI Insights!</h3>
        <p className="text-muted-foreground mb-4">
          You're now subscribed to our weekly AI insights and will receive early access to new resources.
        </p>
        <Button
          variant="outline"
          onClick={() => setIsSubscribed(false)}
          iconName="RefreshCw"
          iconPosition="left"
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-border rounded-xl p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <Icon name="Mail" size={32} color="white" />
        </div>
        
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Stay Ahead with AI Insights
        </h3>
        <p className="text-muted-foreground mb-6">
          Get weekly AI trends, implementation guides, and early access to new resources. 
          Join 5,000+ professionals staying current with AI developments.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="flex-1">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
          </div>
          <Button
            type="submit"
            variant="default"
            loading={isLoading}
            iconName="ArrowRight"
            iconPosition="right"
            className="btn-primary whitespace-nowrap"
          >
            Subscribe Now
          </Button>
        </form>

        <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Icon name="Shield" size={16} />
            No spam, ever
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Clock" size={16} />
            Weekly updates
          </span>
          <span className="flex items-center gap-2">
            <Icon name="Zap" size={16} />
            Early access
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;