import Image from "next/image";
import Link from "next/link";

// type GameCardProps = {
//   href: string;
//   image?: string;
//   title: string;
//   price: number;
// };

export default function GameCard() {
  return (
    <Link
      href="#"
      className="w-full transition-all shadow-purple-200 ease-in-out duration-300 hover:shadow-2xs"
    >
      <div className="relative w-full aspect-[3/4]">
        <Image
          src="/games-cover/gow.png"
          alt="Game Cover"
          fill
          className="object-cover rounded-sm shadow-lg"
        />
      </div>
      <div className="flex justify-between text-shadow-sm items-center">
        <h2 className="font-medium leading-12">Game Name</h2>
        <p>R$ 99</p>
      </div>
    </Link>
  );
}
