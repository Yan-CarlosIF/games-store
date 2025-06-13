import { Triangle } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ProductCard from "../components/product-card";

const filters = [
  {
    label: "Aventura",
    value: "adventure",
  },
  {
    label: "Ação",
    value: "action",
  },
  {
    label: "Survival",
    value: "survival",
  },
];

export default function EletronicsPage() {
  return (
    <div className="px-24 py-4">
      <div className="flex items-center justify-between">
        <div className="mt-4 flex items-center gap-1">
          <h2 className="text-2xl font-bold">Eletrônicos</h2>
          <Triangle
            size={16}
            className="rotate-90 fill-purple-200 text-purple-200"
          />
        </div>
        <Select>
          <SelectTrigger className="focus-visible:ring-purple-200/30">
            <SelectValue placeholder="Filtrar por" />
          </SelectTrigger>
          <SelectContent>
            {filters.map((filter) => (
              <SelectItem key={filter.value} value={filter.value}>
                {filter.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <main className="mt-7 grid w-full grid-cols-5 justify-end gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard videoRatio image="/eletronics/ps4.png" key={index} />
        ))}
      </main>
    </div>
  );
}
