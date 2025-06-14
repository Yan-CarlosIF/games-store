import { Heart } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import ImageShowcase from "../components/image-showcase";

export default function ProductPage() {
  return (
    <div className="flex flex-col px-[88px] items-center">
      <div className="mb-20 flex h-full gap-[109px]">
        <div className="flex max-w-[968px] flex-col">
          <h2 className="font-poppins mt-8 ml-4 text-4xl font-extrabold">
            God of War 2018:
          </h2>
          <Image
            src="/gow-banner.png"
            alt="Game Cover"
            width={968}
            height={544}
            quality={100}
            className="mt-7 rounded-sm shadow-2xs"
          />
          <ImageShowcase />
          <p className="mt-8 px-8 text-justify text-shadow-sm">
            God of War é um jogo eletrônico de ação-aventura desenvolvido pela
            Santa Monica Studio e publicado pela Sony Interactive Entertainment
            (SIE). Foi lançado em 20 de abril de 2018 para PlayStation 4 e em 14
            de janeiro de 2022 para Microsoft Windows. É o oitavo título da
            série principal God of War e também o oitavo em ordem cronológica,
            sendo sequência dos eventos ocorridos em God of War III (2010). Ao
            contrário dos jogos anteriores, que eram vagamente baseados na
            mitologia grega, este título é vagamente baseado na mitologia
            nórdica, com a maior parte do tempo situado na antiga Noruega no
            reino de Midgard. Pela primeira vez na série, há dois protagonistas
            principais: Kratos, o antigo deus da guerra grego que é acompanhado
            por seu jovem filho Atreus. Após a morte da segunda esposa de Kratos
            e mãe de Atreus, eles viajam para cumprir sua promessa de espalhar
            suas cinzas no pico mais alto dos nove reinos. Kratos mantém seu
            passado conturbado em segredo de Atreus, que não tem consciência de
            sua natureza divina. Ao longo da jornada, eles encontram monstros e
            deuses do mundo nórdico.
          </p>
        </div>
        <div className="0 flex max-w-[400px] flex-col justify-center">
          <p className="mt-8 text-justify">
            Kratos é pai novamente. Como mentor e protetor de Atreus, um filho
            determinado a ganhar seu respeito, ele é forçado a encarar e
            controlar a fúria que há muito tempo o define enquanto viaja por um
            mundo ameaçador com o seu filho.
          </p>
          <span className="mt-5 text-2xl font-semibold">R$ 299,99</span>
          <Button className="font-poppins mt-8 bg-purple-200 py-10 text-3xl transition-colors duration-200 hover:bg-purple-600">
            Comprar
          </Button>
          <Button className="font-poppins mt-10 bg-purple-800 py-10 text-3xl transition-colors duration-200 hover:bg-purple-500">
            Adicionar ao carrinho
          </Button>
          <Button className="mt-10 size-[100px] rounded-full bg-purple-800 hover:bg-purple-500">
            <Heart className="size-8" />
          </Button>
        </div>
      </div>
    </div>
  );
}
