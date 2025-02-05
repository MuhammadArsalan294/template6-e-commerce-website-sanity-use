import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Rooms() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Text Section */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              50+ Beautiful rooms inspiration
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              Our designer already made a lot of beautiful prototypes of rooms
              that inspire you.
            </p>
            <button className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-all">
              Explore More
            </button>
          </div>

          {/* Carousel Section */}
          <Carousel className="w-full max-w-md ">
            <CarouselContent>
              {[
                {
                  src: "/images/room1.png",
                  alt: "Room 1",
                  title: "Inner Peace",
                  description: "01 — Bed Room",
                },
                {
                  src: "/images/room2.png",
                  alt: "Room 2",
                  title: "Cozy Space",
                  description: "02 — Dining Room",
                },
              ].map((slide, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="p-4">
                      <div className="min-w-[300px] max-w-sm h-[420px] bg-white shadow-lg rounded-lg overflow-hidden">
                        <Image
                          src={slide.src}
                          alt={slide.alt}
                          width={300}
                          height={420}
                          className="w-full h-80 object-cover"
                        />
                        <div className="p-4 space-y-2">
                          <p className="text-gray-500 text-sm">
                            {slide.description}
                          </p>
                          <h3 className="text-xl font-semibold text-gray-800">
                            {slide.title}
                          </h3>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
