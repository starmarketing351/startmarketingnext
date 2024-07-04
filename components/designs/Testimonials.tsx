// Testimonials.tsx
import { ServiceInterface, testimonials } from '@/public';
import Image from 'next/image';
import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';


const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial: ServiceInterface) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-gray-400 text-4xl mb-4" />
              <Image
                src={testimonial.image}
                alt={testimonial.title}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{testimonial.title}</h3>
              <p className="text-gray-700">{testimonial.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
