import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    services: [],
    projectTimeline: '',
    budget: '',
    projectDescription: '',
    hasExistingAI: false,
    preferredContact: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const serviceOptions = [
    { value: 'text-to-speech', label: 'Text-to-Speech Solutions' },
    { value: 'speech-to-text', label: 'Speech-to-Text Processing' },
    { value: 'chatbots', label: 'AI Chatbots & Virtual Assistants' },
    { value: 'bigquery-sql', label: 'BigQuery & SQL Analytics' },
    { value: 'google-sheets', label: 'Google Sheets & App Script' },
    { value: 'data-visualization', label: 'Data Visualization & Dashboards' },
    { value: 'web-development', label: 'AI-Powered Web Development' },
    { value: 'custom-ai', label: 'Custom AI Solutions' }
  ];

  const companySizeOptions = [
    { value: 'startup', label: 'Startup (1-10 employees)' },
    { value: 'small', label: 'Small Business (11-50 employees)' },
    { value: 'medium', label: 'Medium Business (51-200 employees)' },
    { value: 'large', label: 'Large Business (201-1000 employees)' },
    { value: 'enterprise', label: 'Enterprise (1000+ employees)' }
  ];

  const timelineOptions = [
    { value: 'immediate', label: 'Immediate (Within 1 month)' },
    { value: 'short', label: 'Short-term (1-3 months)' },
    { value: 'medium', label: 'Medium-term (3-6 months)' },
    { value: 'long', label: 'Long-term (6+ months)' },
    { value: 'exploring', label: 'Just exploring options' }
  ];

  const budgetOptions = [
    { value: 'under-10k', label: 'Under $10,000' },
    { value: '10k-50k', label: '$10,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k-500k', label: '$100,000 - $500,000' },
    { value: 'over-500k', label: 'Over $500,000' },
    { value: 'discuss', label: 'Prefer to discuss' }
  ];

  const contactPreferenceOptions = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'video', label: 'Video Conference' },
    { value: 'in-person', label: 'In-Person Meeting' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (formData.services.length === 0) newErrors.services = 'Please select at least one service';
    if (!formData.projectTimeline) newErrors.projectTimeline = 'Project timeline is required';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Project description is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Mock API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock success
      alert(`Thank you ${formData.firstName}! Your consultation request has been submitted. We'll contact you within 24 hours via ${formData.preferredContact || 'email'}.`);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        role: '',
        services: [],
        projectTimeline: '',
        budget: '',
        projectDescription: '',
        hasExistingAI: false,
        preferredContact: '',
        newsletter: false
      });
      setShowAdvanced(false);
      
    } catch (error) {
      alert('There was an error submitting your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Start Your{' '}
            <span className="text-gradient">AI Consultation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tell us about your project and we'll provide a customized AI solution proposal within 24 hours.
          </p>
        </div>

        {/* Form */}
        <div className="surface-elevated p-8 rounded-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                error={errors.firstName}
                required
              />
              <Input
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                error={errors.lastName}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                error={errors.email}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="++91 9751671018"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                description="Optional - for urgent follow-ups"
              />
            </div>

            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Company Name"
                type="text"
                placeholder="Your company name"
                value={formData.company}
                onChange={(e) => handleInputChange('company', e.target.value)}
                error={errors.company}
                required
              />
              <Input
                label="Your Role"
                type="text"
                placeholder="e.g., CTO, IT Director, Founder"
                value={formData.role}
                onChange={(e) => handleInputChange('role', e.target.value)}
                description="Optional - helps us tailor our approach"
              />
            </div>

            {/* Project Information */}
            <Select
              label="Services of Interest"
              placeholder="Select AI services you're interested in"
              options={serviceOptions}
              value={formData.services}
              onChange={(value) => handleInputChange('services', value)}
              error={errors.services}
              multiple
              searchable
              required
              description="Select all that apply - we'll customize our proposal accordingly"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Project Timeline"
                placeholder="When do you need this implemented?"
                options={timelineOptions}
                value={formData.projectTimeline}
                onChange={(value) => handleInputChange('projectTimeline', value)}
                error={errors.projectTimeline}
                required
              />
              <Select
                label="Budget Range"
                placeholder="Select your budget range"
                options={budgetOptions}
                value={formData.budget}
                onChange={(value) => handleInputChange('budget', value)}
                description="Optional - helps us recommend appropriate solutions"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-medium text-foreground">
                Project Description *
              </label>
              <textarea
                className="w-full h-32 px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Describe your AI project, current challenges, and desired outcomes. The more details you provide, the better we can tailor our proposal."
                value={formData.projectDescription}
                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                required
              />
              {errors.projectDescription && (
                <p className="text-sm text-destructive">{errors.projectDescription}</p>
              )}
            </div>

            {/* Advanced Options Toggle */}
            <div className="border-t border-border pt-6">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Icon name={showAdvanced ? "ChevronUp" : "ChevronDown"} size={20} />
                <span className="font-medium">
                  {showAdvanced ? 'Hide' : 'Show'} Advanced Options
                </span>
              </button>
            </div>

            {/* Advanced Options */}
            {showAdvanced && (
              <div className="space-y-6 pt-4">
                <Checkbox
                  label="We already have AI implementations in place"
                  description="Check this if your company currently uses AI solutions"
                  checked={formData.hasExistingAI}
                  onChange={(e) => handleInputChange('hasExistingAI', e.target.checked)}
                />

                <Select
                  label="Preferred Contact Method"
                  placeholder="How would you like us to contact you?"
                  options={contactPreferenceOptions}
                  value={formData.preferredContact}
                  onChange={(value) => handleInputChange('preferredContact', value)}
                  description="We'll use this method for our initial consultation"
                />

                <Checkbox
                  label="Subscribe to AI insights newsletter"
                  description="Get weekly updates on AI trends, case studies, and implementation tips"
                  checked={formData.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                />
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <Button
                type="submit"
                variant="default"
                size="lg"
                fullWidth
                loading={isSubmitting}
                iconName="Send"
                iconPosition="right"
                className="btn-primary"
              >
                {isSubmitting ? 'Submitting Request...' : 'Submit Consultation Request'}
              </Button>
            </div>

            {/* Privacy Notice */}
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">
                By submitting this form, you agree to our{' '}
                <a href="#" className="text-primary hover:text-primary/80 underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary hover:text-primary/80 underline">
                  Terms of Service
                </a>
                . We'll never share your information with third parties.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;