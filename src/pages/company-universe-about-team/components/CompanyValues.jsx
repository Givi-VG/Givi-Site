import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyValues = () => {
  const values = [
    {
      icon: "Heart",
      title: "Human-Centered Design",
      description: "We believe AI should enhance human capabilities, not replace them. Every solution we create is designed to empower teams and improve workflows.",
      principles: [
        "User experience comes first",
        "Technology serves people, not the other way around",
        "Inclusive design for all skill levels"
      ]
    },
    {
      icon: "Shield",
      title: "Trust & Transparency",
      description: "We build lasting relationships through honest communication, reliable delivery, and transparent processes that keep our clients informed every step of the way.",
      principles: [
        "Clear communication at every stage",
        "Honest assessment of project scope",
        "Transparent pricing and timelines"
      ]
    },
    {
      icon: "Zap",
      title: "Innovation Excellence",
      description: "We stay at the forefront of AI technology while maintaining our commitment to practical, business-focused solutions that deliver real value.",
      principles: [
        "Continuous learning and adaptation",
        "Cutting-edge technology with proven results",
        "Innovation balanced with reliability"
      ]
    },
    {
      icon: "Users",
      title: "Collaborative Partnership",
      description: "We don't just deliver solutions; we become an extension of your team, working closely with you to ensure successful AI transformation.",
      principles: [
        "Deep understanding of client needs",
        "Collaborative approach to problem-solving",
        "Long-term partnership mindset"
      ]
    }
  ];

  const culturalElements = [
    {
      icon: "Coffee",
      title: "Learning Culture",
      description: "Weekly AI research sessions and continuous skill development"
    },
    {
      icon: "Globe",
      title: "Remote-First",
      description: "Flexible work environment with global talent collaboration"
    },
    {
      icon: "Award",
      title: "Excellence Recognition",
      description: "Celebrating achievements and innovative problem-solving"
    },
    {
      icon: "Handshake",
      title: "Client Success",
      description: "Measuring our success by our clients\' transformation results"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Compass" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Values</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            What <span className="text-gradient">Drives Us</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our core values shape every decision we make and every solution we create. 
            They're not just words on a wall—they're the foundation of how we work.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="surface-elevated p-8 hover-glow transition-smooth">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <Icon name={value.icon} size={24} color="white" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{value.description}</p>
                  
                  <div className="space-y-3">
                    {value.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Culture */}
        <div className="bg-card/50 border border-border rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Our <span className="text-gradient">Culture</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've built a culture that fosters innovation, collaboration, and continuous growth. Here's what makes working at Givi special.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalElements.map((element, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                  <Icon name={element.icon} size={24} className="text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{element.title}</h4>
                <p className="text-sm text-muted-foreground">{element.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Icon name="Target" size={24} color="white" />
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
              
              <blockquote className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-8">
                "To empower businesses to harness AI's transformative potential without the intimidation factor, 
                making sophisticated technology accessible and actionable for companies ready to embrace tomorrow's solutions today."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Users" size={16} />
                  <span>Human-Centered</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} />
                  <span>Innovation-Driven</span>
                </div>
                <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} />
                  <span>Trust-Focused</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;