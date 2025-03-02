import React from 'react';
import { ClipboardCheck, Ruler, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Consultation',
    description: 'We start with a free consultation to understand your energy needs and goals. Our experts will assess your property and provide recommendations.',
    icon: <ClipboardCheck className="h-12 w-12 text-white" />,
  },
  {
    title: 'Design & Planning',
    description: 'Our engineers design a custom solar system for your property. We handle all permits and paperwork to ensure a smooth process.',
    icon: <Ruler className="h-12 w-12 text-white" />,
  },
  {
    title: 'Installation',
    description: 'Our certified technicians install your solar panels with minimal disruption. Most residential installations are completed in just 1-2 days.',
    icon: <Wrench className="h-12 w-12 text-white" />,
  },
  {
    title: 'Activation & Monitoring',
    description: 'Once installed, we activate your system and provide monitoring tools so you can track your energy production in real-time.',
    icon: <CheckCircle className="h-12 w-12 text-white" />,
  },
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Simple Process</h2>
          <p className="section-subtitle">
            We make going solar easy with our straightforward, hassle-free installation process.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-fleet-blue"></div>
            
            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
              {steps.map((step, index) => (
                <div key={index} className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                  <div className={`md:col-span-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last'}`}>
                    <div className="mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold text-fleet-dark mb-3">
                        {index + 1}. {step.title}
                      </h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot and icon */}
                  <div className="flex md:justify-center">
                    <div className="relative flex items-center justify-center">
                      <div className="hidden md:block absolute z-0 w-20 h-20 rounded-full bg-fleet-blue"></div>
                      <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-fleet-blue shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;