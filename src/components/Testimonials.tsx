import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Johnson',
    location: 'Chicago, IL',
    quote: 'Fleet Solar exceeded my expectations. The installation was quick and professional, and my energy bills have been cut in half!',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    location: 'Dallas, TX',
    quote: 'I was hesitant about going solar, but Fleet made the process so easy. Their team answered all my questions and provided excellent service from start to finish.',
    rating: 5,
  },
  {
    name: 'David Rodriguez',
    location: 'Chicago, IL',
    quote: 'The ROI on my solar installation has been incredible. Fleet Solar designed a system that perfectly matches my energy needs.',
    rating: 4,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-fleet-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with Fleet Solar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="ml-4">
                  <p className="text-fleet-dark font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;