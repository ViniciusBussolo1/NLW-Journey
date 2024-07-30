// biome-ignore lint: <explanation>
import { FormEvent } from "react";

import { X, User, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5 ">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibolds">
              Confirmar criação de viagem
            </h2>
            <button
              type="button"
              className="sixe-5 text-zinc-400"
              onClick={closeConfirmTripModal}
            >
              <X />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div
            className="h-14 px-4 bg-zinc-950  border border-zinc-800 
            rounded-lg flex items-center gap-2 "
          >
            <User className="size-5 text-zinc-400" />
            <input
              type="text"
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder:text-zinc-400 
              w-40 outline-none flex-1"
            />
          </div>

          <div
            className="h-14 px-4 bg-zinc-950  border border-zinc-800 
            rounded-lg flex items-center gap-2 "
          >
            <User className="size-5 text-zinc-400" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder:text-zinc-400 
              w-40 outline-none flex-1"
            />
          </div>

          <Button type="submit" variant="primary" size="full">
            Confirmar criação da viagem
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}
