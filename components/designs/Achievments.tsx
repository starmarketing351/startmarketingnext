import { achievementContent } from "@/public";
import Image from "next/image";
import React from "react";

const Achievments = () => {
  return (
    <div
      id="achievements"
      className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {achievementContent.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden text-center"
        >
          <div className="p-6">
            <div className="w-20 h-20 mx-auto mb-4">
              <Image src={item.image} width={80} height={80} alt={item.title} />
            </div>
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievments;
