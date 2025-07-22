import React from 'react';
import Icon from '../../../components/AppIcon';

const ContactHero = () => {
  return (
    <section className="relative bg-background pt-24 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="MessageCircle" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Contact & Consultation Hub</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Let's Build Your{' '}
            <span className="text-gradient">AI Future</span>{' '}
            Together
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI? Our expert team is here to guide you through every step of your AI journey. From initial consultation to full implementation, we're your trusted AI transformation partner.
          </p>

          {/* Quick Stats */}
          <div className="flex justify-center items-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center flex flex-col items-center">
                {/* Stats content can be added here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;