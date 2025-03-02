import React from 'react';
import { Home, Building2, Factory, Zap, Shield, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Residential Solar',
    description: 'Custom solar solutions for homes of all sizes. Reduce your electricity bills and increase your property value.',
    icon: <Home className="h-10 w-10 text-fleet-blue" />,
  },
  {
    title: 'Commercial Solar',
    description: 'Scalable solar systems for businesses. Lower operating costs and demonstrate your commitment to sustainability.',
    icon: <Building2 className="h-10 w-10 text-fleet-blue" />,
  },
  {
    title: 'Industrial Solar',
    description: 'High-capacity solar installations for industrial facilities. Maximize energy independence and reduce carbon emissions.',
    icon: <Factory className="h-10 w-10 text-fleet-blue" />,
  },
  {
    title: 'Energy Storage',
    description: 'Battery solutions to store excess solar energy. Ensure power availability even during grid outages.',
    icon: <Zap className="h-10 w-10 text-fleet-blue" />,
  },
  {
    title: 'Maintenance & Monitoring',
    description: 'Regular maintenance and real-time monitoring services. Keep your solar system operating at peak efficiency.',
    icon: <Shield className="h-10 w-10 text-fleet-blue" />,
  },
  {
    title: 'Energy Audits',
    description: 'Comprehensive energy usage analysis. Identify opportunities for improved efficiency and savings.',
    icon: <BarChart3 className="h-10 w-10 text-fleet-blue" />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Solar Services</h2>
          <p className="section-subtitle">
            Fleet Solar offers a comprehensive range of solar energy solutions tailored to your specific needs.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-fleet-light rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-white text-white mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-fleet-dark mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;