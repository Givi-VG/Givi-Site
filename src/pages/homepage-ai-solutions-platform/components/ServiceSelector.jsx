import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ServiceSelector = ({ services, onServiceSelect }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  const selectedService = services[currentIndex];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const [direction, setDirection] = useState(0);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection > 0) handleNext();
    else handlePrev();
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
            <Icon name="Sparkles" size={16} color="rgb(147 51 234)" className="mr-2" />
            <span className="text-sm font-semibold text-purple-800 uppercase tracking-wider">
              AI Solutions Portfolio
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
            Explore Our
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Interactive Demos
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions designed to revolutionize your business. Click on a service to try our live demo.
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button
            onClick={() => paginate(-1)}
            className="absolute left-0 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 -translate-x-1/2"
          >
            <ArrowLeft className="text-purple-600" />
          </button>

          <div className="relative w-full max-w-sm h-[420px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full"
              >
                <div
                  onClick={() => onServiceSelect(selectedService)}
                  className="group cursor-pointer w-full h-full"
                >
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/25 h-full flex flex-col justify-between">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/20 transform translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4"></div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-white/20 transform -translate-x-8 translate-y-8 transition-transform duration-500 group-hover:-translate-x-4 group-hover:translate-y-4"></div>
                    </div>

                    <div className="relative p-8 space-y-6">
                      <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center bg-white/20 shadow-lg">
                        <Icon name={selectedService.icon} size={28} color="white" strokeWidth={2.5} />
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-white">{selectedService.name}</h3>
                        <p className="text-white/90 leading-relaxed">{selectedService.shortDescription}</p>
                      </div>
                    </div>

                    <div className="relative p-8 mt-auto">
                      <div className="flex items-center justify-between text-white/80">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-lg flex items-center justify-center bg-white/20">
                            <Icon name="Zap" size={12} color="white" />
                          </div>
                          <span className="text-xs font-semibold">{selectedService.complexity}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Icon name="Clock" size={12} color="white" />
                          <span className="text-xs">{selectedService.timeline}</span>
                        </div>
                      </div>
                      {selectedService.demoAvailable && (
                        <div className="mt-6 text-center">
                          <div className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-full group-hover:bg-yellow-300 transition-all duration-300">
                            Try The Demo
                            <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => paginate(1)}
            className="absolute right-0 z-20 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-300 translate-x-1/2"
          >
            <ArrowRight className="text-purple-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelector;