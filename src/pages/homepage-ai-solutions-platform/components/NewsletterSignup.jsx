import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const aiTrendInsights = [
    {
      icon: 'TrendingUp',
      title: 'Market Analysis',
      description: 'Weekly AI market trends and business impact reports'
    },
    {
      icon: 'Lightbulb',
      title: 'Innovation Updates',
      description: 'Latest AI breakthroughs and implementation strategies'
    },
    {
      icon: 'BookOpen',
      title: 'Expert Insights',
      description: 'Deep-dive articles from our AI specialists and industry leaders'
    },
    {
      icon: 'Zap',
      title: 'Quick Tips',
      description: 'Actionable AI tips to improve your business operations'
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="surface-elevated p-12 rounded-2xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Icon name="CheckCircle" size={40} color="white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Welcome to the AI Revolution!
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              You're now subscribed to our AI insights newsletter. Get ready for cutting-edge trends, expert analysis, and actionable strategies delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                iconName="ExternalLink"
                iconPosition="right"
                className="btn-primary"
              >
                Explore AI Services
              </Button>
              <Button
                variant="outline"
                iconName="Calendar"
                iconPosition="left"
              >
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Ahead with <span className="text-gradient">AI Insights</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Join 10,000+ forward-thinking professionals who receive our weekly AI trend analysis, implementation strategies, and exclusive insights from industry experts.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {aiTrendInsights.map((insight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={insight.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{insight.title}</h4>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-accent" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Weekly delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Users" size={16} className="text-accent" />
                <span>10,000+ subscribers</span>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="surface-elevated p-8 rounded-2xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} color="white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Get AI Insights Weekly
                </h3>
                <p className="text-muted-foreground">
                  Join the AI revolution with expert insights delivered to your inbox
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="email"
                  label="Email Address"
                  placeholder="Enter your professional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={error}
                  required
                  className="mb-4"
                />

                <Button
                  type="submit"
                  variant="default"
                  size="lg"
                  fullWidth
                  loading={isLoading}
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="btn-primary"
                  disabled={!email || isLoading}
                >
                  {isLoading ? 'Subscribing...' : 'Subscribe to AI Insights'}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By subscribing, you agree to receive our weekly AI insights newsletter. 
                  You can unsubscribe at any time. We respect your privacy and never share your data.
                </p>
              </form>

              {/* Social Proof */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-accent fill-current" />
                    <span>4.9/5 rating</span>
                  </div>
                  <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                  <div className="flex items-center gap-1">
                    <Icon name="Users" size={16} className="text-primary" />
                    <span>10K+ subscribers</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;