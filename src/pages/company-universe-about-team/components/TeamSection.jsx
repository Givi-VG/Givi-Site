import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & AI Strategy Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Former Google AI researcher with 8+ years in machine learning and business transformation. Sarah leads our strategic vision and client relationships.",
      specializations: ["AI Strategy", "Machine Learning", "Business Transformation", "Team Leadership"],
      linkedin: "https://linkedin.com/in/sarahchen",
      projects: "Led 25+ AI transformation projects",
      education: "PhD Computer Science, Stanford University"
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "CTO & Lead AI Engineer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack AI engineer specializing in NLP and computer vision. Marcus architected our core AI infrastructure and development frameworks.",
      specializations: ["Natural Language Processing", "Computer Vision", "System Architecture", "DevOps"],
      linkedin: "https://linkedin.com/in/marcusrodriguez",
      projects: "Architected 40+ AI solutions",
      education: "MS AI Engineering, MIT"
    },
    {
      id: 3,
      name: "Emily Watson",
      role: "Head of Data Science",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Data science expert with deep expertise in statistical modeling and predictive analytics. Emily ensures our AI solutions deliver measurable business impact.",
      specializations: ["Data Science", "Statistical Modeling", "Predictive Analytics", "Business Intelligence"],
      linkedin: "https://linkedin.com/in/emilywatson",
      projects: "Delivered insights for 30+ clients",
      education: "PhD Statistics, UC Berkeley"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Senior AI Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Specialized in conversational AI and chatbot development. David creates intelligent automation solutions that enhance customer experiences.",
      specializations: ["Conversational AI", "Chatbot Development", "Automation", "API Integration"],
      linkedin: "https://linkedin.com/in/davidkim",
      projects: "Built 20+ chatbot solutions",
      education: "BS Computer Science, Carnegie Mellon"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "AI Solutions Architect",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Enterprise solutions specialist focused on scalable AI implementations. Lisa bridges technical capabilities with business requirements.",
      specializations: ["Solution Architecture", "Enterprise Integration", "Cloud Platforms", "Technical Consulting"],
      linkedin: "https://linkedin.com/in/lisathompson",
      projects: "Architected 15+ enterprise solutions",
      education: "MS Software Engineering, Georgia Tech"
    },
    {
      id: 6,
      name: "James Wilson",
      role: "Machine Learning Engineer",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "ML engineer with expertise in deep learning and model optimization. James ensures our AI models perform efficiently at scale.",
      specializations: ["Deep Learning", "Model Optimization", "TensorFlow", "PyTorch"],
      linkedin: "https://linkedin.com/in/jameswilson",
      projects: "Optimized 35+ ML models",
      education: "MS Machine Learning, University of Washington"
    }
  ];

  const departments = [
    {
      name: "Leadership",
      count: 2,
      icon: "Crown",
      color: "text-primary"
    },
    {
      name: "Engineering",
      count: 8,
      icon: "Code",
      color: "text-accent"
    },
    {
      name: "Data Science",
      count: 3,
      icon: "BarChart3",
      color: "text-warning"
    },
    {
      name: "Consulting",
      count: 2,
      icon: "Users",
      color: "text-success"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Icon name="Users" size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Meet the <span className="text-gradient">AI Experts</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of AI specialists, engineers, and consultants brings together 
            decades of experience in making artificial intelligence work for businesses.
          </p>
        </div>

        {/* Department Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {departments.map((dept, index) => (
            <div key={index} className="surface-elevated p-6 text-center hover-glow transition-smooth">
              <div className={`w-12 h-12 mx-auto mb-4 bg-${dept.color.split('-')[1]}/10 border border-${dept.color.split('-')[1]}/20 rounded-lg flex items-center justify-center`}>
                <Icon name={dept.icon} size={24} className={dept.color} />
              </div>
              <div className="text-2xl font-bold mb-1">{dept.count}</div>
              <div className="text-sm text-muted-foreground">{dept.name}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="surface-elevated p-6 hover-glow transition-smooth cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-background">
                  <Icon name="Linkedin" size={16} color="white" />
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{member.bio}</p>
                
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.specializations.slice(0, 2).map((spec, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary"
                    >
                      {spec}
                    </span>
                  ))}
                  {member.specializations.length > 2 && (
                    <span className="px-2 py-1 bg-muted/50 border border-border rounded-full text-xs text-muted-foreground">
                      +{member.specializations.length - 2} more
                    </span>
                  )}
                </div>
                
                <button className="text-sm text-accent hover:text-accent/80 transition-smooth flex items-center space-x-1 mx-auto">
                  <span>View Profile</span>
                  <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Team Member Modal */}
        {selectedMember && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                      <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{selectedMember.name}</h3>
                      <p className="text-primary font-medium">{selectedMember.role}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMember(null)}
                    className="p-2 hover:bg-muted/50 rounded-lg transition-smooth"
                  >
                    <Icon name="X" size={20} />
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3">About</h4>
                    <p className="text-muted-foreground leading-relaxed">{selectedMember.bio}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Specializations</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedMember.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Experience</h4>
                      <p className="text-muted-foreground">{selectedMember.projects}</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Education</h4>
                      <p className="text-muted-foreground">{selectedMember.education}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-accent hover:text-accent/80 transition-smooth"
                    >
                      <Icon name="Linkedin" size={20} />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;