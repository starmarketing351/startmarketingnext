import React from 'react';
import { FaStar, FaRocket, FaLightbulb } from 'react-icons/fa';

const AboutUsSection = () => {
  return (
    <section className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-yellow-300 mb-4">About Us</h1>
        <p className="text-2xl mb-12">
          Accelerating your digital experience with path-breaking innovations
        </p>
        
        <div className="bg-white text-blue-900 p-8 rounded-lg shadow-lg">
          <p className="mb-6 text-lg">
            At Star Marketing, we believe that every brand has the potential to shine brilliantly in its own unique way. Founded on the principles of innovation, creativity, and dedication, we ve embarked on a mission to help businesses of all sizes reach for the stars and beyond.
          </p>
          <p className="mb-6 text-lg">
            We are redefining the path of your growth with high-quality craftsmanship by leveraging disruptive technologies.
          </p>
          
          <div className="flex flex-wrap justify-around mt-8">
            <div className="flex flex-col items-center mb-4">
              <FaStar className="text-4xl text-yellow-400 mb-2" />
              <span className="text-sm font-semibold">Innovation</span>
            </div>
            <div className="flex flex-col items-center mb-4">
              <FaLightbulb className="text-4xl text-yellow-400 mb-2" />
              <span className="text-sm font-semibold">Creativity</span>
            </div>
            <div className="flex flex-col items-center mb-4">
              <FaRocket className="text-4xl text-yellow-400 mb-2" />
              <span className="text-sm font-semibold">Dedication</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;