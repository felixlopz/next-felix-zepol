"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { anton } from "@/app/fonts";
import { tracks } from "@/app/tracks";
import { cn } from "@/app/utils";
import PlayButton from "./PlayButton";
import { usePlayer } from "./Player";

const NowPlaying = () => {
  const { current, isPlaying } = usePlayer();
  const track = current ?? tracks[0];

  return (
    <section className="grid items-end gap-8 py-10 md:grid-cols-2">
      <Image
        src={track.cover}
        alt={track.title}
        width={600}
        height={600}
        sizes="(min-width: 768px) 352px, 100vw"
        priority
        className="aspect-square w-full border-2 border-paper object-cover shadow-[10px_10px_0_#e0001a]"
      />
      <div>
        <p className="mb-2 text-xs uppercase tracking-[0.3em] text-blood">
          {current && isPlaying ? "Sonando ahora" : "Escucha"}
        </p>
        <h2
          className={cn(
            "mb-3 text-5xl uppercase leading-[0.95] md:text-6xl",
            anton.className
          )}
        >
          {track.title}
        </h2>
        {track.tagline && (
          <p className="mb-5 text-sm text-paper/70">{track.tagline}</p>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
          <PlayButton trackId={track.id} />
          <Link
            href={`/${track.id}`}
            className="text-sm uppercase tracking-widest underline underline-offset-4 hover:text-blood"
          >
            Ver canción
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NowPlaying;
