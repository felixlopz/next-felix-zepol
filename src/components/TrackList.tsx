"use client";

import Link from "next/link";
import React from "react";
import { FaArrowRight, FaPause, FaPlay } from "react-icons/fa6";
import { anton } from "@/app/fonts";
import { tracks } from "@/app/tracks";
import { cn, formatTime } from "@/app/utils";
import { usePlayer } from "./Player";

const TrackList = () => {
  const { current, isPlaying, toggle } = usePlayer();

  return (
    <ol className="border-t-2 border-paper">
      {tracks.map((track, index) => {
        const selected = current?.id === track.id;

        return (
          <li
            key={track.id}
            className={cn(
              "group flex items-center border-b border-paper/30",
              selected && "text-blood"
            )}
          >
            <button
              type="button"
              onClick={() => toggle(track.id)}
              title={selected && isPlaying ? "Pausar" : "Reproducir"}
              className="flex min-w-0 flex-1 items-center gap-x-4 py-3 text-left"
            >
              <span className="flex w-6 shrink-0 justify-center text-xs">
                {selected && isPlaying ? (
                  <FaPause size={12} />
                ) : (
                  <>
                    <span className="group-hover:hidden">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <FaPlay size={12} className="hidden group-hover:block" />
                  </>
                )}
              </span>
              <span
                className={cn(
                  "min-w-0 flex-1 truncate text-2xl uppercase md:text-3xl",
                  anton.className
                )}
              >
                {track.title}
              </span>
              <span className="text-xs opacity-60">
                {formatTime(track.duration)}
              </span>
            </button>
            <Link
              href={`/${track.id}`}
              title={`Ver ${track.title}`}
              className="p-3 opacity-60 hover:opacity-100"
            >
              <FaArrowRight size={14} />
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

export default TrackList;
