import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0])); // First item open by default

  const faqData = [
    {
      id: 0,
      question: "What happens during the initial consultation?",
      answer: `Our initial consultation is a comprehensive 30-60 minute session where we:\n\n• Understand your business objectives and current challenges\n• Assess your existing technology infrastructure\n• Identify specific AI opportunities within your organization\n• Discuss project scope, timeline, and budget considerations\n• Provide preliminary recommendations and next steps\n\nThis consultation is completely free and comes with no obligations. We'll also provide you with a detailed follow-up summary and initial project roadmap.`
    },
    {
      id: 1,
      question: "How long does it take to get a project proposal?",
      answer: `After our initial consultation, you'll receive a detailed project proposal within 3-5 business days. The proposal includes:\n\n• Technical implementation plan\n• Project timeline and milestones\n• Resource allocation and team structure\n• Detailed cost breakdown\n• Risk assessment and mitigation strategies\n• Success metrics and KPIs\n\nFor urgent projects, we can provide expedited proposals within 24-48 hours.`
    },
    {
      id: 2,
      question: "What are your typical project timelines?",
      answer: `Project timelines vary based on complexity and scope:\n\n• Simple AI integrations: 2-4 weeks\n• Custom chatbots and automation: 4-8 weeks\n• Data analytics and visualization: 6-10 weeks\n• Complex AI solutions: 3-6 months\n• Enterprise-wide implementations: 6-12 months\n\nWe always provide realistic timelines and keep you updated throughout the development process with regular milestone reviews.`
    },
    {
      id: 3,
      question: "How do you structure your pricing?",
      answer: `We offer flexible pricing models to suit different business needs:\n\n• Fixed-price projects: Best for well-defined scope\n• Time and materials: Ideal for evolving requirements\n• Retainer agreements: Perfect for ongoing AI support\n• Revenue sharing: For innovative partnerships\n\nAll pricing is transparent with no hidden fees. We provide detailed cost breakdowns and offer payment plans for larger projects.`
    },
    {
      id: 4,
      question: "Do you provide ongoing support after implementation?",
      answer: `Yes, we offer comprehensive post-implementation support:\n\n• 30-day warranty on all deliverables\n• Optional maintenance and support contracts\n• Performance monitoring and optimization\n• User training and documentation\n• Regular system updates and improvements\n• 24/7 technical support for critical systems\n\nOur goal is to ensure your AI solutions continue delivering value long after implementation.`
    },
    {
      id: 5,
      question: "What industries do you specialize in?",
      answer: `We have deep expertise across multiple industries:\n\n• Healthcare and Medical Technology\n• Financial Services and FinTech\n• E-commerce and Retail\n• Manufacturing and Supply Chain\n• Education and EdTech\n• Real Estate and PropTech\n• Professional Services\n• Government and Public Sector\n\nOur team adapts AI solutions to meet specific industry requirements and compliance standards.`
    },
    {
      id: 6,
      question: "Can you work with our existing technology stack?",
      answer: `Absolutely! We're technology-agnostic and work with:\n\n• Cloud platforms: AWS, Google Cloud, Azure\n• Databases: SQL, NoSQL, BigQuery, MongoDB\n• Programming languages: Python, JavaScript, Java, .NET\n• Frameworks: React, Node.js, Django, Flask\n• AI/ML tools: TensorFlow, PyTorch, OpenAI, Hugging Face\n• Integration APIs and microservices\n\nWe conduct a thorough technical assessment to ensure seamless integration with your current systems.`
    },
    {
      id: 7,
      question: "How do you ensure data security and privacy?",
      answer: `Data security is our top priority:\n\n• SOC 2 Type II compliance\n• GDPR and CCPA compliance\n• End-to-end encryption for all data\n• Secure cloud infrastructure\n• Regular security audits and penetration testing\n• Strict access controls and authentication\n• Data anonymization and pseudonymization\n• Comprehensive privacy policies\n\nWe can also work within your existing security frameworks and compliance requirements.`
    }
  ];

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="py-20 bg-card/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Consultation{' '}
            <span className="text-gradient">FAQ</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our consultation process, project timelines, and implementation approach.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="surface-elevated rounded-xl overflow-hidden transition-smooth hover-lift"
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-muted/10 transition-smooth"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {item.question}
                </h3>
                <Icon
                  name={openItems.has(item.id) ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className={`text-muted-foreground transition-smooth flex-shrink-0 ${
                    openItems.has(item.id) ? 'text-primary' : ''
                  }`}
                />
              </button>
              
              <div
                className={`transition-smooth overflow-hidden ${
                  openItems.has(item.id) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6">
                  <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <div className="surface-elevated p-8 rounded-xl">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
              <Icon name="HelpCircle" size={24} className="text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still Have Questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our team is here to help with any specific questions about your AI project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@givi.ai"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-medium"
              >
                <Icon name="Mail" size={18} className="mr-2" />
                Email Us
              </a>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center justify-center px-6 py-3 border border-border text-foreground rounded-lg hover:bg-muted/50 transition-smooth font-medium"
              >
                <Icon name="Phone" size={18} className="mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationFAQ;