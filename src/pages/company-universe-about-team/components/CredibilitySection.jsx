import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredibilitySection = () => {
  const certifications = [
    {
      name: "Google Cloud Partner",
      logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop",
      description: "Certified Google Cloud AI/ML solutions partner",
      level: "Premier"
    },
    {
      name: "AWS Advanced Partner",
      logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop",
      description: "Advanced tier AWS consulting partner",
      level: "Advanced"
    },
    {
      name: "ISO 27001 Certified",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      description: "Information security management certified",
      level: "Certified"
    },
    {
      name: "SOC 2 Type II",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
      description: "Security and availability compliance",
      level: "Compliant"
    }
  ];

  const achievements = [
    {
      icon: "Award",
      title: "AI Innovation Award 2024",
      organization: "Tech Excellence Awards",
      description: "Recognized for outstanding innovation in AI business solutions"
    },
    {
      icon: "Star",
      title: "Top AI Consulting Firm",
      organization: "Industry Rankings 2024",
      description: "Ranked among top 10 AI consulting firms for SMB solutions"
    },
    {
      icon: "Trophy",
      title: "Client Satisfaction Excellence",
      organization: "Customer Success Awards",
      description: "98% client satisfaction rate across all projects"
    },
    {
      icon: "Zap",
      title: "Technology Innovation Leader",
      organization: "AI Industry Report",
      description: "Featured as a leading innovator in accessible AI solutions"
    }
  ];

  const securityFeatures = [
    {
      icon: "Shield",
      title: "Enterprise Security",
      description: "Bank-grade encryption and security protocols"
    },
    {
      icon: "Lock",
      title: "Data Protection",
      description: "GDPR and CCPA compliant data handling"
    },
    {
      icon: "Eye",
      title: "Privacy First",
      description: "Zero data retention policy for client information"
    },
    {
      icon: "CheckCircle",
      title: "Compliance Ready",
      description: "SOC 2, ISO 27001, and industry standards"
    }
  ];

  const clientLogos = [
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop",
    "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=60&fit=crop"
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Shield" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Trust & Credibility</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our certifications, partnerships, and industry recognition demonstrate our commitment 
            to excellence and security in AI solution delivery.
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Certifications & Partnerships</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="surface-elevated p-6 text-center hover-glow transition-smooth">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg overflow-hidden border border-border">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-semibold mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                <span className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                  {cert.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12">Awards & Recognition</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="surface-elevated p-6 hover-glow transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
                    <Icon name={achievement.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                    <p className="text-primary font-medium mb-2">{achievement.organization}</p>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security Features */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Enterprise-Grade <span className="text-gradient">Security</span>
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your data security is our top priority. We maintain the highest standards 
                of security and compliance across all our AI solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Trusted by Forward-Thinking Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {clientLogos.map((logo, index) => (
              <div key={index} className="w-24 h-12 grayscale hover:grayscale-0 transition-smooth">
                <Image
                  src={logo}
                  alt={`Client ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Security Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;