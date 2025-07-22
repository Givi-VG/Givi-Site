import React from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const CaseStudies = ({ selectedService }) => {
  return (
    <section className="py-16 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world implementations of {selectedService.name} delivering measurable results
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {selectedService.caseStudies.map((study, index) => (
            <div key={index} className="surface-elevated p-8 rounded-2xl hover-lift">
              <div className="space-y-6">
                {/* Company Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
                    <Icon name={study.industry.icon} size={24} color="var(--color-primary)" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{study.company}</h3>
                    <p className="text-muted-foreground">{study.industry.name}</p>
                  </div>
                </div>

                {/* Challenge */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon name="AlertCircle" size={18} color="var(--color-warning)" />
                    <span>Challenge</span>
                  </h4>
                  <p className="text-muted-foreground">{study.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon name="Lightbulb" size={18} color="var(--color-accent)" />
                    <span>Solution</span>
                  </h4>
                  <p className="text-muted-foreground">{study.solution}</p>
                </div>

                {/* Results */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground flex items-center space-x-2">
                    <Icon name="TrendingUp" size={18} color="var(--color-success)" />
                    <span>Results</span>
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-muted/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-accent mb-1">{result.value}</div>
                        <div className="text-sm text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Timeline */}
                <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} />
                    <span>Implementation: {study.timeline}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={14} />
                    <span>Team Size: {study.teamSize}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="surface-elevated p-8 rounded-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how {selectedService.name} can transform your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="btn-primary"
              >
                Start Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="hover-glow"
              >
                Download Case Study
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;