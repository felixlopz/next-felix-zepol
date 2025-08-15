import Image from "next/image";
import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { cn } from "../utils";
import { righteous } from "../fonts";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";

const PmPage = () => {
  return (
    <main className="relative flex flex-col items-center py-5 ">
      <Image
        src={"/pm.png"}
        alt="Poesia Moderna Song Cover"
        width={250}
        height={250}
        className="rounded-sm mb-8 shadow-lg shadow-black/20"
      />

      <h3 className={cn("text-white text-2xl", righteous.className)}>
        Poesía Moderna
      </h3>
      <p className={cn("text-white opacity-90 font-serif mb-5")}>
        Entregarlo todo no debería dar temor
      </p>

      <div className="">
        <a
          href="https://www.youtube.com/watch?v=pOmzulX0pN0"
          target="_blank"
          title="Poesía Moderna - 15/08"
          className="relative flex items-center gap-x-2 mb-4  rounded-sm  w-[400px] bg-stone-900 px-4 py-8 h-[50px]"
        >
          <div className="absolute w-3 h-3 bg-white left-[20px] top-[25px]-z-10"></div>
          <FaYoutube className="text-[#FF0000] z-20" size={24} />
          <p className="text-white font-bold">Youtube</p>
          <span className="ml-auto block py-1 px-5 rounded-sm border-white text-white  border-2">
            Play
          </span>
        </a>
        <a
          href="https://open.spotify.com/track/3TCH33GYXYGEkOCawZABY0?si=bc5696f5407c4ee2"
          target="_blank"
          title="Poesía Moderna - 15/08"
          className="relative flex items-center gap-x-2 mb-4  rounded-sm  w-[400px] bg-stone-900 px-4 py-8 h-[50px]"
        >
          <div className="absolute w-4 h-4 bg-white left-[20px] top-[25px]-z-10"></div>

          <FaSpotify className="text-green-500 z-20" size={24} />
          <p className="text-white font-bold">Spotify</p>
          <span className="ml-auto block py-1 px-5 rounded-sm border-white text-white  border-2">
            Play
          </span>
        </a>
        <a
          href="https://music.youtube.com/watch?v=pOmzulX0pN0&si=Mj-UnepTcLKFrPk1"
          target="_blank"
          title="Poesía Moderna - 15/08"
          className="relative flex items-center gap-x-2 mb-4  rounded-sm  w-[400px] bg-stone-900 px-4 py-8 h-[50px]"
        >
          <div className="absolute w-4 h-4 bg-white left-[20px] top-[25px]-z-10"></div>
          <SiYoutubemusic className="text-[#FF0000] z-20" size={24} />
          <p className="text-white font-bold">Youtube Music</p>
          <span className="ml-auto block py-1 px-5 rounded-sm border-white text-white  border-2">
            Play
          </span>
        </a>
        <a
          href="https://music.apple.com/us/song/poes%C3%ADa-moderna/1827612435"
          target="_blank"
          title="Poesía Moderna - 15/08"
          className="relative flex items-center gap-x-2 mb-4  rounded-sm  w-[400px] bg-stone-900 px-4 py-8 h-[50px]"
        >
          <div className="absolute w-4 h-4 bg-white left-[20px] top-[25px]-z-10"></div>
          <SiApplemusic className="text-[#ff4e6b] z-20" size={24} />
          <p className="text-white font-bold">Apple Music</p>
          <span className="ml-auto block py-1 px-5 rounded-sm border-white text-white  border-2">
            Play
          </span>
        </a>
      </div>
      <Link href="/">
        <FaArrowAltCircleLeft className="text-white" size={25} />
      </Link>
    </main>
  );
};

export default PmPage;
