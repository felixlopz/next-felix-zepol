import Image from "next/image";
import { cn } from "./utils";
import { righteous } from "./fonts";
import { Button } from "./button";

import { SiApplemusic } from "react-icons/si";
import { FaSpotify, FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa6";

import SVGAmazonMusic from "../../public/amazon.svg";
import SVGDeezerMusic from "../../public/deezer.svg";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center">
      <div className="relative">
        <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-t from-[#130F0D]"></div>
        <Image
          src={"/banner.jpeg"}
          alt="Felix Zepol Profile Pic"
          width={2244}
          height={2244}
          className="sm:max-h-[400px] object-contain"
        />
      </div>

      <div className="max-w-[144px] text-center -mt-[84px] z-10">
        <h1 className={cn("text-white text-6xl", righteous.className)}>
          Felix Zepol
        </h1>
      </div>

      <div className="flex flex-col mt-12 gap-y-4">
        <a
          href="https://open.spotify.com/artist/1sWmDanlClscGCuHLlWvOc"
          target="_blank"
        >
          <Button variant="spotify">
            <FaSpotify className="mr-4" size={28} />
            Spotify
          </Button>
        </a>

        <a
          href="https://music.apple.com/us/artist/felix-zepol/1774570020"
          target="_blank"
        >
          <Button variant="apple">
            <SiApplemusic className="mr-4" size={28} />
            Apple
          </Button>
        </a>

        <a
          href="https://music.amazon.com/artists/B0DK811CHZ/felix-zepol"
          target="_blank"
        >
          <Button variant="amazon">
            <Image
              src={SVGAmazonMusic}
              alt="Amazon Music Logo, Felix Zepol"
              width={28}
              className="mr-4"
            />
            Amazon
          </Button>
        </a>
        <a href="https://www.deezer.com/mx/artist/286432631" target="_blank">
          <Button variant="deezer">
            <Image
              src={SVGDeezerMusic}
              alt="Deezer Music Logo, Felix Zepol"
              width={28}
              className="mr-4"
            />
            Deezer
          </Button>
        </a>
        {/* <a href="">
          <Button variant="tidal">
            <SiTidal className="mr-4" size={28} />
            Tidal
          </Button>
        </a> */}
      </div>
      <div className="flex items-center gap-x-2 mt-8 mb-89">
        <a
          href="https://www.youtube.com/@felixzepol"
          className="p-4"
          target="_blank"
        >
          <FaYoutube className="text-white" size={24} />
        </a>
        <a
          href="https://www.instagram.com/felix.zepol"
          className="p-4"
          target="_blank"
        >
          <FaInstagram className="text-white" size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@felix.zepol"
          className="p-4"
          target="_blank"
        >
          <FaTiktok className="text-white" size={24} />
        </a>
      </div>
    </main>
  );
}
