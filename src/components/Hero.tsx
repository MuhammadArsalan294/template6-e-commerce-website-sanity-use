import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative w-full h-[812px]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-[-1]">
        <Image
          className="w-full h-full object-cover"
          src="/images/hero.png"
          alt="Hero Section Image"
          layout="fill"
          priority
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex justify-center items-center bg-black/30 px-4">
        <div className="bg-[#FFF3E3] p-6 sm:p-8 md:p-12 rounded-md shadow-lg w-full max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[30%] text-left lg:ml-[500px] mt-44 ">
          {/* Title Section */}
          <p className="text-black text-xs sm:text-sm md:text-base font-medium mb-3 sm:mb-4">
            New Arrival
          </p>
          <h1 className="font-sans font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight text-[#B88E2F] mb-4 sm:mb-6">
            Discover Our New Collection
          </h1>
          {/* Description */}
          <p className="font-sans font-medium text-sm sm:text-base leading-relaxed text-black mb-4 sm:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>
          <Button className="bg-[#B88E2F] text-white px-4 py-2 sm:px-6 sm:py-3 mt-4 sm:mt-6">
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
}