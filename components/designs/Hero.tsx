import { banner } from "@/public";
import Image from "next/image";
import AnimatedTextSection from "@/components/designs/AnimatedText";

const Hero: React.FC = () => {
  return (
    <div className="w-full">
      <div className="relative h-[calc(100vh-10px)] min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={banner}
            width={1000}
            height={800}
            className="object-cover min-h-screen object-center w-screen "
            alt="banner"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <AnimatedTextSection />
      </div>
    </div>
  );
};

export default Hero;
