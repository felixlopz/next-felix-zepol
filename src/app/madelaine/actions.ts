"use server";

import { cookies } from "next/headers";

import { COOKIE_NAME } from "./constants";

// Se puede sobreescribir con MADELAINE_ANSWER sin tocar el código.
const ANSWER = process.env.MADELAINE_ANSWER ?? "dulce de leche";

// "Dulce  de Leche!" -> "dulce de leche"
const normalize = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();

export async function unlock(_prevState: string | null, formData: FormData) {
  const answer = formData.get("answer");

  if (typeof answer !== "string" || normalize(answer) !== normalize(ANSWER)) {
    return "Esa no es 🙃 Intenta de nuevo.";
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "1", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/madelaine",
    maxAge: 60 * 60 * 24 * 30,
  });

  return null;
}

export async function lock() {
  const cookieStore = await cookies();
  cookieStore.delete({ name: COOKIE_NAME, path: "/madelaine" });
}
