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
    }),
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
      <main className="mt-8 flex flex-col items-center">
        <h1 className="font-major text-[128px]">GamesStore</h1>

        <div className="relative z-10 mb-[-20px] h-[45px] w-full overflow-hidden">
          <div className="bg-bg-primary absolute left-[-3%] h-full w-[105%] rounded-[50%]" />
        </div>

        <div className="flex w-full justify-center overflow-hidden">
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
                    className="basis-3/8 p-0 transition-transform duration-500 ease-out"
                  >
                    <div className="h-[280px] w-full overflow-hidden rounded-md shadow-md">
                      <img
                        src={src}
                        alt={`slide-${index}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="relative z-10 mt-[-20px] h-[45px] w-full overflow-hidden">
          <div className="bg-bg-primary absolute left-[-3%] h-full w-[105%] rounded-[50%]" />
        </div>
        <Link
          href="/navigation/games"
          className="group mt-3 flex items-center gap-2 font-semibold"
        >
          Explorar{" "}
          <Triangle
            size={16}
            className="rotate-90 fill-purple-200 text-purple-200 transition-transform duration-300 ease-in-out group-hover:rotate-180 group-hover:fill-purple-600 group-hover:text-purple-600"
          />
        </Link>
        <div className="mt-10 flex items-center gap-20">
          <Link
            href="/navigation/games"
            className="flex h-[150px] cursor-pointer flex-col items-center justify-center gap-3"
          >
            <Image
              src="/controller.png"
              width={84}
              height={112}
              alt="Controller icon"
              className="mt-5"
            />
            <span className="mt-auto text-xl font-semibold">Games</span>
          </Link>
          <Link
            href="/navigation/electronics"
            className="flex h-[150px] cursor-pointer flex-col items-center justify-center gap-3"
          >
            <div className="flex w-full gap-3">
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
            <span className="mt-auto text-xl font-semibold">Eletrônicos</span>
          </Link>
        </div>
      </main>
    </>
  );
}
