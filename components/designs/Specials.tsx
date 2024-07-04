// SpecialityAbout.tsx
import { SpecialityAbout, sections } from '@/public';
import React from 'react';


const SpecialityAboutComponent: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto w-screen max-w-7xl px-4">
        {SpecialityAbout.map((content: SpecialityAbout, index: number) => (
          <div key={index} className="mb-12">
            <h1 className="text-3xl font-bold text-center mb-4">{content.heading1}</h1>
            <h2 className="text-2xl font-semibold text-center mb-8">{content.heading2}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {content.sections.map((section: sections, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">{section.tag}</h3>
                  <p className="text-gray-700">{section.para}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialityAboutComponent;
