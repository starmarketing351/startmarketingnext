import { AboutUsContent, AboutUsContentInterface } from '@/public';
import React from 'react';


const AboutUsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {AboutUsContent.map((item: AboutUsContentInterface) => (
          <div key={item.section} className="mb-8">
            {item.title && (
              <h2 className="text-3xl font-bold text-gray-800 mb-4">{item.title}</h2>
            )}
            {item.content && <p className="text-lg text-gray-700 mb-6">{item.content}</p>}
            {item.points && (
              <ul className="list-disc list-inside text-lg text-gray-700 mb-6">
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
