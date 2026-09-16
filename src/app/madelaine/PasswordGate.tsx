"use client";

import React, { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { FaArrowAltCircleLeft, FaLock } from "react-icons/fa";
import { cn } from "../utils";
import { righteous, montserrat } from "../fonts";
import { unlock } from "./actions";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn(
        "w-full rounded-sm bg-white px-5 py-3 text-[#130F0D] transition-opacity hover:opacity-80 disabled:opacity-50",
        montserrat.className
      )}
    >
      {pending ? "Abriendo..." : "Entrar"}
    </button>
  );
};

const PasswordGate = () => {
  const [error, formAction] = useActionState(unlock, null);

  return (
    <main className="relative flex flex-col items-center py-5">
      <div className="mb-8 flex h-[142px] w-[142px] items-center justify-center rounded-full bg-stone-900 shadow-lg shadow-black/20">
        <FaLock className="text-white" size={48} />
      </div>

      <h3 className={cn("text-white text-2xl", righteous.className)}>
        Madelaine
      </h3>
      <p className="mb-5 font-serif text-white opacity-90">
        ¿Cuál es tu sabor de Flips favorito?
      </p>

      <form
        action={formAction}
        className="flex w-[325px] max-w-[90vw] flex-col gap-y-4"
      >
        <input
          type="password"
          name="answer"
          autoComplete="off"
          autoFocus
          aria-label="¿Cuál es tu sabor de Flips favorito?"
          placeholder="Tu respuesta"
          className={cn(
            "w-full rounded-sm bg-stone-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40",
            montserrat.className
          )}
        />
        <SubmitButton />
        {error ? (
          <p role="alert" className="text-center text-sm text-red-400">
            {error}
          </p>
        ) : null}
      </form>

      <Link href="/" className="mt-8" title="Volver">
        <FaArrowAltCircleLeft className="text-white" size={25} />
      </Link>
    </main>
  );
};

export default PasswordGate;
