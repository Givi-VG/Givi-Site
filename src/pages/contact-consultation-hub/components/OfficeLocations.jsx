import React from 'react';
import Icon from '../../../components/AppIcon';

const OfficeLocations = () => {
  const offices = [
    {
      id: 1,
      name: "San Francisco Headquarters",
      address: "123 Innovation Drive, Suite 500",
      city: "San Francisco, CA 94105",
      phone: "+91 9751671018",
      email: "givi.dev2000@gmail.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM PST",
      timezone: "Pacific Time",
      lat: "37.7749",
      lng: "-122.4194",
      isHeadquarters: true,
      specialties: ["AI Strategy", "Machine Learning", "Data Science"]
    },
    {
      id: 2,
      name: "New York Office",
      address: "456 Tech Avenue, Floor 12",
      city: "New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@givi.ai",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM EST",
      timezone: "Eastern Time",
      lat: "40.7128",
      lng: "-74.0060",
      isHeadquarters: false,
      specialties: ["Enterprise AI", "Financial AI", "Consulting"]
    },
    {
      id: 3,
      name: "Austin Development Center",
      address: "789 Innovation Blvd, Building C",
      city: "Austin, TX 78701",
      phone: "+1 (555) 345-6789",
      email: "austin@givi.ai",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM CST",
      timezone: "Central Time",
      lat: "30.2672",
      lng: "-97.7431",
      isHeadquarters: false,
      specialties: ["Web Development", "AI Integration", "Technical Support"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our{' '}
            <span className="text-gradient">Office Locations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us in person or connect with our regional teams. We're strategically located to serve clients across different time zones.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.id}
              className={`surface-elevated p-8 rounded-xl hover-lift transition-smooth ${
                office.isHeadquarters ? 'border-primary/30 bg-primary/5' : ''
              }`}
            >
              {/* Office Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">
                      {office.name}
                    </h3>
                    {office.isHeadquarters && (
                      <span className="inline-flex items-center px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {office.timezone}
                  </p>
                </div>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                  office.isHeadquarters ? 'bg-primary/20' : 'bg-muted/20'
                }`}>
                  <Icon 
                    name="MapPin" 
                    size={24} 
                    className={office.isHeadquarters ? 'text-primary' : 'text-muted-foreground'} 
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={16} className="text-muted-foreground mt-1 flex-shrink-0" />
                  <div className="text-sm text-foreground">
                    <div>{office.address}</div>
                    <div>{office.city}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-muted-foreground flex-shrink-0" />
                  <a 
                    href={`tel:${office.phone.replace(/\D/g, '')}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {office.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={16} className="text-muted-foreground flex-shrink-0" />
                  <a 
                    href={`mailto:${office.email}`}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-muted-foreground flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {office.hours}
                  </span>
                </div>
              </div>

              {/* Specialties */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-foreground mb-3">Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {office.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-muted/20 text-muted-foreground text-xs rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="h-48 rounded-lg overflow-hidden bg-muted/10 mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={office.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                  className="border-0"
                />
              </div>

              {/* Actions */}
              <div className="flex space-x-3">
                <a
                  href={`https://maps.google.com?q=${office.lat},${office.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-smooth text-sm font-medium"
                >
                  <Icon name="Navigation" size={16} className="mr-2" />
                  Directions
                </a>
                <a
                  href={`tel:${office.phone.replace(/\D/g, '')}`}
                  className={`flex-1 inline-flex items-center justify-center px-4 py-2 rounded-lg transition-smooth text-sm font-medium ${
                    office.isHeadquarters 
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                      : 'bg-accent text-accent-foreground hover:bg-accent/90'
                  }`}
                >
                  <Icon name="Phone" size={16} className="mr-2" />
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Support Notice */}
        <div className="mt-16 text-center">
          <div className="surface-elevated p-8 rounded-xl max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
              <Icon name="Globe" size={24} className="text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Global Remote Support
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't visit us in person? No problem! We provide full remote consultation and project management services worldwide. Our distributed team ensures 24/7 support coverage across all time zones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#consultation-form"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
              >
                <Icon name="Video" size={18} className="mr-2" />
                Schedule Video Call
              </a>
              <a
                href="mailto:hello@givi.ai"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-smooth font-medium"
              >
                <Icon name="MessageCircle" size={18} className="mr-2" />
                Start Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;