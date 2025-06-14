import { Triangle } from "lucide-react";

import WishlistCard from "./components/wishlist-card";

export default function WishlistPage() {
  return (
    <div className="flex flex-col gap-[30px] px-40 py-10">
      <div className="flex items-center gap-2">
        <h2 className="font-poppins text-2xl font-semibold">
          Lista de desejos
        </h2>
        <Triangle
          size={20}
          className="rotate-90 fill-purple-200 text-purple-200"
        />
      </div>
      {Array.from({ length: 3 }, (_, index) => (
        <WishlistCard key={index} />
      ))}
    </div>
  );
}
