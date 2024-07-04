// TermsOfService.tsx
import { TermsContent, termsOfServiceContent } from '@/public';
import React from 'react';

import { FaExclamationCircle, FaLink } from 'react-icons/fa';

const TermsOfService: React.FC = () => {
  return (
    <div className="container  max-w-7xl px-4 py-8">
      {termsOfServiceContent.map((section: TermsContent, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <FaExclamationCircle className="mr-2 text-gray-700" />
            {section.section}
          </h2>
          <p className="mb-4">{section.content}</p>
          {section.points && (
            <ul className="list-disc list-inside mb-4">
              {section.points.map((point, idx) => (
                <li key={idx} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
          )}
          {section.note && (
            <p className="text-red-500 font-semibold flex items-center">
              <FaLink className="mr-2" />
              {section.note}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TermsOfService;
