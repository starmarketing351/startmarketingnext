"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { bannerData } from "@/public";
import Link from "next/link";

interface Service {
  title: string;
  icon: IconType;
}

interface AnimatedTextProps {
  services: Service[];
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ services }) => {
  const [currentService, setCurrentService] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = services[currentService].title;
      const typingSpeed = 100; // Slower typing speed
      const deletingSpeed = 50; // Slower deleting speed
      const pauseDuration = 2000; // Longer pause at the end of typing and before deleting

      if (!isDeleting && text === fullText) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && text === "") {
        // Pause before moving to the next service
        setTimeout(() => {
          setIsDeleting(false);
          setCurrentService((prev) => (prev + 1) % services.length);
        }, pauseDuration / 2);
      } else {
        setTimeout(
          () => {
            setText(
              fullText.substring(
                0,
                isDeleting ? text.length - 1 : text.length + 1
              )
            );
          },
          isDeleting ? deletingSpeed : typingSpeed
        );
      }
    };

    handleTyping();
  }, [text, isDeleting, currentService, services]);

  const Icon = services[currentService].icon;

  return (
    <div className="flex items-center justify-center space-x-4">
      <motion.div
        key={currentService}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-2xl sm:text-5xl lg:text-6xl" />
      </motion.div>
      <motion.span
        className="text-xl sm:text-4xl lg:text-5xl font-bold"
        key={text}
      >
        {text}
        <motion.span
          className="inline-block"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      </motion.span>
    </div>
  );
};

const HeroBannerNavigation = () => {
  return (
    <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
      <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 ease-in-out">
        See Work
      </button>
      <Link
        href="/contact"
        className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-transparent hover:text-white hover:border-white hover:border-2 transition duration-300 ease-in-out"
      >
        Contact Us
      </Link>
    </div>
  );
};

const AnimatedTextSection = () => {
  return (
    <motion.div
      className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }} // Increased from 1 to 1.5
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }} // Increased delay and duration
        >
          {bannerData.header}
        </motion.h1>
        <AnimatedText services={bannerData.services} />
        <motion.h3
          className="text-xl sm:text-2xl lg:text-3xl mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }} // Increased delay and duration
        >
          {bannerData.para}
        </motion.h3>
      </div>
      <motion.div
        className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }} // Increased delay and duration
      >
        <HeroBannerNavigation />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedTextSection;
