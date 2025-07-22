import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyStory from './components/CompanyStory';
import CompanyTimeline from './components/CompanyTimeline';
import TeamSection from './components/TeamSection';
import CompanyValues from './components/CompanyValues';
import CredibilitySection from './components/CredibilitySection';
import ContactInfo from './components/ContactInfo';

const CompanyUniverseAboutTeam = () => {
  return (
    <>
      <Helmet>
        <title>About Givi AI - Company Universe & Team | AI Solutions Platform</title>
        <meta 
          name="description" 
          content="Meet the AI experts behind Givi's human-centered approach to artificial intelligence. Learn about our mission, values, team, and commitment to making AI accessible for business transformation." 
        />
        <meta name="keywords" content="Givi AI team, AI experts, company about, AI consultants, machine learning specialists, AI transformation partners" />
        <meta property="og:title" content="About Givi AI - Company Universe & Team" />
        <meta property="og:description" content="Meet the AI experts behind Givi's human-centered approach to artificial intelligence." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/company-universe-about-team" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          <HeroSection />
          <CompanyStory />
          <CompanyTimeline />
          <TeamSection />
          <CompanyValues />
          <CredibilitySection />
          <ContactInfo />
        </main>

        {/* Footer */}
        <footer className="bg-card/50 border-t border-border py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold">G</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold text-gradient">Givi AI</div>
                    <div className="text-sm text-muted-foreground">AI Solutions Platform</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 max-w-md">
                  Empowering businesses to harness AI's transformative potential through 
                  human-centered design and innovative solutions.
                </p>
                <div className="text-sm text-muted-foreground">
                  © {new Date().getFullYear()} Givi AI. All rights reserved.
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>About Us</div>
                  <div>Our Team</div>
                  <div>Careers</div>
                  <div>Press</div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div>hello@givi.ai</div>
                  <div>++91 9751671018</div>
                  <div>San Francisco, CA</div>
                  <div>Schedule Demo</div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default CompanyUniverseAboutTeam;