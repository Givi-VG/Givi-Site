import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const StickyConsultationCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [contextualMessage, setContextualMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past hero section
      setIsVisible(scrollPosition > windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Set contextual message based on current page/section
    const path = location.pathname;
    
    if (path.includes('homepage')) {
      setContextualMessage('Ready to transform your business with AI?');
    } else if (path.includes('services')) {
      setContextualMessage('Found the perfect AI solution?');
    } else if (path.includes('demo')) {
      setContextualMessage('Impressed by our AI capabilities?');
    } else if (path.includes('knowledge')) {
      setContextualMessage('Ready to implement what you learned?');
    } else if (path.includes('about')) {
      setContextualMessage('Want to work with our expert team?');
    } else {
      setContextualMessage('');
    }
  }, [location]);

  const quickActions = [
    { 
      label: 'Free Consultation', 
      icon: 'Calendar', 
      action: 'consultation',
      description: '30-min strategy session'
    },
    { 
      label: 'Demo Request', 
      icon: 'Play', 
      action: 'demo',
      description: 'See AI in action'
    },
    { 
      label: 'Get Quote', 
      icon: 'FileText', 
      action: 'quote',
      description: 'Custom pricing'
    }
  ];

  const handleQuickAction = (action) => {
    // In a real app, this would trigger different modals or navigate to specific sections
    console.log(`Quick action: ${action}`);
    setIsExpanded(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                className="mb-4 space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
              >
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.action}
                    className="w-full glass-effect p-4 rounded-lg hover:bg-primary/10 transition-smooth text-left group"
                    onClick={() => handleQuickAction(action.action)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition-smooth">
                        <Icon name={action.icon} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{action.label}</div>
                        <div className="text-sm text-muted-foreground">{action.description}</div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main CTA Button */}
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulsing Ring */}
            <motion.div
              className="absolute inset-0 bg-primary/30 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Main Button */}
            <div className="relative glass-effect rounded-full p-1">
              <div className="bg-gradient-to-r from-primary to-accent rounded-full p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  {/* Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon 
                      name={isExpanded ? "X" : "MessageCircle"} 
                      size={24} 
                      color="white" 
                    />
                  </motion.div>

                  {/* Expandable Content */}
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      <motion.div
                        key="collapsed"
                        className="hidden sm:block"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-medium whitespace-nowrap">
                          Get Started
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="expanded"
                        className="hidden sm:block"
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-white font-medium whitespace-nowrap">
                          Choose Option
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="ml-2 p-1 rounded-full hover:bg-white/20 transition-smooth"
                  >
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Icon name="ChevronUp" size={16} color="white" />
                    </motion.div>
                  </button>
                </div>
              </div>
            </div>

            {/* Click Handler for Main Button */}
            <button
              className="absolute inset-0 rounded-full"
              onClick={() => {
                if (!isExpanded) {
                  // Direct action when collapsed
                  window.location.href = '/contact-consultation-hub';
                }
              }}
            />
          </motion.div>

          {/* Contextual Message */}
          <AnimatePresence>
            {!isExpanded && (
              <motion.div
                className="absolute bottom-full right-0 mb-2 max-w-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 1, duration: 0.3 }}
              >
                <div className="glass-effect p-3 rounded-lg text-sm text-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={16} className="text-accent" />
                    <span>{contextualMessage}</span>
                  </div>
                  <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-muted/80"></div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification Badge */}
          <motion.div
            className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-xs font-bold text-background">!</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyConsultationCTA;