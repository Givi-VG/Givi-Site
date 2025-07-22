import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ResourceCenter = ({ selectedService }) => {
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Resource <span className="text-gradient">Center</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to get started with {selectedService.name}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Documentation */}
          <div className="surface-elevated p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Icon name="BookOpen" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Documentation</h3>
              </div>

              <div className="space-y-4">
                {selectedService.resources.documentation.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-smooth cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <Icon name={doc.icon} size={18} color="var(--color-muted-foreground)" />
                      <div>
                        <div className="font-medium text-foreground">{doc.title}</div>
                        <div className="text-sm text-muted-foreground">{doc.description}</div>
                      </div>
                    </div>
                    <Icon name="ExternalLink" size={16} color="var(--color-muted-foreground)" />
                  </div>
                ))}
              </div>

              <Button 
                variant="outline" 
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                className="hover-glow"
              >
                View All Documentation
              </Button>
            </div>
          </div>

          {/* Tools & Calculators */}
          <div className="surface-elevated p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Icon name="Calculator" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Tools & Calculators</h3>
              </div>

              <div className="space-y-4">
                {selectedService.resources.tools.map((tool, index) => (
                  <div key={index} className="p-4 bg-muted/10 rounded-lg hover:bg-muted/20 transition-smooth cursor-pointer">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-foreground">{tool.name}</div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Zap" size={14} color="var(--color-accent)" />
                        <span className="text-xs text-accent">{tool.type}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
                        <span className="text-xs text-muted-foreground">{tool.duration}</span>
                      </div>
                      <Button variant="ghost" size="xs" iconName="Play" iconPosition="left">
                        Try Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Support & Training */}
          <div className="surface-elevated p-8 rounded-2xl">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                  <Icon name="Users" size={24} color="var(--color-primary)" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Support & Training</h3>
              </div>

              <div className="space-y-4">
                {selectedService.resources.support.map((support, index) => (
                  <div key={index} className="p-4 bg-muted/10 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium text-foreground">{support.title}</div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        support.availability === 'Available' ?'bg-accent/20 text-accent' :'bg-warning/20 text-warning'
                      }`}>
                        {support.availability}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{support.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Icon name="MessageCircle" size={14} color="var(--color-muted-foreground)" />
                        <span className="text-xs text-muted-foreground">{support.channel}</span>
                      </div>
                      <Button variant="ghost" size="xs" iconName="ArrowRight" iconPosition="right">
                        Access
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <Icon name="Star" size={18} color="var(--color-accent)" />
                  <span className="font-medium text-foreground">Premium Support</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Get priority support with dedicated account management and 24/7 technical assistance
                </p>
                <Button 
                  variant="default" 
                  size="sm"
                  iconName="Crown"
                  iconPosition="left"
                  className="btn-primary"
                >
                  Upgrade Support
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">
              Common questions about {selectedService.name} implementation and usage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {selectedService.resources.faq.map((faq, index) => (
              <div key={index} className="surface-elevated p-6 rounded-xl">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-white">Q</span>
                    </div>
                    <h4 className="font-semibold text-foreground">{faq.question}</h4>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-muted/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-xs font-bold text-muted-foreground">A</span>
                    </div>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCenter;