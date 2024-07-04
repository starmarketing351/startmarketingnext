import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { industryExperience, industryExperienceInterface } from "@/public";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function IndustryExperienceSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Industry Experience</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {industryExperience.map(
            ({ id, image, title, description }: industryExperienceInterface) => (
              <CarouselItem key={id} className="sm:basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                <Card>
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <Image
                      src={image}
                      alt={title}
                      width={200}
                      height={200}
                      className="mb-4 rounded-lg object-cover"
                      placeholder="blur"
                   
                    />
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-center">{description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <div className="flex justify-center mt-4 gap-2">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
      <div className="flex justify-center mt-8">
        <Button className="flex items-center gap-2">
          Learn More <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  );
}

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

function Card({ children, className, ...props }: CardProps) {
  return (
    <section
      className={`bg-white rounded-lg shadow-md ${className || ""}`}
      {...props}
    >
      {children}
    </section>
  );
}

function CardContent({ children, className, ...props }: CardProps) {
  return (
    <div className={`p-4 ${className || ""}`} {...props}>
      {children}
    </div>
  );
}