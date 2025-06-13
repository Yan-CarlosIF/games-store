import Image from "next/image";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type GameCardProps = {
  // href: string;
  image: string;
  videoRatio?: boolean;
  // title: string;
  // price: number;
};

export default function ProductCard({ image, videoRatio }: GameCardProps) {
  return (
    <Link
      href="#"
      className="w-full shadow-purple-200 transition-all duration-300 ease-in-out hover:shadow-2xs"
    >
      <div
        className={twMerge(
          "relative aspect-[3/4] w-full",
          videoRatio && "aspect-video",
        )}
      >
        <Image
          src={image}
          alt="Game Cover"
          fill
          className="rounded-sm object-cover shadow-lg"
        />
      </div>
      <div className="flex items-center justify-between text-shadow-sm">
        <h2 className="leading-12 font-medium">Game Name</h2>
        <p>R$ 99</p>
      </div>
    </Link>
  );
}
