import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: "Mail",
      title: "Email Us",
      primary: "givi.dev2000@gmail.com",
      secondary: "giriofficial29@gmail.com",
      description: "Get in touch for consultations and support",
      action: "Send Email"
    },
    {
      icon: "Phone",
      title: "Call Us",
      primary: "+91 9751671018",
      secondary: "+91 638168110",
      description: "Speak directly with our AI experts",
      action: "Call Now"
    },
    {
      icon: "MessageCircle",
      title: "Live Chat",
      primary: "Available 24/7",
      secondary: "Average response: 2 minutes",
      description: "Instant support for your questions",
      action: "Start Chat"
    },
    {
      icon: "Calendar",
      title: "Schedule Meeting",
      primary: "Book a consultation",
      secondary: "30-minute free session",
      description: "Discuss your AI transformation needs",
      action: "Book Now"
    }
  ];

  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Innovation Drive, Suite 400",
      zipCode: "San Francisco, CA 94105",
      phone: "++91 9751671018",
      isHeadquarters: true,
      coordinates: "37.7749,-122.4194"
    },
    {
      city: "New York",
      address: "456 Tech Avenue, Floor 15",
      zipCode: "New York, NY 10001",
      phone: "+1 (555) 123-4568",
      isHeadquarters: false,
      coordinates: "40.7128,-74.0060"
    },
    {
      city: "Austin",
      address: "789 AI Boulevard, Building C",
      zipCode: "Austin, TX 78701",
      phone: "+1 (555) 123-4569",
      isHeadquarters: false,
      coordinates: "30.2672,-97.7431"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" },
    { day: "Emergency Support", hours: "24/7 Available" }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Contact <span className="text-gradient">Information</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your AI transformation journey? We're here to help. 
            Reach out through any of these channels and let's discuss your needs.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className="surface-elevated p-6 text-center hover-glow transition-smooth">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                <Icon name={method.icon} size={24} color="white" />
              </div>
              
              <h3 className="text-lg font-semibold mb-3">{method.title}</h3>
              <div className="space-y-1 mb-4">
                <p className="font-medium text-primary">{method.primary}</p>
                <p className="text-sm text-muted-foreground">{method.secondary}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
              
              <Button variant="outline" size="sm" fullWidth>
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-gradient">Locations</span>
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {officeLocations.map((location, index) => (
              <div key={index} className="surface-elevated p-6 hover-glow transition-smooth">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold mb-1">{location.city}</h4>
                    {location.isHeadquarters && (
                      <span className="inline-block px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                        Headquarters
                      </span>
                    )}
                  </div>
                  <Icon name="MapPin" size={20} className="text-accent" />
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <Icon name="Home" size={16} className="text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm">{location.address}</p>
                      <p className="text-sm text-muted-foreground">{location.zipCode}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={16} className="text-muted-foreground" />
                    <p className="text-sm">{location.phone}</p>
                  </div>
                </div>
                
                {/* Google Maps Embed */}
                <div className="w-full h-48 rounded-lg overflow-hidden border border-border mb-4">
                  <iframe
                    width="100%"
                    height="100%"
                    loading="lazy"
                    title={`${location.city} Office Location`}
                    referrerPolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps?q=${location.coordinates}&z=14&output=embed`}
                  />
                </div>
                
                <Button variant="outline" size="sm" fullWidth iconName="Navigation" iconPosition="left">
                  Get Directions
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Business Hours & Additional Info */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Business Hours */}
          <div className="surface-elevated p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-lg flex items-center justify-center">
                <Icon name="Clock" size={20} className="text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Business Hours</h3>
            </div>
            
            <div className="space-y-4">
              {businessHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <span className="font-medium">{schedule.day}</span>
                  <span className="text-muted-foreground">{schedule.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Info" size={16} className="text-primary" />
                <span className="text-sm font-medium text-primary">Note</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Emergency support is available 24/7 for critical issues. 
                Response time may vary outside business hours.
              </p>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="surface-elevated p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="Send" size={20} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Quick Contact</h3>
            </div>
            
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="your.email@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                  placeholder="Tell us about your AI needs..."
                />
              </div>
              
              <Button variant="default" fullWidth iconName="Send" iconPosition="right" className="btn-primary">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;