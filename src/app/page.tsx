"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect, useCallback, useRef } from "react";

import { Triangle } from "lucide-react";

import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

const images = ["/image-4.png", "/image-2.png", "/image-1.png", "/image-3.png"];

export default function Home() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [, setSelectedIndex] = useState(0);

  const autoplay = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  const onSelect = useCallback(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    api.on("select", onSelect);
    onSelect();
  }, [api, onSelect]);

  return (
    <>
      <main className="flex flex-col mt-8 items-center">
        <h1 className="font-major text-[128px]">GamesStore</h1>

        <div className="relative w-full h-[45px] overflow-hidden mb-[-20px] z-10">
          <div className="absolute w-[105%] left-[-3%] h-full bg-bg-primary rounded-[50%]" />
        </div>

        <div className="w-full flex justify-center overflow-hidden">
          <Carousel
            opts={{ dragFree: true }}
            setApi={setApi}
            plugins={[autoplay.current]}
          >
            <CarouselContent className="flex gap-3">
              {images.map((src, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="basis-3/8 transition-transform duration-500 ease-out p-0"
                  >
                    <div className="w-full h-[280px] overflow-hidden rounded-md shadow-md">
                      <img
                        src={src}
                        alt={`slide-${index}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="relative w-full h-[45px] overflow-hidden mt-[-20px] z-10">
          <div className="absolute w-[105%] left-[-3%] h-full bg-bg-primary rounded-[50%]" />
        </div>
        <Link
          href="#"
          className="group font-semibold mt-3 flex items-center gap-2 "
        >
          Explorar{" "}
          <Triangle
            size={16}
            className="rotate-90 text-purple-200 fill-purple-200 group-hover:text-purple-600 transition-transform duration-300 ease-in-out group-hover:fill-purple-600 group-hover:rotate-180"
          />
        </Link>
        <div className="mt-10 flex items-center  gap-20">
          <button className="flex flex-col items-center h-[150px] justify-center gap-3 cursor-pointer">
            <Image
              src="/controller.png"
              width={84}
              height={112}
              alt="Controller icon"
              className="mt-5"
            />
            <span className="font-semibold mt-auto text-xl">Games</span>
          </button>
          <button className="flex flex-col items-center h-[150px] justify-center gap-3 cursor-pointer">
            <div className="flex gap-3 w-full">
              <Image
                src="/headphone.png"
                width={80}
                height={80}
                alt="headphone icon"
              />
              <Image
                src="/console.png"
                width={50}
                height={50}
                alt="Console icon"
              />
            </div>
            <span className="font-semibold mt-auto text-xl">Eletrônicos</span>
          </button>
        </div>
      </main>
    </>
  );
}
