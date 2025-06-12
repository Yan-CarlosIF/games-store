"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect, useCallback, useRef } from "react";

import {
  AlignJustify,
  CircleUserRound,
  Heart,
  Search,
  ShoppingCart,
  Triangle,
} from "lucide-react";

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
      <header className="bg-purple-200 h-16 flex items-center px-12">
        <button className="cursor-pointer">
          <AlignJustify width={28} height={28} />
        </button>

        <div className="flex items-center gap-4 ml-auto">
          <button className="cursor-pointer">
            <Search width={28} height={28} />
          </button>
          <button className="cursor-pointer">
            <CircleUserRound width={28} height={28} />
          </button>
          <button className="cursor-pointer">
            <Heart width={28} height={28} fill="black" />
          </button>
          <button className="cursor-pointer">
            <ShoppingCart width={28} height={28} fill="black" />
          </button>
        </div>
      </header>
      <main className="flex flex-col mt-8 items-center">
        <h1 className="font-major text-[128px]">GamesStore</h1>

        <div className="w-full flex justify-center py-5 overflow-hidden">
          <Carousel
            opts={{ dragFree: true }}
            setApi={setApi}
            plugins={[autoplay.current]} // ✅ plugin adicionado aqui
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
        <Link
          href="#"
          className="group font-semibold mt-3 flex items-center gap-2 "
        >
          Explorar{" "}
          <Triangle
            size={16}
            className="rotate-90 text-green-500 fill-green-500 group-hover:text-green-400 transition-transform duration-300 ease-in-out group-hover:fill-green-400 group-hover:rotate-180"
          />
        </Link>
        <div className="mt-10 flex items-center  gap-20">
          <div className="flex flex-col items-center h-[150px] justify-center gap-3">
            <Image
              src="/console.png"
              width={84}
              height={112}
              alt="Console icon"
            />
            <span className="font-semibold mt-auto text-xl">Consoles</span>
          </div>
          <div className="flex flex-col items-center h-[150px] justify-center gap-3">
            <Image
              src="/controller.png"
              width={84}
              height={112}
              alt="Controller icon"
              className="mt-5"
            />
            <span className="font-semibold mt-auto text-xl">Games</span>
          </div>
          <div className="flex flex-col items-center h-[150px] justify-center gap-3">
            <Image
              src="/headphone.png"
              width={84}
              height={112}
              alt="headphone icon"
            />
            <span className="font-semibold mt-auto text-xl">Acessorios</span>
          </div>
        </div>
      </main>
    </>
  );
}
