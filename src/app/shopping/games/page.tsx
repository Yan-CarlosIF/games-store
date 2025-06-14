import { Search, Triangle } from "lucide-react";

import { Input } from "@/components/ui/input";

import ProductCard from "../components/product-card";

export default function GamesPage() {
  return (
    <div className="min-h-screen px-24 py-4">
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h2 className="text-2xl font-bold">Games</h2>
          <Triangle
            size={16}
            className="rotate-90 fill-purple-200 text-purple-200"
          />
        </div>
        <div className="relative max-w-80">
          <Input
            className="w-full pl-8 focus-visible:ring-purple-200/30"
            placeholder="Procurar um jogo"
          />
          <Search className="absolute top-1/2 left-2 size-5 -translate-y-1/2 text-black/30" />
        </div>
      </div>
      <main className="mt-7 grid w-full grid-cols-6 justify-end gap-10">
        {Array.from({ length: 20 }).map((_, index) => (
          <ProductCard
            id={index.toString()}
            image="/games-cover/gow.png"
            key={index}
          />
        ))}
      </main>
    </div>
  );
}
