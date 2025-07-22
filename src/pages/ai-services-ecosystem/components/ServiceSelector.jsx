// import React from 'react';
// import Icon from '../../../components/AppIcon';
//
// const ServiceSelector = ({ services, selectedService, onServiceSelect }) => {
//   return (
//     <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-6">
//             <Icon name="Sparkles" size={16} color="rgb(147 51 234)" className="mr-2" />
//             <span className="text-sm font-semibold text-purple-800 uppercase tracking-wider">
//               AI Solutions Portfolio
//             </span>
//           </div>
//           <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">
//             Choose Your
//             <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
//               AI Transformation
//             </span>
//           </h2>
//           <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//             Discover cutting-edge AI solutions designed to revolutionize your business operations and unlock unprecedented growth potential
//           </p>
//         </div>
//
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={service.id}
//               onClick={() => onServiceSelect(service)}
//               className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
//                 selectedService.id === service.id
//                   ? 'scale-105 z-10' :'hover:z-10'
//               }`}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 ${
//                 selectedService.id === service.id
//                   ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/25'
//                   : 'bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 shadow-lg hover:shadow-xl'
//               }`}>
//
//                 {/* Animated Background Pattern */}
//                 <div className="absolute inset-0 opacity-10">
//                   <div className={`absolute top-0 right-0 w-32 h-32 rounded-full transition-all duration-500 ${
//                     selectedService.id === service.id
//                       ? 'bg-white/20 transform translate-x-8 -translate-y-8'
//                       : 'bg-purple-500/20 transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8'
//                   }`}></div>
//                   <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full transition-all duration-500 ${
//                     selectedService.id === service.id
//                       ? 'bg-white/20 transform -translate-x-4 translate-y-4'
//                       : 'bg-pink-500/20 transform -translate-x-8 translate-y-8 group-hover:-translate-x-4 group-hover:translate-y-4'
//                   }`}></div>
//                 </div>
//
//                 <div className="relative p-8 space-y-6">
//                   <div className="flex items-center justify-between">
//                     <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
//                       selectedService.id === service.id
//                         ? 'bg-white/20 shadow-lg'
//                         : 'bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 shadow-lg'
//                     }`}>
//                       <Icon
//                         name={service.icon}
//                         size={28}
//                         color={selectedService.id === service.id ? "white" : "white"}
//                         strokeWidth={2.5}
//                       />
//                       {selectedService.id === service.id && (
//                         <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
//                           <Icon name="Check" size={12} color="white" strokeWidth={3} />
//                         </div>
//                       )}
//                     </div>
//                     {selectedService.id === service.id && (
//                       <div className="flex items-center space-x-2">
//                         <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                         <span className="text-xs text-white font-semibold">ACTIVE</span>
//                       </div>
//                     )}
//                   </div>
//
//                   <div className="space-y-3">
//                     <h3 className={`text-xl font-bold transition-colors duration-300 ${
//                       selectedService.id === service.id
//                         ? 'text-white' :'text-slate-900 group-hover:text-purple-700'
//                     }`}>
//                       {service.name}
//                     </h3>
//                     <p className={`text-sm leading-relaxed transition-colors duration-300 ${
//                       selectedService.id === service.id
//                         ? 'text-white/90' :'text-slate-600 group-hover:text-slate-700'
//                     }`}>
//                       {service.shortDescription}
//                     </p>
//                   </div>
//
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center space-x-2">
//                       <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
//                         selectedService.id === service.id
//                           ? 'bg-white/20' :'bg-purple-100 group-hover:bg-purple-200'
//                       }`}>
//                         <Icon name="Zap" size={12} color={selectedService.id === service.id ? "white" : "rgb(147 51 234)"} />
//                       </div>
//                       <span className={`text-xs font-semibold transition-colors duration-300 ${
//                         selectedService.id === service.id
//                           ? 'text-white' :'text-purple-600 group-hover:text-purple-700'
//                       }`}>
//                         {service.complexity}
//                       </span>
//                     </div>
//                     <div className="flex items-center space-x-2">
//                       <Icon
//                         name="Clock"
//                         size={12}
//                         color={selectedService.id === service.id ? "white" : "rgb(100 116 139)"}
//                       />
//                       <span className={`text-xs transition-colors duration-300 ${
//                         selectedService.id === service.id
//                           ? 'text-white/80' :'text-slate-500 group-hover:text-slate-600'
//                       }`}>
//                         {service.timeline}
//                       </span>
//                     </div>
//                   </div>
//
//                   {/* Hover Effect Arrow */}
//                   <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
//                     selectedService.id === service.id
//                       ? 'opacity-100 transform translate-x-0'
//                       : 'opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
//                   }`}>
//                     <Icon
//                       name="ArrowRight"
//                       size={16}
//                       color={selectedService.id === service.id ? "white" : "rgb(147 51 234)"}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//
//         {/* Bottom CTA */}
// {/*         <div className="text-center mt-16"> */}
// {/*           <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"> */}
// {/*             <Icon name="MessageCircle" size={16} className="mr-2" /> */}
// {/*             Need Help Choosing? Talk to Our AI Experts */}
// {/*           </div> */}
// {/*         </div> */}
//       </div>
//     </section>
//   );
// };
//
// export default ServiceSelector;

import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import { ArrowRight } from 'lucide-react';

const ServiceSelector = ({ services, onServiceSelect }) => {
  // Use the first service as the default selected one
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    onServiceSelect(service);
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
            Choose Your
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              AI Transformation
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Discover cutting-edge AI solutions designed to revolutionize your business operations and unlock unprecedented growth potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => handleServiceSelect(service)}
              className={`group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                selectedService.id === service.id
                  ? 'scale-105 z-10' :'hover:z-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`relative overflow-hidden rounded-2xl transition-all duration-500 h-full flex flex-col ${
                selectedService.id === service.id
                  ? 'bg-gradient-to-br from-purple-600 to-pink-600 shadow-2xl shadow-purple-500/25'
                  : 'bg-white hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 shadow-lg hover:shadow-xl'
              }`}>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className={`absolute top-0 right-0 w-32 h-32 rounded-full transition-all duration-500 ${
                    selectedService.id === service.id
                      ? 'bg-white/20 transform translate-x-8 -translate-y-8'
                      : 'bg-purple-500/20 transform translate-x-16 -translate-y-16 group-hover:translate-x-8 group-hover:-translate-y-8'
                  }`}></div>
                  <div className={`absolute bottom-0 left-0 w-24 h-24 rounded-full transition-all duration-500 ${
                    selectedService.id === service.id
                      ? 'bg-white/20 transform -translate-x-4 translate-y-4'
                      : 'bg-pink-500/20 transform -translate-x-8 translate-y-8 group-hover:-translate-x-4 group-hover:translate-y-4'
                  }`}></div>
                </div>

                <div className="relative p-8 space-y-6 flex-grow flex flex-col">
                  <div className="flex items-center justify-between">
                    <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                      selectedService.id === service.id
                        ? 'bg-white/20 shadow-lg'
                        : 'bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-600 group-hover:to-pink-600 shadow-lg'
                    }`}>
                      <Icon
                        name={service.icon}
                        size={28}
                        color={"white"}
                        strokeWidth={2.5}
                      />
                      {selectedService.id === service.id && (
                        <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                          <Icon name="Check" size={12} color="white" strokeWidth={3} />
                        </div>
                      )}
                    </div>
                    {selectedService.id === service.id && (
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        <span className="text-xs text-white font-semibold">ACTIVE</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3 flex-grow">
                    <h3 className={`text-xl font-bold transition-colors duration-300 ${
                      selectedService.id === service.id
                        ? 'text-white' :'text-slate-900 group-hover:text-purple-700'
                    }`}>
                      {service.name}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-300 ${
                      selectedService.id === service.id
                        ? 'text-white/90' :'text-slate-600 group-hover:text-slate-700'
                    }`}>
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-6 h-6 rounded-lg flex items-center justify-center ${
                        selectedService.id === service.id
                          ? 'bg-white/20' :'bg-purple-100 group-hover:bg-purple-200'
                      }`}>
                        <Icon name="Zap" size={12} color={selectedService.id === service.id ? "white" : "rgb(147 51 234)"} />
                      </div>
                      <span className={`text-xs font-semibold transition-colors duration-300 ${
                        selectedService.id === service.id
                          ? 'text-white' :'text-purple-600 group-hover:text-purple-700'
                      }`}>
                        {service.complexity}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Icon
                        name="Clock"
                        size={12}
                        color={selectedService.id === service.id ? "white" : "rgb(100 116 139)"}
                      />
                      <span className={`text-xs transition-colors duration-300 ${
                        selectedService.id === service.id
                          ? 'text-white/80' :'text-slate-500 group-hover:text-slate-600'
                      }`}>
                        {service.timeline}
                      </span>
                    </div>
                  </div>

                  {service.demoAvailable && selectedService.id === service.id && (
                    <div className="mt-6 text-center">
                      <div className="inline-flex items-center px-6 py-3 bg-white text-purple-700 font-semibold rounded-full group-hover:bg-yellow-300 transition-all duration-300">
                        Try The Demo
                        <ArrowRight size={16} className="ml-2 transform transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  )}

                  <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                    selectedService.id === service.id
                      ? 'opacity-100 transform translate-x-0'
                      : 'opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                  }`}>
                    <Icon
                      name="ArrowRight"
                      size={16}
                      color={selectedService.id === service.id ? "white" : "rgb(147 51 234)"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

{/*         <div className="text-center mt-16"> */}
{/*           <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"> */}
{/*             <Icon name="MessageCircle" size={16} className="mr-2" /> */}
{/*             Need Help Choosing? Talk to Our AI Experts */}
{/*           </div> */}
{/*         </div> */}
      </div>
    </section>
  );
};

export default ServiceSelector;