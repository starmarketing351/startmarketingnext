import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials, ServiceInterface, services } from "@/public";
import { FaQuoteLeft } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServiceCorousel() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          We Provide Modern Service Solutions
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((testimonial: ServiceInterface) => (
              <CarouselItem
                key={testimonial.id}
                className="sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className=" border-2 border-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
                  <div className="min-h-60 max-h-60 h-60 w-full overflow-hidden my-4 flex justify-center items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.title}
                      width={800}
                      height={600}
                      className="h-auto w-full  object-cover object-center"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {testimonial.title}
                  </h3>
                  <p className="text-gray-700 px-4">
                    {testimonial.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -bottom-24 flex justify-center items-center w-full h-20">
            <div className="flex justify-center gap-2 max-w-40">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
        </Carousel>
        <div className="flex justify-center mt-28">
          <Button className="flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
