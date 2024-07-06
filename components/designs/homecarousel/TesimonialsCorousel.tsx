import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { testimonials, ServiceInterface } from "@/public";
import { FaQuoteLeft } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TestimonialsCarousel() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Testimonials</h2>
          <p className="text-lg mt-2">
            See what our clients have to say about us.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: false,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial: ServiceInterface) => (
              <CarouselItem
                key={testimonial.id}
                className="sm:basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className=" border-2 border-black p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full">
                  <FaQuoteLeft className="text-gray-400 text-4xl mb-4" />
                  <Image
                    src={testimonial.image}
                    alt={testimonial.title}
                    width={96}
                    height={96}
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
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
        <Button asChild className="flex items-center gap-2">
          <Link href="/about" className="flex items-center gap-2">
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </Button>
        </div>
      </div>
    </section>
  );
}
