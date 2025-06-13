"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function QuantityButton() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex w-fit items-center justify-center rounded-full border border-purple-200">
      <Button
        onClick={() => setQuantity((prevState) => prevState + 1)}
        className="group w-[40px] rounded-l-full bg-transparent p-4 hover:bg-transparent"
      >
        <Plus className="transition-all duration-200 ease-in-out group-hover:scale-130 group-hover:text-green-500" />
      </Button>
      <span className="w-[35px] px-2 text-center text-lg font-medium">
        {quantity}
      </span>
      <Button
        onClick={() =>
          setQuantity((prevState) =>
            prevState < 1 ? prevState : prevState - 1,
          )
        }
        className="group w-[40px] rounded-r-full bg-transparent p-4 hover:bg-transparent"
      >
        <Minus className="transition-all duration-200 ease-in-out group-hover:scale-130 group-hover:text-red-500" />
      </Button>
    </div>
  );
}
