"use client";

import { ServiceInterface, industryExperience } from "@/public";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const IndustryExp: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Industry Experience</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With years of expertise across various sectors, we bring unparalleled insights and solutions to every project. Explore our diverse industry experience below.
          </p>
        </motion.div>

        <div className="space-y-16">
          {industryExperience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              <div className="md:w-1/2">
                <Image
                  src={item.image}
                  height={400}
                  width={500}
                  alt={item.title}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryExp;