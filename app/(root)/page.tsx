import AwardSection from "@/components/designs/AwardSection";
import Counter from "@/components/designs/Counter";
import Hero from "@/components/designs/Hero";
import ServiceCorousel from "@/components/designs/homecarousel/ServiceCarosel";
import TestimonialsCarousel from "@/components/designs/homecarousel/TesimonialsCorousel";
import IndustryExperienceCarousel from "@/components/designs/motion/FramerCarousel";
import Partner from "@/components/designs/Partner";
import TermsAndServiceSection from "@/components/designs/TermsAndSevices";
import React from "react";

const page = () => {
  return (
    <section>
      <section id="Home">
        <Hero />
      </section>
      <Counter />
      <IndustryExperienceCarousel />
      <Partner />
      <TestimonialsCarousel />
      <AwardSection />
      <ServiceCorousel />
      <TermsAndServiceSection/>
    </section>
  );
};

export default page;
