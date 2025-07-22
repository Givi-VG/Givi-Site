import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceHero = ({ selectedService, onServiceSelect }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-24 lg:py-32 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        {/* Animated Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full animate-spin-slow"></div>
        <div className="absolute top-40 right-40 w-24 h-24 border border-white/20 rounded-lg rotate-45 animate-bounce-slow"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-white/20 rounded-full animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content */}
          <div className="space-y-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                    <Icon name={selectedService.icon} size={28} color="white" strokeWidth={2.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Icon name="Zap" size={12} color="white" strokeWidth={3} />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-purple-300 uppercase tracking-wider">
                    NEXT-GEN AI SERVICE
                  </span>
                  <span className="text-xs text-purple-200 opacity-80">
                    Powered by Advanced Machine Learning
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                  <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    {selectedService.name}
                  </span>
                  <span className="text-white/90 text-4xl lg:text-6xl block mt-2">
                    Revolution
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-purple-100 leading-relaxed max-w-2xl font-light">
                  {selectedService.description}
                </p>
              </div>
            </div>

            {/* Enhanced Features Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Icon name="Star" size={20} color="rgb(168 85 247)" className="mr-2" />
                Core Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedService.features.map((feature, index) => (
                  <div key={index} className="group flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name="Check" size={14} color="white" strokeWidth={3} />
                    </div>
                    <span className="text-purple-100 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                variant="default" 
                size="lg"
                iconName="Rocket"
                iconPosition="left"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Launch Demo Experience
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                className="border-purple-400 text-purple-100 hover:bg-purple-500/20 hover:border-purple-300 shadow-lg backdrop-blur-sm"
              >
                Book Expert Consultation
              </Button>
            </div>
          </div>

          {/* Futuristic Demo Preview */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl">
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-xl"></div>
              
              <div className="relative space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white flex items-center">
                    <Icon name="Activity" size={24} color="rgb(168 85 247)" className="mr-2" />
                    Live AI Demo
                  </h3>
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-200"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
                    </div>
                    <span className="text-sm text-green-400 font-semibold">PROCESSING</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 min-h-[280px] flex items-center justify-center backdrop-blur-sm border border-white/10">
                  <div className="text-center space-y-6">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-float">
                        <Icon name={selectedService.icon} size={36} color="white" strokeWidth={2} />
                      </div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/40 to-pink-500/40 animate-ping"></div>
                    </div>
                    <div className="space-y-2">
                      <p className="text-purple-100 text-lg font-medium">
                        Interactive AI Experience
                      </p>
                      <p className="text-purple-300 text-sm">
                        Click "Launch Demo" to experience the power of {selectedService.name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;