import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const TechnicalSpecs = ({ selectedService }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'Info' },
//     { id: 'implementation', label: 'Implementation', icon: 'Code' },
//     { id: 'integration', label: 'Integration', icon: 'Plug' },
//     { id: 'pricing', label: 'Pricing', icon: 'DollarSign' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Technical Architecture</h3>
                <div className="space-y-3">
                  {selectedService.techSpecs.architecture.map((spec, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="ArrowRight" size={16} color="var(--color-accent)" className="mt-1" />
                      <span className="text-muted-foreground">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">Performance Metrics</h3>
                <div className="space-y-4">
                  {selectedService.techSpecs.performance.map((metric, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="text-sm font-medium text-accent">{metric.value}</span>
                      </div>
                      <div className="w-full bg-muted/20 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-smooth"
                          style={{ width: metric.percentage }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
//       case 'implementation':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-foreground">Implementation Process</h3>
//             <div className="space-y-4">
//               {selectedService.implementation.steps.map((step, index) => (
//                 <div key={index} className="flex items-start space-x-4">
//                   <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
//                     <span className="text-sm font-bold text-white">{index + 1}</span>
//                   </div>
//                   <div className="space-y-2">
//                     <h4 className="font-semibold text-foreground">{step.title}</h4>
//                     <p className="text-muted-foreground">{step.description}</p>
//                     <div className="flex items-center space-x-4 text-sm">
//                       <div className="flex items-center space-x-1">
//                         <Icon name="Clock" size={14} color="var(--color-muted-foreground)" />
//                         <span className="text-muted-foreground">{step.duration}</span>
//                       </div>
//                       <div className="flex items-center space-x-1">
//                         <Icon name="Users" size={14} color="var(--color-muted-foreground)" />
//                         <span className="text-muted-foreground">{step.team}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//
//             <div className="bg-muted/10 rounded-lg p-6 mt-8">
//               <h4 className="font-semibold text-foreground mb-4">Sample Code Implementation</h4>
//               <div className="bg-background rounded-lg p-4 font-mono text-sm">
//                 <pre className="text-accent whitespace-pre-wrap">
//                   {selectedService.implementation.codeExample}
//                 </pre>
//               </div>
//             </div>
//           </div>
//         );
//
//       case 'integration':
//         return (
//           <div className="space-y-6">
//             <div className="grid md:grid-cols-2 gap-8">
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-foreground">Compatible Platforms</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   {selectedService.integration.platforms.map((platform, index) => (
//                     <div key={index} className="surface-elevated p-4 text-center">
//                       <div className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center mx-auto mb-2">
//                         <Icon name={platform.icon} size={24} color="var(--color-primary)" />
//                       </div>
//                       <span className="text-sm font-medium text-foreground">{platform.name}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//
//               <div className="space-y-4">
//                 <h3 className="text-xl font-semibold text-foreground">API Endpoints</h3>
//                 <div className="space-y-3">
//                   {selectedService.integration.apis.map((api, index) => (
//                     <div key={index} className="bg-muted/10 rounded-lg p-4">
//                       <div className="flex items-center justify-between mb-2">
//                         <span className="font-mono text-sm text-accent">{api.method}</span>
//                         <span className="text-xs text-muted-foreground">{api.version}</span>
//                       </div>
//                       <code className="text-sm text-foreground font-mono">{api.endpoint}</code>
//                       <p className="text-xs text-muted-foreground mt-2">{api.description}</p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
      
//       case 'pricing':
//         return (
//           <div className="space-y-6">
//             <h3 className="text-xl font-semibold text-foreground">Pricing Tiers</h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {selectedService.pricing.tiers.map((tier, index) => (
//                 <div key={index} className={`surface-elevated p-6 ${tier.popular ? 'border-primary/50' : ''}`}>
//                   {tier.popular && (
//                     <div className="bg-gradient-to-r from-primary to-accent text-white text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
//                       Most Popular
//                     </div>
//                   )}
//                   <div className="space-y-4">
//                     <div>
//                       <h4 className="text-lg font-semibold text-foreground">{tier.name}</h4>
//                       <p className="text-sm text-muted-foreground">{tier.description}</p>
//                     </div>
//                     <div className="flex items-baseline space-x-2">
//                       <span className="text-3xl font-bold text-foreground">${tier.price}</span>
//                       <span className="text-muted-foreground">/{tier.period}</span>
//                     </div>
//                     <ul className="space-y-2">
//                       {tier.features.map((feature, featureIndex) => (
//                         <li key={featureIndex} className="flex items-center space-x-2">
//                           <Icon name="Check" size={16} color="var(--color-accent)" />
//                           <span className="text-sm text-muted-foreground">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Technical <span className="text-gradient">Specifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed technical information and implementation guidelines for {selectedService.name}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 border-b-2 transition-smooth ${
                activeTab === tab.id
                  ? 'border-primary text-primary' :'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span className="font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="surface-elevated p-8 rounded-2xl">
          {renderTabContent()}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;