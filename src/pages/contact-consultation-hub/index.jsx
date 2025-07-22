import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactHero from './components/ContactHero';
import ContactMethods from './components/ContactMethods';
import ConsultationForm from './components/ConsultationForm';
import ConsultationFAQ from './components/ConsultationFAQ';
import OfficeLocations from './components/OfficeLocations';
import TrustSignals from './components/TrustSignals';

const ContactConsultationHub = () => {
  return (
    <>
      <Helmet>
        <title>Contact & Consultation Hub - Givi AI | AI Solutions & Expert Consultation</title>
        <meta
          name="description"
          content="Connect with Givi AI's expert team for AI consultation and project planning. Multiple contact options, transparent pricing, and 24-hour response guarantee. Start your AI transformation today."
        />
        <meta name="keywords" content="AI consultation, AI experts, contact Givi AI, AI project planning, AI implementation, artificial intelligence consulting" />
        <meta property="og:title" content="Contact & Consultation Hub - Givi AI" />
        <meta property="og:description" content="Connect with AI experts for consultation and project planning. Multiple contact options with 24-hour response guarantee." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-consultation-hub" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <ContactHero />
          <ContactMethods />
{/*           <div id="consultation-form"> */}
{/*             <ConsultationForm /> */}
{/*           </div> */}
{/*           <TrustSignals /> */}
{/*           <OfficeLocations /> */}
{/*           <ConsultationFAQ /> */}
        </main>
      </div>
    </>
  );
};

export default ContactConsultationHub;
