import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const ClientSuccess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);
  const sectionRef = useRef(null);

  const successMetrics = [
    { value: '500+', label: 'Projects Completed', icon: 'CheckCircle', color: 'text-accent' },
    { value: '99.9%', label: 'Client Satisfaction', icon: 'Heart', color: 'text-primary' },
    { value: '24/7', label: 'Support Available', icon: 'Clock', color: 'text-accent' },
    { value: '50ms', label: 'Average Response', icon: 'Zap', color: 'text-primary' }
  ];

  const clientLogos = [
    { name: 'TechCorp Solutions', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center' },
    { name: 'DataFlow Systems', logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop&crop=center' },
    { name: 'InnovateLab', logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&h=100&fit=crop&crop=center' },
    { name: 'CloudFirst Enterprise', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=100&fit=crop&crop=center' },
    { name: 'AI Dynamics', logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=100&fit=crop&crop=center' },
    { name: 'FutureScale', logo: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=200&h=100&fit=crop&crop=center' }
  ];

  const testimonials = [
    {
      id: 1,
      quote: `Givi's AI chatbot implementation increased our customer satisfaction by 40% and reduced response time from hours to seconds. The ROI was evident within the first month.`,author: 'Sarah Chen',position: 'CTO',company: 'TechCorp Solutions',avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      metrics: { satisfaction: '+40%', response: '&lt;2s', roi: '300%' }
    },
    {
      id: 2,
      quote: `The data visualization dashboard transformed how we make decisions. Complex analytics became intuitive, and our team productivity increased by 60%.`,
      author: 'Michael Rodriguez',position: 'Data Director',company: 'DataFlow Systems',avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      metrics: { productivity: '+60%', decisions: '3x faster', accuracy: '95%' }
    },
    {
      id: 3,
      quote: `Their speech-to-text solution revolutionized our content creation process. We now process 10x more audio content with 99% accuracy.`,
      author: 'Emily Watson',position: 'Operations Manager',company: 'InnovateLab',avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      metrics: { processing: '10x faster', accuracy: '99%', cost: '-50%' }
    }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % successMetrics.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [successMetrics.length]);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Client Success</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how leading companies are transforming their operations with our AI solutions and achieving measurable results.
          </p>
        </motion.div>

        {/* Success Metrics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {successMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className={`text-center p-6 rounded-xl surface-elevated transition-smooth ${
                currentMetric === index ? 'ring-2 ring-primary/50 bg-primary/5' : ''
              }`}
              animate={currentMetric === index ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center`}>
                <Icon name={metric.icon} size={32} className={metric.color} />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-muted-foreground">
            Trusted by Leading Companies
          </h3>
          <div className="relative overflow-hidden">
            <motion.div
              className="flex space-x-12"
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-48 h-24 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-muted/30 transition-smooth"
                >
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded mx-auto mb-2"></div>
                    <span className="text-sm font-medium text-muted-foreground">{client.name}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="surface-elevated p-6 rounded-xl hover-lift hover-glow"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
            >
              {/* Quote */}
              <div className="mb-6">
                <Icon name="Quote" size={24} className="text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed italic">
                  {testimonial.quote}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-muted/10 rounded-lg">
                {Object.entries(testimonial.metrics).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-sm font-bold text-primary" dangerouslySetInnerHTML={{ __html: value }} />
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="User" size={20} color="white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.position} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="surface-elevated p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how AI can transform your business and deliver measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary px-6 py-3 rounded-lg font-medium transition-smooth hover:scale-105 flex items-center gap-2">
                <Icon name="Calendar" size={20} />
                Schedule Free Consultation
              </button>
              <button className="border border-border px-6 py-3 rounded-lg font-medium transition-smooth hover:bg-muted/20 flex items-center gap-2">
                <Icon name="FileText" size={20} />
                Download Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSuccess;