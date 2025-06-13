import Image from "next/image";

import QuantityButton from "./quantity-button";

export default function CartCard() {
  return (
    <div className="flex w-full gap-7 rounded-[10px] bg-purple-200/30 px-14 py-7">
      <Image
        src="/games-cover/gow.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm"
      />
      <div className="flex flex-col">
        <h2 className="font-poppins text-xl leading-12 font-medium text-shadow-sm">
          Product Name
        </h2>
        <p className="text-justify font-medium">
          Kratos é pai novamente. Como mentor e protetor de Atreus, um filho
          determinado a ganhar seu respeito, ele é forçado a encarar e controlar
          a fúria que há muito tempo o define enquanto viaja por um mundo
          ameaçador com o seu filho.
        </p>
        <div className="mt-auto flex justify-between">
          <span className="text-2xl font-semibold">R$ 299,99</span>
          <QuantityButton />
        </div>
      </div>
    </div>
  );
}
