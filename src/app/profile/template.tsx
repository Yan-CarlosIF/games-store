import Image from "next/image";

import { Separator } from "@/components/ui/separator";

import Footer from "../components/footer";

export default function ProfileTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex h-screen px-20 py-8">
        <div className="flex flex-col">
          <div className="mt-10 rounded-full border-[7px] border-black">
            <Image
              src="/default-profile.png"
              alt="Profile Picture"
              width={250}
              height={250}
              className="rounded-full"
            />
          </div>
          <h2 className="font-sofia-sans mt-7 text-center text-3xl font-medium">
            Oi, Fulano!
          </h2>
          <div className="font-sofia-sans mt-16 flex flex-col gap-[30px]">
            <button className="cursor-pointer text-center text-2xl font-medium text-purple-600 transition-colors duration-300 ease-in-out hover:text-purple-600">
              Informação pessoal
            </button>
            <button className="cursor-pointer text-center text-2xl font-medium transition-colors duration-300 ease-in-out hover:text-purple-600">
              Informação pessoal
            </button>
            <button className="cursor-pointer text-center text-2xl font-medium transition-colors duration-300 ease-in-out hover:text-purple-600">
              Informação pessoal
            </button>
          </div>
        </div>
        <Separator className="mx-30" orientation="vertical" color="#17091b" />
        <div className="mt-20 flex flex-col">{children}</div>
      </div>
      <Footer />
    </>
  );
}
