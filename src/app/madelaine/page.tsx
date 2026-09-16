import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { cookies } from "next/headers";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { cn } from "../utils";
import { righteous } from "../fonts";
import { lock } from "./actions";
import { COOKIE_NAME } from "./constants";
import PasswordGate from "./PasswordGate";

export const metadata: Metadata = {
  title: "Madelaine",
  robots: { index: false, follow: false },
};

const MadelainePage = async () => {
  const cookieStore = await cookies();

  if (cookieStore.get(COOKIE_NAME)?.value !== "1") {
    return <PasswordGate />;
  }

  return (
    <main className="relative flex flex-col items-center py-5">
      <h3 className={cn("text-white text-2xl mb-2", righteous.className)}>
        Madelaine
      </h3>
      <p className="mb-8 font-serif text-white opacity-90">
        Sabías la respuesta 🤎
      </p>

      <div className="w-[400px] max-w-[90vw] rounded-sm bg-stone-900 px-4 py-8">
        <p className="text-white">Aquí va el contenido de la página.</p>
      </div>

      <form action={lock} className="mt-8">
        <button type="submit" className="text-sm text-white/60 hover:text-white">
          Cerrar
        </button>
      </form>

      <Link href="/" className="mt-4" title="Volver">
        <FaArrowAltCircleLeft className="text-white" size={25} />
      </Link>
    </main>
  );
};

export default MadelainePage;
