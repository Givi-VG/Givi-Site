import React from 'react';
import Icon from '../../../components/AppIcon';


const IntegrationPartners = ({ selectedService }) => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Integration <span className="text-gradient">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Seamlessly integrate with leading platforms and technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedService.partners.map((partner, index) => (
            <div key={index} className="surface-elevated p-6 rounded-2xl hover-lift text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center mx-auto">
                  <Icon name={partner.icon} size={32} color="var(--color-primary)" />
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{partner.description}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Zap" size={14} color="var(--color-accent)" />
                    <span className="text-sm text-accent font-medium">{partner.integrationLevel}</span>
                  </div>
                  
                  <div className="flex flex-wrap justify-center gap-2">
                    {partner.features.map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t border-border">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>Setup: {partner.setupTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Shield" size={12} />
                    <span>Enterprise Ready</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Technology Stack
            </h3>
            <p className="text-muted-foreground">
              Built on industry-leading technologies for maximum reliability and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {selectedService.techStack.map((tech, index) => (
              <div key={index} className="surface-elevated p-4 rounded-xl text-center hover-lift">
                <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name={tech.icon} size={24} color="var(--color-primary)" />
                </div>
                <div className="text-sm font-medium text-foreground">{tech.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{tech.version}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Compliance */}
        <div className="mt-16 surface-elevated p-8 rounded-2xl">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Security & Compliance
            </h3>
            <p className="text-muted-foreground">
              Enterprise-grade security with industry-standard compliance certifications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Shield" size={32} color="var(--color-primary)" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Data Protection</h4>
              <p className="text-sm text-muted-foreground">
                End-to-end encryption with SOC 2 Type II compliance and GDPR adherence
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Lock" size={32} color="var(--color-primary)" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Access Control</h4>
              <p className="text-sm text-muted-foreground">
                Multi-factor authentication with role-based permissions and audit trails
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Server" size={32} color="var(--color-primary)" />
              </div>
              <h4 className="text-lg font-semibold text-foreground">Infrastructure</h4>
              <p className="text-sm text-muted-foreground">
                99.9% uptime SLA with redundant systems and automated failover protection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationPartners;