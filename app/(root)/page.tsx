import Counter from "@/components/designs/Counter";
import Hero from "@/components/designs/Hero";
import IndustryExp from "@/components/designs/IndustryExp";
import Partner from "@/components/designs/Partner";
import Testimonials from "@/components/designs/Testimonials";
import React from "react";

const page = () => {
  return (
    <section>
      <section id="Home">
        <Hero />
      </section>
      <Counter />
      <IndustryExp />
      <Partner />
      <Testimonials />
    </section>
  );
};

export default page;
