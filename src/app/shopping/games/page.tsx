import { Triangle } from "lucide-react";
import GameCard from "./components/game-card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

export default function GamesPage() {
  return (
    <div className="py-4 px-24">
      <div className="flex justify-between items-center">
        <div className="flex items-center  mt-4 gap-1">
          <h2 className="font-bold text-2xl">Games</h2>
          <Triangle
            size={16}
            className="rotate-90 text-purple-200 fill-purple-200"
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
      <main className="grid grid-cols-5 w-full justify-end gap-10 mt-7">
        {Array.from({ length: 10 }).map((_, index) => (
          <GameCard key={index} />
        ))}
      </main>
    </div>
  );
}
