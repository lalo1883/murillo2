import React from 'react';
import { DollarSign, Leaf, Home, Clock, Award, Lightbulb } from 'lucide-react';

const benefits = [
  {
    title: 'Save Money',
    description: 'Reduce or eliminate your electricity bills with solar power. Most customers see ROI within 5-7 years.',
    icon: <DollarSign className="h-8 w-8 text-fleet-blue" />,
  },
  {
    title: 'Eco-Friendly',
    description: 'Reduce your carbon footprint and help combat climate change with clean, renewable energy.',
    icon: <Leaf className="h-8 w-8 text-fleet-blue" />,
  },
  {
    title: 'Increase Home Value',
    description: 'Solar installations can increase your property value by up to 4.1% according to recent studies.',
    icon: <Home className="h-8 w-8 text-fleet-blue" />,
  },
  {
    title: 'Energy Independence',
    description: 'Protect yourself from rising utility costs and power outages with your own energy source.',
    icon: <Lightbulb className="h-8 w-8 text-fleet-blue" />,
  },
  {
    title: 'Tax Incentives',
    description: 'Take advantage of federal tax credits, state incentives, and local rebates for solar installation.',
    icon: <Award className="h-8 w-8 text-fleet-blue" />,
  },
  {
    title: 'Long-Term Investment',
    description: 'Solar panels typically last 25-30 years with minimal maintenance required.',
    icon: <Clock className="h-8 w-8 text-fleet-blue" />,
  },
];

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-fleet-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Benefits of Going Solar</h2>
          <p className="section-subtitle">
            Investing in solar energy offers numerous advantages for your home, business, and the environment.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 p-3 rounded-full bg-fleet-light">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-fleet-dark">{benefit.title}</h3>
              </div>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;