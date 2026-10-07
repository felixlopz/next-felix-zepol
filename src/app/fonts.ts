import { Anton, Montserrat, Righteous, Space_Mono } from "next/font/google";

export const righteous = Righteous({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

export const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
