import {
  AlignJustify,
  CircleUserRound,
  Heart,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Label from "./label";

export default function Header() {
  return (
    <header className="flex h-16 items-center bg-purple-200 px-12 text-white">
      <Sheet>
        <SheetTrigger className="cursor-pointer">
          <AlignJustify width={28} height={28} />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col items-center border-none pb-20"
          side="left"
        >
          <SheetTitle className="text-shadow-2xl w-full bg-purple-600 p-4 text-center text-xl text-neutral-100">
            Menu
          </SheetTitle>
          <main className="mt-12 flex flex-col gap-6 self-start pl-12">
            <h2 className="font-poppins text-2xl font-semibold">
              Explorar categorias:
            </h2>
            <ul className="flex flex-col gap-3 pl-3">
              <Label href="/" label="Home" />
              <Label href="/" label="Mais vendidos" />
              <Label href="/navigation/games" label="Games" />
              <Label href="/navigation/electronics" label="Eletrônicos" />
            </ul>
          </main>
          <Link
            href="#"
            className="group mt-auto flex gap-2 text-lg font-semibold text-black/90 transition-colors duration-300 ease-in-out hover:text-black"
          >
            Perfil
            <UserRound
              size={28}
              className="rounded-full border-2 border-black/80 transition-colors duration-300 ease-in-out group-hover:border-black group-hover:text-black"
            />
          </Link>
        </SheetContent>
      </Sheet>

      <div className="ml-auto flex items-center gap-4">
        <Link href="/" className="cursor-pointer">
          <Search width={28} height={28} />
        </Link>
        <Link href="/" className="cursor-pointer">
          <CircleUserRound width={28} height={28} />
        </Link>
        <Link href="/" className="cursor-pointer">
          <Heart width={28} height={28} fill="white" />
        </Link>
        <Link href="/cart" className="cursor-pointer">
          <ShoppingCart width={28} height={28} fill="white" />
        </Link>
      </div>
    </header>
  );
}
