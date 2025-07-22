import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactMethods = () => {
  const contactMethods = [
    {
      id: 1,
      icon: "Phone",
      title: "Phone Consultation",
      description: "Speak directly with our AI experts for immediate guidance and quick questions.",
      contact: "+91 9751671018 / 6381168110",
      availability: "24/7",
      action: "Call Now",
      primary: true
    },
    {
      id: 2,
      icon: "Mail",
      title: "Email Inquiry",
      description: "Send us detailed project requirements and we\'ll respond with a comprehensive proposal.",
      contact: "givi.dev2000@gmail.com",
      availability: "Response within 24 hours",
      action: "Send Email",
      primary: false
    },
//     {
//       id: 3,
//       icon: "MessageSquare",
//       title: "Live Chat Support",
//       description: "Get instant answers to your questions through our AI-powered chat system.",
//       contact: "Available on website",
//       availability: "24/7 AI + Business hours live agent",
//       action: "Start Chat",
//       primary: false
//     },
//     {
//       id: 4,
//       icon: "Calendar",
//       title: "Schedule Meeting",
//       description: "Book a dedicated consultation slot with our senior AI consultants.",
//       contact: "30-60 minute sessions",
//       availability: "Flexible scheduling across timezones",
//       action: "Book Now",
//       primary: true
//     }
  ];

  const handleContactAction = (method) => {
    switch (method.action) {
      case "Call Now":
        window.open("tel:6381168110", "_self");
        break;
      case "Send Email":
        window.open("mailto:givi.dev2000@gmail.com?subject=AI Consultation Inquiry", "_self");
        break;
      case "Start Chat":
        // Mock chat functionality
        alert("Live chat would open here in a real implementation");
        break;
      case "Book Now":
        // Mock booking functionality
        alert("Calendar booking system would open here");
        break;
      default:
        break;
    }
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Choose Your Preferred{' '}
            <span className="text-gradient">Contact Method</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer multiple ways to connect with our team. Select the option that works best for your needs and timeline.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`surface-elevated p-8 rounded-xl hover-lift transition-smooth ${
                method.primary ? 'border-primary/30 bg-primary/5' : ''
              }`}
            >
              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  method.primary ? 'bg-primary/20' : 'bg-muted/20'
                }`}>
                  <Icon 
                    name={method.icon} 
                    size={24} 
                    className={method.primary ? 'text-primary' : 'text-muted-foreground'} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Icon name="Info" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-foreground font-medium">
                    {method.contact}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    {method.availability}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Button
                variant={method.primary ? "default" : "outline"}
                fullWidth
                iconName="ArrowRight"
                iconPosition="right"
                onClick={() => handleContactAction(method)}
                className={method.primary ? "btn-primary" : ""}
              >
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-3">
            <Icon name="AlertCircle" size={20} className="text-destructive" />
            <span className="text-sm text-destructive font-medium">
              For urgent technical support: givi.dev2000@gmail.com or +91 9751671018
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;