import { ChevronRight } from "lucide-react";
import Link from "next/link";

type LabelProps = {
  href: string;
  label: string;
};

export default function Label({ href, label }: LabelProps) {
  return (
    <li>
      <Link
        className="group flex items-center justify-between border-b border-transparent pb-1 font-semibold transition-all duration-200 ease-in-out hover:border-black"
        href={href}
      >
        {label}
        <ChevronRight className="transition-all duration-500 group-hover:rotate-180" />
      </Link>
    </li>
  );
}
