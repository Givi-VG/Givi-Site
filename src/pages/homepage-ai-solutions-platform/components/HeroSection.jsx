import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Spline from '@splinetool/react-spline';

// Updated services data to include an 'active' state for styling
const services = [
  { title: 'Text-to-Speech', icon: 'Volume2', active: true },
  { title: 'Speech-to-Text', icon: 'Mic', active: false },
  { title: 'BigQuery & SQL', icon: 'Database', active: false },
  { title: 'Google Sheets', icon: 'Sheet', active: false },
  { title: 'Data Visualization', icon: 'BarChart3', active: false },
  { title: 'Web Development', icon: 'Globe', active: false },
];

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const botRef = useRef();
  const robotContainerRef = useRef();

  useEffect(() => {
    setIsVisible(true);
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    // Attach mousemove to the robot container only
    const robotContainer = robotContainerRef.current;
    if (robotContainer) {
      robotContainer.addEventListener('mousemove', handleMouseMove);
      return () => {
        robotContainer.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  // Touch handlers for mobile drag
  useEffect(() => {
    const robotContainer = robotContainerRef.current;
    if (!robotContainer) return;
    let isTouching = false;

    const handleTouchStart = (e) => {
      isTouching = true;
      const rect = robotContainer.getBoundingClientRect();
      const touch = e.touches[0];
      setMousePosition({
        x: (touch.clientX - rect.left) / rect.width,
        y: (touch.clientY - rect.top) / rect.height,
      });
    };
    const handleTouchMove = (e) => {
      if (!isTouching) return;
      const rect = robotContainer.getBoundingClientRect();
      const touch = e.touches[0];
      setMousePosition({
        x: (touch.clientX - rect.left) / rect.width,
        y: (touch.clientY - rect.top) / rect.height,
      });
    };
    const handleTouchEnd = () => {
      isTouching = false;
    };
    robotContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    robotContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    robotContainer.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      robotContainer.removeEventListener('touchstart', handleTouchStart);
      robotContainer.removeEventListener('touchmove', handleTouchMove);
      robotContainer.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  function onLoad(spline) {
    const bot = spline.findObjectByName('Cube');
    botRef.current = bot;
  }

  useEffect(() => {
    if (botRef.current) {
      botRef.current.rotation.y = (mousePosition.x - 0.5) * Math.PI * 0.25;
      botRef.current.rotation.x = -(mousePosition.y - 0.5) * Math.PI * 0.25;
    }
  }, [mousePosition]);

  const HamburgerMenu = () => (
    <div className="absolute top-0 right-0 p-4 lg:hidden">
      <button onClick={() => setMenuOpen(!isMenuOpen)} className="z-50">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
        </svg>
      </button>
      <div className={`fixed top-0 left-0 w-full h-full bg-black transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex justify-center items-center h-full">
          <Link to="/contact-consultation-hub" className="text-white text-2xl">Start Your AI Journey</Link>
        </div>
      </div>
    </div>
  );

  return (
    <section id="hero-section" className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden py-8">
      <HamburgerMenu />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <motion.div
              key={i}
              className="border border-border/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 3, delay: i * 0.02, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <motion.div className="lg:w-1/2 text-center lg:text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: isVisible ? 1 : 0, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight mt-20 lg:mt-0" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}>
              <span className="text-gradient">AI Solutions</span><br />
              <span className="text-foreground">Tailored for</span><br />
              <span className="text-primary">Tomorrow</span>
            </motion.h1>
            <motion.p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}>
              Transform your business with cutting-edge AI technologies. From intelligent chatbots to advanced data analytics, we bridge the gap between complex AI capabilities and practical business solutions.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}>
              <Link to="/contact-consultation-hub">
                <Button variant="default" size="lg" iconName="ArrowRight" iconPosition="right" className="btn-primary hover-glow">
                  Start Your AI Journey
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          {/* Robot with touch and mouse support, and larger on mobile */}
          <motion.div 
            ref={robotContainerRef}
            className="w-full lg:w-1/2 flex justify-center lg:justify-start mt-10 lg:mt-0 touch-action-none lg:pl-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            style={{}}
          >
            <div className="relative w-[40vh] h-[40vh] lg:w-[35vw] lg:h-[35vw] max-w-lg max-h-lg">
              <Spline scene="https://prod.spline.design/Z85i54BEEWRG9khf/scene.splinecode" onLoad={onLoad} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Redesigned services section to match the image
const AiServicesSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-20 lg:py-32 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span className="bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
            <Icon name="Sparkles" className="w-4 h-4" />
            SERVICES OFFERED
          </span>
        </motion.div>
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Choose Your <span className="text-gradient">AI Transformation</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2
                ${service.active
                  ? 'bg-gradient-to-br from-primary to-accent text-white'
                  : 'bg-white'
                }`
              }
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-6
                ${service.active ? 'bg-white/20' : 'bg-primary/10'}`
              }>
                <Icon name={service.icon} className={`w-10 h-10 ${service.active ? 'text-white' : 'text-primary'}`} />
              </div>
              <h3 className="text-2xl font-bold">{service.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Main export now includes both sections
const FullPage = () => {
  return (
    <>
      <HeroSection />
      <AiServicesSection />
    </>
  );
};

export default FullPage;

