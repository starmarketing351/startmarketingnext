import { AwardsContent, ServiceInterface } from "@/public";
import Image from "next/image";
import React from "react";

export default function AwardSection() {
  return (
    <section className="bg-white py-16 w-screen   ">
      <div className="max-w-7xl w-full flex justify-center mx-auto items-center flex-col">
      <div>
        <h1 className="text-xl text-center font-semibold py-6">Our Achivements Tells About us</h1>
      </div>
      <div
        id="achievements"
        className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {AwardsContent.map(
          ({ description, id, image, title }: ServiceInterface) => {
            return (
              <div key={id}>
                <div
                  key={id}
                  className="rounded-lg overflow-hidden text-center"
                >
                  <div className="p-2">
                    <div className="lg:size-20 size-14 mx-auto mb-4">
                      <Image src={image} width={80} height={80} alt={title} />
                    </div>
                    <h2 className="lg:text-xl text-base font-semibold mb-2">
                      {title}
                    </h2>
                    <p className="text-gray-600 text-xs lg:text-base">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      </div>
    </section>
  );
}
