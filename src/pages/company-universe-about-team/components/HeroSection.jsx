import React from 'react';
import Icon from '../../../components/AppIcon';


const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/3 to-accent/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Meet Our Team</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Company Universe</span>
            <br />
            <span className="text-foreground">About & Team</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We're the AI translators who make sophisticated technology accessible for business transformation. 
            Meet the minds behind Givi's human-centered approach to artificial intelligence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">AI Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">15+</div>
            <div className="text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">3</div>
            <div className="text-muted-foreground">Years of Innovation</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-gradient mb-2">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;