import { saasDevelopmentPlatformContent } from '@/public';
import React from 'react';


const SaasDevelopmentPlatformContent: React.FC = () => {
  return (
    <div className="py-8">
      {saasDevelopmentPlatformContent.map((section, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{section.section}</h2>
          {section.content && <p className="mb-4">{section.content}</p>}
          {section.points && (
            <ul className="list-disc pl-6">
              {section.points.map((point, idx) => (
                <li key={idx} className="mb-2">
                  <span className="font-semibold">{point.tag}: </span>
                  {point.content}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default SaasDevelopmentPlatformContent;
