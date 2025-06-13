import { Triangle } from "lucide-react";
import CartCard from "./components/cart-card";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  return (
    <div className="flex flex-col px-40 py-10">
      <div className="mb-[30px] flex items-center gap-2">
        <h2 className="font-poppins text-2xl font-semibold">Carrinho</h2>
        <Triangle
          size={20}
          className="rotate-90 fill-purple-200 text-purple-200"
        />
      </div>
      <div className="flex gap-16 justify-between">
        <div className="flex w-[1000px] flex-col gap-[30px]">
          {Array.from({ length: 3 }, (_, index) => (
            <CartCard key={index} />
          ))}
        </div>
        <Button className="bg-purple-200 px-20 py-12 text-2xl shadow-2xl hover:bg-purple-600">
          Fazer compra
        </Button>
      </div>
    </div>
  );
}
