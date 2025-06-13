import {
  AlignJustify,
  CircleUserRound,
  Heart,
  Search,
  ShoppingCart,
} from "lucide-react";

export default function Header() {
  return (
    <header className="bg-purple-200 text-white h-16 flex items-center px-12">
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
          <Heart width={28} height={28} fill="white" />
        </button>
        <button className="cursor-pointer">
          <ShoppingCart width={28} height={28} fill="white" />
        </button>
      </div>
    </header>
  );
}
