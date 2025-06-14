import { Search, Triangle } from "lucide-react";

import { Input } from "@/components/ui/input";

import ProductCard from "../components/product-card";

export default function EletronicsPage() {
  return (
    <div className="min-h-screen px-24 py-4">
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-1">
          <h2 className="text-2xl font-bold">Eletrônicos</h2>
          <Triangle
            size={16}
            className="rotate-90 fill-purple-200 text-purple-200"
          />
        </div>
        <div className="relative max-w-80">
          <Input
            className="w-full pl-8 focus-visible:ring-purple-200/30"
            placeholder="Procurar um produto"
          />
          <Search className="absolute top-1/2 left-2 size-5 -translate-y-1/2 text-black/30" />
        </div>
      </div>
      <main className="mt-10 grid w-full grid-cols-5 justify-end gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard
            id={index.toString()}
            videoRatio
            image="/eletronics/ps4.png"
            key={index}
          />
        ))}
      </main>
    </div>
  );
}
