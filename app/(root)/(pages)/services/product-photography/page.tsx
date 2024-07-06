import React from "react";
import {
  ProductPhotographyArray,
  ProductPhotographyContentInterface,
  services,
} from "@/public";
import Image from "next/image";
import HeroBanner from "@/components/designs/HeroBanner";

const ProductPhotographySection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
     <HeroBanner
        imageSrc={services[5].image}
        buttonText="Get Started"
        heroHeading={services[5].title}
        heroPara={services[5].description}
        path="/contact"
      />
      <div className="container mx-auto max-w-7xl px-4">
        {ProductPhotographyArray.map(
          (item: ProductPhotographyContentInterface, index) => (
            <div key={index} className="mb-12">
              {item.section === "HeroSection" && (
                <div className="text-center mb-16">
                  <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                  <p className="text-lg text-gray-700 mb-6">{item.content}</p>
                  {item.image && (
                    <div className="flex justify-center">
                      <Image
                        src={item.image}
                        width={400}
                        height={500}
                        alt="home"
                        className="rounded-lg shadow-lg"
                      />
                    </div>
                  )}
                </div>
              )}
              {item.section !== "HeroSection" && (
                <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row">
                  {item.image && (
                   <div>
                    
                   </div>
                  )}
                  <div className="md:w-1/2">
                    {item.title && (
                      <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
                    )}
                    <p className="text-gray-700 mb-4">{item.content}</p>
                    {item.points && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {item.points.map((point, idx) => (
                          <Image
                            key={idx}
                            src={point}
                            width={400}
                            height={600}
                            alt={`Gallery image ${idx + 1}`}
                            className="rounded-lg shadow-lg"
                          />
                        ))}
                      </div>
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

export default ProductPhotographySection;
