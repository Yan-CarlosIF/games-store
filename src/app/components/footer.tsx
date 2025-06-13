import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Headphones, Instagram, Send, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="font-poppins mt-auto flex flex-col items-center bg-purple-200 px-12 py-9">
      <div className="flex h-[146px] w-full items-center justify-around rounded-[20px] bg-white">
        <h2 className="text-3xl font-semibold">
          Inscreva-se na nossa newsletter
        </h2>
        <div className="flex items-center gap-3">
          <div className="h-16 w-[380px] rounded-[20px] bg-purple-200/20 p-4 text-white">
            <input
              type="email"
              className="h-full w-full border-none outline-none placeholder:text-white"
              placeholder="Email address"
            />
          </div>
          <Button className="size-12 bg-purple-200 hover:bg-purple-600">
            <Send className="size-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Headphones className="size-[45px] text-purple-200" />
          <div>
            <h3 className="text-xl font-semibold">Fale conosco</h3>
            <p>(88) 99686-3539</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-neutral-100">
        <h1 className="mt-10 text-6xl">GamesStore</h1>
        <p className="pl-4 leading-9">Aracati, Brasil</p>
        <div className="mt-4 flex gap-6 pl-4">
          <Link
            href=""
            className="flex size-8 cursor-pointer items-center justify-center rounded-sm border border-neutral-100 p-1"
          >
            <Facebook size={20} />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Yanzinn1_"
            className="flex size-8 cursor-pointer items-center justify-center rounded-sm border border-neutral-100 p-1"
          >
            <Twitter size={20} />
          </Link>
          <Link
            target="_blank"
            href="https://www.instagram.com/yancaarlos_/"
            className="cursor-pointer"
          >
            <Instagram size={32} />
          </Link>
        </div>
        <Separator className="mt-5 bg-neutral-400" />
      </div>

      <p className="mt-10 text-neutral-100">
        Made by{" "}
        <Link
          className="border-b border-neutral-100 transition-colors ease-in-out hover:border-blue-400 hover:text-blue-400"
          target="_blank"
          href="https://github.com/yan-carlosif"
        >
          Yan Carlos
        </Link>
      </p>
    </footer>
  );
}
