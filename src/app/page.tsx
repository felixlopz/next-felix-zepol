import Image from "next/image";
import { cn } from "./utils";
import { righteous } from "./fonts";

import { SiApplemusic } from "react-icons/si";
import { FaSpotify, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center py-5 ">
      <Image
        src={"/profile.jpeg"}
        alt="Felix Zepol Profile Pic"
        width={142}
        height={142}
        className="rounded-full mb-8 shadow-lg shadow-black/20"
      />

      <div className="max-w-[144px] text-center z-10">
        <h1 className={cn("text-white text-6xl", righteous.className)}>
          Felix Zepol
        </h1>
      </div>

      <div className="flex items-center gap-x-0 mt-4">
        <a
          href="https://open.spotify.com/artist/1sWmDanlClscGCuHLlWvOc"
          className="p-4"
          target="_blank"
          title="Spotify"
        >
          <FaSpotify className="text-white" size={36} />
        </a>
        <a
          href="https://music.apple.com/ve/artist/felix-zepol/1774570020"
          className="p-4"
          target="_blank"
          title="Apple Music"
        >
          <SiApplemusic className="text-white" size={36} />
        </a>
        <a
          href="https://www.youtube.com/@felixzepol"
          className="p-4"
          target="_blank"
          title="YouTube"
        >
          <FaYoutube className="text-white" size={36} />
        </a>
        <a
          href="https://www.instagram.com/felix.zepol"
          className="p-4"
          target="_blank"
          title="Instagram"
        >
          <FaInstagram className="text-white" size={36} />
        </a>
        <a
          href="https://www.tiktok.com/@felix.zepol"
          className="p-4"
          target="_blank"
          title="TikTok"
        >
          <FaTiktok className="text-white" size={36} />
        </a>
      </div>
      <h3 className={cn("text-white text-2xl mb-5", righteous.className)}>
        Discografía
      </h3>
      <div className="">
        <a
          href="#"
          target="_blank"
          title="Poesía Moderna - 15/08"
          className="relative flex items-center gap-x-2 mb-4  rounded-sm  w-[325px] bg-stone-900 px-4 py-2"
        >
          <div className="absolute text-white bg-red-600 p-2 rounded-sm rotate-12 -top-5 -right-5 animate-pulse">
            <span className="text-xs">Nuevo</span>
          </div>
          <Image
            src={"/pm.png"}
            alt="Ep Dia Cero"
            width={50}
            height={50}
            className="rounded-sm "
          />
          <p className="text-white">Poesía Moderna OUT 15/08</p>
        </a>
        <a
          href="https://open.spotify.com/track/6QotTxC3M7J3R5s8KRCiDT?si=0ddfe1413b3847b4"
          target="_blank"
          title="EP: Día Cero"
          className="flex items-center gap-x-2 mb-4  rounded-sm  w-[325px] bg-stone-900 px-4 py-2"
        >
          <Image
            src={"/dia-cero.png"}
            alt="Ep Dia Cero"
            width={50}
            height={50}
            className="rounded-sm "
          />
          <p className="text-white">EP: Día Cero</p>
        </a>
        <a
          href="https://open.spotify.com/track/0NRkIYzO2tYPmYrfJRZ4SC?si=22cf365558c040ca"
          target="_blank"
          title="El Principio Del Final"
          className="flex items-center gap-x-2 mb-4  rounded-sm  w-[325px] bg-stone-900 px-4 py-2"
        >
          <Image
            src={"/epdf.png"}
            alt="El Principio Del Final"
            width={50}
            height={50}
            className="rounded-sm "
          />
          <p className="text-white">El Principio Del Final</p>
        </a>
        <a
          href="https://open.spotify.com/track/0jNSsYtDlPFDrsSAEC2vvH?si=1940c6c86cdf4d93"
          target="_blank"
          title="Indomables"
          className="flex items-center gap-x-2 mb-4  rounded-sm  w-[325px] bg-stone-900 px-4 py-2"
        >
          <Image
            src={"/indomables.png"}
            alt="Indomables"
            width={50}
            height={50}
            className="rounded-sm "
          />
          <p className="text-white">Indomables</p>
        </a>
      </div>
    </main>
  );
}
