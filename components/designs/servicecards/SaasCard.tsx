import React from "react";
import { saasDevelopmentPlatformContent } from "@/public";
import Image from "next/image";
import saas1 from "@/public/serviceillustartion/sass/saas1.jpg";

const SaasCard: React.FC = () => {
  // Extract the Introduction section from starMarketingGraphicContent
  const introductionSection = saasDevelopmentPlatformContent.find(
    (section) => section.section === "Introduction"
  );

  return (
    <section className="bg-gray-100 py-12">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <div className="absolute inset-0 min-h-full min-w-full bg-black bg-opacity-30"></div>
        <Image
          src={saas1}
          className="min-h-full min-w-full object-cover object-center"
          alt="Service Header"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-8">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            {introductionSection?.section}
          </h1>
          <p className="text-xl max-w-2xl mb-8 animate-fade-in-delay">
            {introductionSection?.content}
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>

      {saasDevelopmentPlatformContent.map((section, index) => (
        <div key={index} className="mb-16">
          {section.section !== "Introduction" && (
            <>
              <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2 text-center">
                {section.section}
              </h2>
              {section.content && (
                <p className="text-gray-700 mb-6 leading-relaxed text-center">
                  {section.content}
                </p>
              )}
              {section.points && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.points.map((point, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-lg shadow-md"
                    >
                      <div className="flex items-center flex-col">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 font-bold text-lg">
                          {idx + 1}
                        </div>
                        <h4 className="text-lg text-center font-semibold text-gray-900">
                          {point.tag}
                        </h4>
                        <p className="text-gray-700 text-sm lg:text-base px-4 text-center">
                          {point.content}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </section>
  );
};

export default SaasCard;
