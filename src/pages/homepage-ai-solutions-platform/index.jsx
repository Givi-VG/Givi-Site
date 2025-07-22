// import React from 'react';
// import { Helmet } from 'react-helmet';
// import Header from '../../components/ui/Header';
// import HeroSection from './components/HeroSection';
// import ServicesGrid from './components/ServicesGrid';
// import ClientSuccess from './components/ClientSuccess';
// import NewsletterSignup from './components/NewsletterSignup';
// import StickyConsultationCTA from './components/StickyConsultationCTA';
//
// const Homepage = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Givi AI - AI Solutions Tailored for Tomorrow | Premium AI Consultancy</title>
//         <meta name="description" content="Transform your business with cutting-edge AI technologies. From intelligent chatbots to advanced data analytics, Givi AI bridges complex AI capabilities with practical business solutions." />
//         <meta name="keywords" content="AI solutions, artificial intelligence, chatbots, data analytics, machine learning, business transformation, AI consultancy" />
//         <meta property="og:title" content="Givi AI - AI Solutions Tailored for Tomorrow" />
//         <meta property="og:description" content="Premium AI solutions platform offering Text-to-Speech, Speech-to-Text, Chatbots, BigQuery & SQL, Data Visualization, and Web Development services." />
//         <meta property="og:type" content="website" />
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:title" content="Givi AI - AI Solutions Platform" />
//         <meta name="twitter:description" content="Transform your business with cutting-edge AI technologies and expert consultation." />
//       </Helmet>
//
//       <div className="min-h-screen bg-background">
//         <Header />
//
//         <main>
//           {/* Hero Section with 3D Robot and Animated Visualizations */}
//           <HeroSection />
//
//           {/* AI Services Ecosystem Grid */}
// {/*           <ServicesGrid /> */}
//
//           {/* Client Success Stories and Metrics */}
// {/*           <ClientSuccess /> */}
//
//           {/* Newsletter Signup with AI Insights */}
// {/*           <NewsletterSignup /> */}
//         </main>
//
//         {/* Sticky Consultation CTA */}
//         <StickyConsultationCTA />
//       </div>
//     </>
//   );
// };
//
// export default Homepage;

import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
// CORRECTED IMPORT PATH:
import ServiceSelector from './components/ServiceSelector';
import StickyConsultationCTA from './components/StickyConsultationCTA';

// Mock data for AI services - now living in the Homepage component
const services = [
  {
    id: 'text-to-speech',
    name: 'Text-to-Speech',
    icon: 'Volume2',
    shortDescription: 'Convert written text into natural-sounding speech with a variety of voices and languages.',
    complexity: 'Easy',
    timeline: 'Real-time',
    demoAvailable: true,
  },
  {
    id: 'speech-to-text',
    name: 'Speech-to-Text',
    icon: 'Mic',
    shortDescription: 'Transcribe spoken language into written text accurately and efficiently.',
    complexity: 'Medium',
    timeline: '24h Delivery',
    demoAvailable: true,
  },
  {
    id: 'ai-chatbots',
    name: 'Intelligent Chatbots',
    icon: 'MessageCircle',
    shortDescription: 'Engage customers with smart, responsive, and 24/7 available AI-powered chatbots.',
    complexity: 'Hard',
    timeline: '2-4 Weeks',
    demoAvailable: false,
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    icon: 'BarChart2',
    shortDescription: 'Unlock insights from your data with advanced analytics and visualization dashboards.',
    complexity: 'Hard',
    timeline: '4-6 Weeks',
    demoAvailable: false,
  },
];


const HomepageAiSolutionsPlatform = () => {
  const navigate = useNavigate();

  const handleServiceSelect = (service) => {
    // Navigate to the demo page only if a demo is available
    if (service.demoAvailable) {
      navigate(`/demo/${service.id}`);
    } else {
      // For services without a demo, you could navigate to a contact or info page
      navigate('/contact-consultation-hub');
    }
  };

  return (
    <>
      <Helmet>
        <title>Givi AI Solutions</title>
        <meta name="description" content="Transform your business with cutting-edge AI technologies. From intelligent chatbots to advanced data analytics, Givi AI bridges complex AI capabilities with practical business solutions." />
        <meta name="keywords" content="AI solutions, artificial intelligence, chatbots, data analytics, machine learning, business transformation, AI consultancy" />
        <meta property="og:title" content="Givi AI - AI Solutions Tailored for Tomorrow" />
        <meta property="og:description" content="Premium AI solutions platform offering Text-to-Speech, Speech-to-Text, Chatbots, BigQuery & SQL, Data Visualization, and Web Development services." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Givi AI - AI Solutions Platform" />
        <meta name="twitter:description" content="Transform your business with cutting-edge AI technologies and expert consultation." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          {/* Hero Section with 3D Robot and Animated Visualizations */}
          <HeroSection />

          {/* AI Services Ecosystem Carousel */}
{/*           <ServiceSelector */}
{/*             services={services} */}
{/*             onServiceSelect={handleServiceSelect} */}
{/*           /> */}

        </main>

        {/* Sticky Consultation CTA */}
        <StickyConsultationCTA />
      </div>
    </>
  );
};

export default HomepageAiSolutionsPlatform;