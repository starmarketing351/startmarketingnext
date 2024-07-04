import React from "react";
import { GraphicsDesignArray, GraphicsDesignContentInterface } from "@/public";
import Image from "next/image";

const GraphicsDesignSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        {GraphicsDesignArray.map(
          (item: GraphicsDesignContentInterface, index) => (
            <div key={index} className="mb-12">
              {item.section === "HeroSection" && (
                <div className="text-center mb-16">
                  <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                  <p className="text-lg text-gray-700 mb-6">{item.content}</p>
                  {item.image && (
                    <Image
                      src={item.image}
                      width={600}
                      height={800}
                      alt="home image"
                      className="mx-auto w-full max-w-md rounded-lg shadow-lg"
                    />
                  )}
                </div>
              )}
              {item.section !== "HeroSection" && (
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
                  {item.image && (
                    <div className="md:w-1/2 md:pr-6 mb-4 md:mb-0">
                      <Image 
                        src={item.image}
                        height={600}
                        width={600}
                        alt="itemImages"
                        className="w-full rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                  <div className="md:w-1/2">
                    {item.title && (
                      <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    )}
                    <p className="text-gray-700 mb-4">{item.content}</p>
                    {item.points && (
                      <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                        {item.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default GraphicsDesignSection;
