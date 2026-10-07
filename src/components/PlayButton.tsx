"use client";

import React from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { anton } from "@/app/fonts";
import { cn } from "@/app/utils";
import { usePlayer } from "./Player";

const PlayButton = ({
  trackId,
  className,
}: {
  trackId: string;
  className?: string;
}) => {
  const { current, isPlaying, toggle } = usePlayer();
  const active = current?.id === trackId && isPlaying;
  const Icon = active ? FaPause : FaPlay;

  return (
    <button
      type="button"
      onClick={() => toggle(trackId)}
      className={cn(
        "inline-flex items-center gap-x-3 bg-paper px-6 py-3 text-2xl uppercase tracking-wide text-ink transition-colors hover:bg-blood",
        anton.className,
        className
      )}
    >
      <Icon size={18} />
      {active ? "Pausar" : "Escuchar"}
    </button>
  );
};

export default PlayButton;
