// biome-ignore lint: <explanation>
import { FormEvent } from "react";
import { X, AtSign, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface InviteGuestsModalProps {
  closeGuestsModal: () => void;
  emailsToInvite: string[];
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  removeEmailFromInvites: (email: string) => void;
}

export function InviteGuestsModal({
  addNewEmailToInvite,
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvites,
}: InviteGuestsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 bg-zinc-900 space-y-5 ">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibolds">Selecionar Convidados</h2>
            <button
              type="button"
              className="sixe-5 text-zinc-400"
              onClick={closeGuestsModal}
            >
              <X />
            </button>
          </div>
          <p className="text-sm text-zinc-400 text-left">
            Os convidados irão receber e-mails para confimar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvites(email)}
                >
                  <X className="size-4 text-zinc-300" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950  border border-zinc-800 
              rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center gap-2 flex-1 ">
            <AtSign className="size-5 text-zinc-400" />
            <input
              type="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder:text-zinc-400 
                  w-40 outline-none flex-1"
              name="email"
            />
          </div>

          <Button type="submit" variant="primary">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </div>
    </div>
  );
}