import Image from "next/image";
import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { SiApplemusic, SiYoutubemusic } from "react-icons/si";
import { cn } from "../utils";
import { righteous } from "../fonts";
import Link from "next/link";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import MusicLink from "../../components/MusicLink";

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
        <MusicLink
          href="https://www.youtube.com/watch?v=pOmzulX0pN0"
          icon={<FaYoutube className="text-[#FF0000] z-20" size={24} />}
          label="Youtube"
          id="streaming-link"
          iconBackgroundClass=" left-[20px] top-[25px] h-[12px]"
        />
        <MusicLink
          href="https://open.spotify.com/track/3TCH33GYXYGEkOCawZABY0?si=bc5696f5407c4ee2"
          icon={<FaSpotify className="text-green-500 z-20" size={24} />}
          label="Spotify"
          id="streaming-link"
        />
        <MusicLink
          href="https://music.youtube.com/watch?v=pOmzulX0pN0&si=Mj-UnepTcLKFrPk1"
          icon={<SiYoutubemusic className="text-[#FF0000] z-20" size={24} />}
          label="Youtube Music"
          id="streaming-link"
        />
        <MusicLink
          href="https://music.apple.com/us/song/poes%C3%ADa-moderna/1827612435"
          icon={<SiApplemusic className="text-[#ff4e6b] z-20" size={24} />}
          label="Apple Music"
          id="streaming-link"
        />
      </div>
      <Link href="/">
        <FaArrowAltCircleLeft className="text-white" size={25} />
      </Link>
    </main>
  );
};

export default PmPage;
