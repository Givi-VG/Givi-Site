// import React from "react";
// import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
// import ScrollToTop from "components/ScrollToTop";
// import ErrorBoundary from "components/ErrorBoundary";
//
// import HomepageAiSolutionsPlatform from "pages/homepage-ai-solutions-platform";
// import ContactConsultationHub from "pages/contact-consultation-hub";
// import AiKnowledgeCenterBlogResources from "pages/ai-knowledge-center-blog-resources";
// import CompanyUniverseAboutTeam from "pages/company-universe-about-team";
// import AiServicesEcosystem from "pages/ai-services-ecosystem";
// import AIServiceDemo from "components/AIServiceDemo"; // Import the demo component
// import NotFound from "pages/NotFound";
//
// const Routes = () => {
//   return (
//     <BrowserRouter>
//       <ErrorBoundary>
//         <ScrollToTop />
//         <RouterRoutes>
//           {/* Define your routes here */}
//           <Route path="/" element={<HomepageAiSolutionsPlatform />} />
//           <Route path="/homepage-ai-solutions-platform" element={<HomepageAiSolutionsPlatform />} />
//           <Route path="/contact-consultation-hub" element={<ContactConsultationHub />} />
//           <Route path="/ai-knowledge-center-blog-resources" element={<AiKnowledgeCenterBlogResources />} />
//           <Route path="/company-universe-about-team" element={<CompanyUniverseAboutTeam />} />
//           <Route path="/ai-services-ecosystem" element={<AiServicesEcosystem />} />
//
//           {/* AI Service Demo Routes */}
//           <Route path="/demo/text-to-speech" element={<AIServiceDemo selectedService={{id: 'text-to-speech', name: 'Text-to-Speech'}} />} />
//           <Route path="/demo/speech-to-text" element={<AIServiceDemo selectedService={{id: 'speech-to-text', name: 'Speech-to-Text'}} />} />
//
//           <Route path="*" element={<NotFound />} />
//         </RouterRoutes>
//       </ErrorBoundary>
//     </BrowserRouter>
//   );
// };
//
// export default Routes;

import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

import HomepageAiSolutionsPlatform from "pages/homepage-ai-solutions-platform";
import ContactConsultationHub from "pages/contact-consultation-hub";
import AiKnowledgeCenterBlogResources from "pages/ai-knowledge-center-blog-resources";
import CompanyUniverseAboutTeam from "pages/company-universe-about-team";
import AiServicesEcosystem from "pages/ai-services-ecosystem";
import AIServiceDemo from "components/AIServiceDemo"; // Import the demo component
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your routes here */}
          <Route path="/" element={<HomepageAiSolutionsPlatform />} />
          <Route path="/homepage-ai-solutions-platform" element={<HomepageAiSolutionsPlatform />} />
          <Route path="/contact-consultation-hub" element={<ContactConsultationHub />} />
          <Route path="/ai-knowledge-center-blog-resources" element={<AiKnowledgeCenterBlogResources />} />
          <Route path="/company-universe-about-team" element={<CompanyUniverseAboutTeam />} />
          <Route path="/ai-services-ecosystem" element={<AiServicesEcosystem />} />

          {/* AI Service Demo Routes - Updated to be dynamic */}
          <Route path="/demo/:serviceId" element={<AIServiceDemo />} />
          {/* Fallback route for /demo which will default to text-to-speech */}
          <Route path="/demo" element={<AIServiceDemo />} />

          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
