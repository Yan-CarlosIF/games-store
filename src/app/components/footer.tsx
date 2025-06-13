import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Facebook, Headphones, Instagram, Send, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto flex flex-col items-center font-poppins bg-purple-200 px-12 py-9">
      <div className="bg-white w-full rounded-[20px] justify-around flex items-center h-[146px]">
        <h2 className="text-3xl  font-semibold">
          Inscreva-se na nossa newsletter
        </h2>
        <div className="flex items-center gap-3">
          <div className="w-[380px] text-white bg-purple-200/20 rounded-[20px] h-16 p-4">
            <input
              type="email"
              className="w-full placeholder:text-white h-full border-none outline-none"
              placeholder="Email address"
            />
          </div>
          <Button className="size-12 bg-purple-200 hover:bg-purple-600">
            <Send className="size-5" />
          </Button>
        </div>
        <div className="flex items-center gap-4">
          <Headphones className="text-purple-200 size-[45px]" />
          <div>
            <h3 className="font-semibold text-xl">Fale conosco</h3>
            <p>(88) 99686-3539</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-neutral-100">
        <h1 className="text-6xl mt-10">GamesStore</h1>
        <p className="pl-4 leading-9">Aracati, Brasil</p>
        <div className="flex pl-4 gap-6 mt-4">
          <Link
            href=""
            className="cursor-pointer size-8 border border-neutral-100 rounded-sm flex justify-center items-center p-1"
          >
            <Facebook size={20} />
          </Link>
          <Link
            target="_blank"
            href="https://x.com/Yanzinn1_"
            className="cursor-pointer border size-8 border-neutral-100 rounded-sm flex justify-center items-center p-1"
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
