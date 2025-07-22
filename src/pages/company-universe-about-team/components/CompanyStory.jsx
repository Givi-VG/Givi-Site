import React from 'react';
import Icon from '../../../components/AppIcon';


const CompanyStory = () => {
  const storyPoints = [
    {
      icon: "Lightbulb",
      title: "The Vision",
      description: "Founded in 2021 with a simple yet powerful vision: to bridge the gap between complex AI technology and practical business solutions that drive real growth."
    },
    {
      icon: "Users",
      title: "Human-Centered Approach",
      description: "We believe AI should enhance human capabilities, not replace them. Our philosophy centers on creating technology that empowers teams and transforms workflows."
    },
    {
      icon: "Zap",
      title: "Innovation Focus",
      description: "From day one, we've been committed to staying at the forefront of AI innovation while maintaining our core principle of accessibility and practical application."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
                <Icon name="BookOpen" size={16} className="text-accent" />
                <span className="text-sm font-medium text-accent">Our Story</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                The AI <span className="text-gradient">Translators</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Givi was born from a simple observation: while AI technology was advancing rapidly, 
                most businesses struggled to understand how to implement it effectively. We saw an 
                opportunity to become the bridge between cutting-edge AI capabilities and practical 
                business transformation.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're proud to be the trusted AI transformation partner for forward-thinking 
                companies ready to embrace tomorrow's solutions. Our mission remains unchanged: 
                making sophisticated technology accessible and actionable.
              </p>
            </div>

            {/* Story Points */}
            <div className="space-y-6">
              {storyPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                    <Icon name={point.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
              <div className="absolute top-4 right-4">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <Icon name="Bot" size={20} color="white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">Givi AI</div>
                    <div className="text-sm text-muted-foreground">AI Solutions Platform</div>
                  </div>
                </div>
                
                <div className="bg-background/50 rounded-lg p-4 border border-border">
                  <div className="text-sm text-muted-foreground mb-2">Mission Statement</div>
                  <div className="text-foreground font-medium">
                    "Empowering businesses to harness AI's potential without the intimidation factor"
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/50 rounded-lg p-3 border border-border text-center">
                    <div className="text-2xl font-bold text-primary">2021</div>
                    <div className="text-xs text-muted-foreground">Founded</div>
                  </div>
                  <div className="bg-background/50 rounded-lg p-3 border border-border text-center">
                    <div className="text-2xl font-bold text-accent">50+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;