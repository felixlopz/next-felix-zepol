import Image from "next/image";
import { cn } from "./utils";
import { anton } from "./fonts";

import { FaTiktok, FaYoutube, FaInstagram } from "react-icons/fa6";
import NowPlaying from "@/components/NowPlaying";
import TrackList from "@/components/TrackList";

const socials = [
  {
    title: "YouTube",
    href: "https://www.youtube.com/@felixzepol",
    icon: FaYoutube,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/felix.zepol",
    icon: FaInstagram,
  },
  {
    title: "TikTok",
    href: "https://www.tiktok.com/@felix.zepol",
    icon: FaTiktok,
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-10">
      <header className="flex items-center justify-between py-4">
        <div className="flex items-center gap-x-3">
          <Image
            src={"/profile.jpeg"}
            alt="Felix Zepol Profile Pic"
            width={44}
            height={44}
            className="border border-paper grayscale"
          />
          <span className="text-xs uppercase tracking-[0.3em]">Alt Rock</span>
        </div>
        <div className="flex items-center">
          {socials.map((social) => (
            <a
              key={social.title}
              href={social.href}
              target="_blank"
              title={social.title}
              className="p-3 hover:text-blood"
            >
              <social.icon size={22} />
            </a>
          ))}
        </div>
      </header>

      <h1
        className={cn(
          "border-y-2 border-paper py-2 text-center text-[length:min(19vw,9.5rem)] uppercase leading-none",
          anton.className
        )}
      >
        Felix Zepol
      </h1>

      <div
        aria-hidden
        className={cn(
          "marquee bg-blood py-1 text-sm uppercase tracking-widest text-ink",
          anton.className
        )}
      >
        {[0, 1].map((copy) => (
          <div key={copy}>
            {Array(8).fill("Felix Zepol ✶ Alt Rock ✶ ").join("")}
          </div>
        ))}
      </div>

      <NowPlaying />

      <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-blood">
        Discografía
      </h3>
      <TrackList />
    </main>
  );
}
