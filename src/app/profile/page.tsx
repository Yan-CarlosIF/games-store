import { Calendar1, CircleUserRound, Earth, Languages, Mail } from "lucide-react";

import Information from "./components/information";

export default function Page() {
  return (
    <div className="self-center">
      <h2 className="font-sofia-sans text-4xl font-bold">
        Informação pessoal
      </h2>
      <span className="font-poppins text-xs">
        gerenciar suas informações pessoais, incluindo número de telefone e
        endereço de e-mail onde você pode ser contatado
      </span>

      <main className="mt-10 grid grid-cols-2 gap-[50px]">
        <Information
          label="Nome"
          content="Fulano"
          icon={<CircleUserRound className="size-7" />}
        />
        <Information
          label="Data de nascimento"
          content="dd/mm/aaaa"
          icon={<Calendar1 className="size-7" />}
        />
        <Information
          label="País"
          content="Brasil"
          icon={<Earth className="size-7" />}
        />
        <Information
          label="Lingua"
          content="Português"
          icon={<Languages className="size-7" />}
        />
        <Information
          label="Email"
          content="fulano@gmail.com"
          icon={<Mail className="size-7" />}
        />
      </main>
    </div>
  );
}
