import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 2021,
      title: "Foundation & Vision",
      description: "Givi AI was founded with the mission to make AI accessible for businesses of all sizes.",
      achievements: [
        "Company incorporation and initial team formation",
        "First AI consultation framework developed",
        "Initial market research and validation"
      ],
      icon: "Rocket"
    },
    {
      year: 2022,
      title: "First Client Success",
      description: "Delivered our first major AI transformation project, establishing our methodology.",
      achievements: [
        "10+ successful AI implementations",
        "Text-to-Speech and Speech-to-Text services launched",
        "Partnership with Google Cloud established"
      ],
      icon: "Trophy"
    },
    {
      year: 2023,
      title: "Service Expansion",
      description: "Expanded our AI service portfolio and grew our expert team significantly.",
      achievements: [
        "Chatbot development services launched",
        "BigQuery & SQL automation solutions",
        "Team expanded to 15+ AI specialists"
      ],
      icon: "Zap"
    },
    {
      year: 2024,
      title: "Innovation & Growth",
      description: "Continued innovation with advanced AI solutions and strategic partnerships.",
      achievements: [
        "50+ AI projects successfully delivered",
        "Advanced data visualization services",
        "AWS partnership and security certifications"
      ],
      icon: "Star"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Clock" size={16} className="text-primary" />
            <span className="text-sm font-medium text-primary">Our Journey</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Company <span className="text-gradient">Timeline</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From a vision to transform AI accessibility to becoming a trusted partner 
            for businesses worldwide. Here's our journey of innovation and growth.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-card/50 border border-border rounded-lg p-2">
            {timelineData.map((item) => (
              <button
                key={item.year}
                onClick={() => setActiveYear(item.year)}
                className={`px-4 py-2 rounded-md font-medium transition-smooth ${
                  activeYear === item.year
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent"></div>
              
              {timelineData.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center mb-16 transition-smooth ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-4 border-background z-10">
                    <Icon name={item.icon} size={20} color="white" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <div className={`surface-elevated p-6 hover-glow transition-smooth ${
                      activeYear === item.year ? 'border-primary/50 shadow-lg' : ''
                    }`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-2xl font-bold text-primary">{item.year}</div>
                        <div className="h-px flex-1 bg-border"></div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      
                      <div className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <Icon name="Check" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden">
            <div className="relative pl-8">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 w-0.5 h-full bg-gradient-to-b from-primary to-accent"></div>
              
              {timelineData.map((item) => (
                <div key={item.year} className="relative mb-12">
                  {/* Timeline Node */}
                  <div className="absolute -left-2 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-2 border-background">
                    <Icon name={item.icon} size={16} color="white" />
                  </div>
                  
                  {/* Content Card */}
                  <div className={`surface-elevated p-6 transition-smooth ${
                    activeYear === item.year ? 'border-primary/50 shadow-lg' : ''
                  }`}>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="text-xl font-bold text-primary">{item.year}</div>
                      <div className="h-px flex-1 bg-border"></div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground mb-4">{item.description}</p>
                    
                    <div className="space-y-2">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <Icon name="Check" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;