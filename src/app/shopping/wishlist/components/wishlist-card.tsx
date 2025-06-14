import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function WishlistCard() {
  return (
    <div className="flex w-full items-center gap-7 rounded-[10px] bg-purple-200/30 px-14 py-7">
      <Image
        src="/games-cover/gow.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm"
      />
      <div className="flex max-w-[800px] flex-col self-start">
        <h2 className="font-poppins text-xl leading-12 font-medium text-shadow-sm">
          Product Name
        </h2>
        <p className="text-justify font-medium">
          Kratos é pai novamente. Como mentor e protetor de Atreus, um filho
          determinado a ganhar seu respeito, ele é forçado a encarar e controlar
          a fúria que há muito tempo o define enquanto viaja por um mundo
          ameaçador com o seu filho.
        </p>
      </div>
      <Button className="ml-auto bg-purple-200 px-12 py-9 text-xl font-medium shadow-2xl hover:bg-purple-600">
        Adicionar ao carrinho
      </Button>
    </div>
  );
}
