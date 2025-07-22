import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesGrid = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

    const services = [
        ];
//   const services = [
//     {
//       id: 'text-to-speech',
//       title: 'Text-to-Speech',
//       description: 'Convert written content into natural-sounding speech with advanced AI voice synthesis technology.',
//       icon: 'Volume2',
//       color: 'from-blue-500 to-blue-600',
//       features: ['Natural Voice Quality', 'Multiple Languages', 'Custom Voice Training', 'Real-time Processing'],
//       demo: 'Listen to AI-generated speech samples',
//       metrics: { accuracy: '99.5%', languages: '40+', speed: '2x faster' }
//     },
//     {
//       id: 'speech-to-text',
//       title: 'Speech-to-Text',
//       description: 'Transform audio content into accurate text transcriptions with industry-leading precision.',
//       icon: 'Mic',
//       color: 'from-green-500 to-green-600',
//       features: ['High Accuracy', 'Noise Reduction', 'Speaker Recognition', 'Live Transcription'],
//       demo: 'Try real-time speech recognition',
//       metrics: { accuracy: '98.7%', latency: '&lt;100ms', formats: '15+' }
//     },
//     {
//       id: 'chatbots',
//       title: 'AI Chatbots',
//       description: 'Intelligent conversational agents that understand context and provide human-like interactions.',
//       icon: 'MessageCircle',
//       color: 'from-purple-500 to-purple-600',
//       features: ['Natural Language Processing', 'Context Awareness', 'Multi-platform', '24/7 Availability'],
//       demo: 'Chat with our AI assistant',
//       metrics: { satisfaction: '94%', response: '&lt;2s', languages: '25+' }
//     },
//     {
//       id: 'bigquery-sql',
//       title: 'BigQuery & SQL',
//       description: 'Advanced data analytics and querying solutions for large-scale data processing and insights.',
//       icon: 'Database',
//       color: 'from-orange-500 to-orange-600',
//       features: ['Scalable Analytics', 'Real-time Queries', 'Data Visualization', 'Performance Optimization'],
//       demo: 'Explore data analytics dashboard',
//       metrics: { processing: '10TB/min', queries: '1M+/day', uptime: '99.9%' }
//     },
//     {
//       id: 'google-sheets',
//       title: 'Google Sheets & App Script',
//       description: 'Automate workflows and enhance productivity with custom Google Workspace integrations.',
//       icon: 'FileSpreadsheet',
//       color: 'from-teal-500 to-teal-600',
//       features: ['Workflow Automation', 'Custom Functions', 'Data Integration', 'Real-time Sync'],
//       demo: 'See automation in action',
//       metrics: { efficiency: '80%', integrations: '50+', users: '10K+' }
//     },
//     {
//       id: 'data-visualization',
//       title: 'Data Visualization',
//       description: 'Transform complex data into compelling visual stories with interactive charts and dashboards.',
//       icon: 'BarChart3',
//       color: 'from-pink-500 to-pink-600',
//       features: ['Interactive Dashboards', 'Real-time Updates', 'Custom Charts', 'Export Options'],
//       demo: 'Interact with live charts',
//       metrics: { charts: '100+', updates: 'Real-time', formats: '20+' }
//     },
//     {
//       id: 'web-development',
//       title: 'Web Development',
//       description: 'Modern, responsive web applications built with cutting-edge technologies and AI integration.',
//       icon: 'Code',
//       color: 'from-indigo-500 to-indigo-600',
//       features: ['Responsive Design', 'AI Integration', 'Performance Optimized', 'SEO Ready'],
//       demo: 'View development portfolio',
//       metrics: { performance: '95+', mobile: '100%', load: '&lt;3s' }
//     }
//   ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AI Services</span> Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive AI solutions designed to transform your business operations and drive innovation across every aspect of your organization.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full surface-elevated p-6 rounded-xl transition-smooth hover-lift hover-glow">
                {/* Service Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon name={service.icon} size={32} color="white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Metrics */}
                <div className="mb-6 p-4 bg-muted/20 rounded-lg">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {Object.entries(service.metrics).map(([key, value]) => (
                      <div key={key}>
                        <div className="text-sm font-bold text-primary" dangerouslySetInnerHTML={{ __html: value }} />
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Preview */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none"
                  initial={false}
                  animate={hoveredCard === service.id ? { opacity: 1 } : { opacity: 0 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <Icon name="Play" size={48} className="text-primary mx-auto mb-4" />
                      <p className="text-foreground font-medium">{service.demo}</p>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <Link to="/ai-services-ecosystem">
                    <Button
                      variant="outline"
                      fullWidth
                      iconName="ArrowRight"
                      iconPosition="right"
                      className="group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-smooth"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 transition-smooth -z-10 blur"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Ready to transform your business with AI? Let's discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-consultation-hub">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="btn-primary"
              >
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/ai-services-ecosystem">
              <Button
                variant="outline"
                size="lg"
                iconName="ExternalLink"
                iconPosition="right"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;