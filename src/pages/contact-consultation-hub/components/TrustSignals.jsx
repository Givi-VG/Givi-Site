import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const certifications = [
    {
      id: 1,
      name: "SOC 2 Type II",
      description: "Security & compliance certified",
      icon: "Shield",
      verified: true
    },
    {
      id: 2,
      name: "GDPR Compliant",
      description: "Data protection certified",
      icon: "Lock",
      verified: true
    },
    {
      id: 3,
      name: "ISO 27001",
      description: "Information security standard",
      icon: "Award",
      verified: true
    },
    {
      id: 4,
      name: "Google Cloud Partner",
      description: "Certified AI/ML specialist",
      icon: "Cloud",
      verified: true
    }
  ];

  const guarantees = [
    {
      id: 1,
      title: "100% Confidentiality",
      description: "Your data and business information are protected by strict NDAs and security protocols.",
      icon: "Eye"
    },
    {
      id: 2,
      title: "No Vendor Lock-in",
      description: "All solutions are built with open standards, ensuring you maintain full control and ownership.",
      icon: "Unlock"
    },
    {
      id: 3,
      title: "Transparent Pricing",
      description: "No hidden fees or surprise costs. Every project includes detailed cost breakdowns upfront.",
      icon: "DollarSign"
    },
    {
      id: 4,
      title: "Quality Guarantee",
      description: "30-day warranty on all deliverables with free revisions until you\'re completely satisfied.",
      icon: "CheckCircle"
    }
  ];

  const stats = [
    {
      id: 1,
      value: "500+",
      label: "Projects Completed",
      icon: "Briefcase"
    },
    {
      id: 2,
      value: "98%",
      label: "Client Satisfaction",
      icon: "Heart"
    },
    {
      id: 3,
      value: "24h",
      label: "Average Response Time",
      icon: "Clock"
    },
    {
      id: 4,
      value: "5+",
      label: "Years Experience",
      icon: "Calendar"
    }
  ];

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why{' '}
            <span className="text-gradient">Trust Givi AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your success is our priority. We've built our reputation on delivering exceptional AI solutions with complete transparency and security.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <Icon name={stat.icon} size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Security & Compliance Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="surface-elevated p-6 rounded-xl text-center hover-lift transition-smooth"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-full mb-4">
                  <Icon name={cert.icon} size={20} className="text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
                {cert.verified && (
                  <div className="inline-flex items-center space-x-1 text-xs text-accent">
                    <Icon name="CheckCircle" size={14} />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-8">
            Our Guarantees to You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guarantees.map((guarantee) => (
              <div
                key={guarantee.id}
                className="surface-elevated p-6 rounded-xl hover-lift transition-smooth"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={guarantee.icon} size={20} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {guarantee.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy & Data Handling */}
        <div className="surface-elevated p-8 rounded-xl">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-destructive/10 rounded-full mb-4">
              <Icon name="ShieldCheck" size={24} className="text-destructive" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Data Security & Privacy
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We take data protection seriously. Here's how we keep your information safe and secure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-muted/20 rounded-lg mb-4">
                <Icon name="Database" size={20} className="text-muted-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data Encryption</h4>
              <p className="text-sm text-muted-foreground">
                All data is encrypted in transit and at rest using industry-standard AES-256 encryption.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-muted/20 rounded-lg mb-4">
                <Icon name="Users" size={20} className="text-muted-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Access Control</h4>
              <p className="text-sm text-muted-foreground">
                Strict role-based access controls ensure only authorized personnel can access your data.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-muted/20 rounded-lg mb-4">
                <Icon name="Trash2" size={20} className="text-muted-foreground" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Data Deletion</h4>
              <p className="text-sm text-muted-foreground">
                Your data is permanently deleted upon request or contract termination.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-smooth font-medium"
              >
                <Icon name="FileText" size={18} className="mr-2" />
                Privacy Policy
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-smooth font-medium"
              >
                <Icon name="Scale" size={18} className="mr-2" />
                Terms of Service
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-smooth font-medium"
              >
                <Icon name="Shield" size={18} className="mr-2" />
                Security Report
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;