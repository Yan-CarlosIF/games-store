import { Triangle } from "lucide-react";
import Image from "next/image";

export default function ImageShowcase() {
  return (
    <footer className="mt-16 flex max-w-[968px] items-center justify-center gap-[30px]">
      <button>
        <Triangle
          size={16}
          className="rotate-[-90deg] fill-purple-200 text-purple-200"
        />
      </button>
      <Image
        src="/gow-banner.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm shadow inset-shadow-2xs"
      />
      <Image
        src="/gow-banner.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm shadow inset-shadow-2xs"
      />
      <Image
        src="/gow-banner.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm shadow inset-shadow-2xs"
      />
      <Image
        src="/gow-banner.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm shadow inset-shadow-2xs"
      />
      <Image
        src="/gow-banner.png"
        alt="Game Cover"
        width={150}
        height={100}
        quality={100}
        className="rounded-sm shadow inset-shadow-2xs"
      />
      <button>
        <Triangle
          size={16}
          className="rotate-90 fill-purple-200 text-purple-200"
        />
      </button>
    </footer>
  );
}
