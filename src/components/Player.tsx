"use client";

import Image from "next/image";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  FaBackwardStep,
  FaForwardStep,
  FaPause,
  FaPlay,
  FaVolumeHigh,
  FaVolumeXmark,
} from "react-icons/fa6";
import { anton } from "@/app/fonts";
import { Track, tracks } from "@/app/tracks";
import { cn, formatTime } from "@/app/utils";

type PlayerContextValue = {
  current: Track | null;
  isPlaying: boolean;
  toggle: (id: string) => void;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used inside PlayerProvider");
  }
  return context;
};

export const PlayerProvider = ({ children }: { children: React.ReactNode }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);

  const current = index === null ? null : tracks[index];

  const load = useCallback((nextIndex: number) => {
    const audio = audioRef.current;
    if (!audio || !tracks[nextIndex]) return;
    audio.src = tracks[nextIndex].src;
    audio.play().catch(() => setIsPlaying(false));
    setIndex(nextIndex);
    setTime(0);
    setDuration(0);
  }, []);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, []);

  const toggle = useCallback(
    (id: string) => {
      const nextIndex = tracks.findIndex((track) => track.id === id);
      if (nextIndex === -1) return;
      if (nextIndex !== index) {
        load(nextIndex);
      } else {
        togglePlayback();
      }
    },
    [index, load, togglePlayback]
  );

  const skip = useCallback(
    (direction: 1 | -1) => {
      if (index !== null) load(index + direction);
    },
    [index, load]
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
    audio.muted = muted;
  }, [volume, muted]);

  // Controles en la pantalla de bloqueo / auriculares.
  useEffect(() => {
    if (!current || !("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: current.title,
      artist: "Felix Zepol",
      artwork: [{ src: current.cover }],
    });
    navigator.mediaSession.setActionHandler("previoustrack", () => skip(-1));
    navigator.mediaSession.setActionHandler("nexttrack", () => skip(1));
  }, [current, skip]);

  const value = useMemo(
    () => ({ current, isPlaying, toggle }),
    [current, isPlaying, toggle]
  );

  return (
    <PlayerContext.Provider value={value}>
      {children}
      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => skip(1)}
      />
      {current && index !== null && (
        <>
          <div className="h-24" />
          <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-paper bg-ink px-4 py-3">
            <div className="mx-auto flex max-w-3xl items-center gap-x-3">
              <Image
                src={current.cover}
                alt={current.title}
                width={48}
                height={48}
                className="border border-paper"
              />
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    "truncate text-lg uppercase leading-tight text-paper",
                    anton.className
                  )}
                >
                  {current.title}
                </p>
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step="any"
                  value={time}
                  onChange={(event) => {
                    const nextTime = Number(event.target.value);
                    if (audioRef.current) audioRef.current.currentTime = nextTime;
                    setTime(nextTime);
                  }}
                  aria-label="Progreso"
                  className="block h-1 w-full cursor-pointer accent-blood"
                />
                <div className="mt-1 flex justify-between text-xs text-paper/60">
                  <span>{formatTime(time)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              <div className="flex items-center text-paper">
                <button
                  type="button"
                  onClick={() => skip(-1)}
                  disabled={index === 0}
                  title="Anterior"
                  className="p-2 disabled:opacity-30"
                >
                  <FaBackwardStep size={18} />
                </button>
                <button
                  type="button"
                  onClick={togglePlayback}
                  title={isPlaying ? "Pausar" : "Reproducir"}
                  className="p-2"
                >
                  {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} />}
                </button>
                <button
                  type="button"
                  onClick={() => skip(1)}
                  disabled={index === tracks.length - 1}
                  title="Siguiente"
                  className="p-2 disabled:opacity-30"
                >
                  <FaForwardStep size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => setMuted(!muted)}
                  title={muted ? "Activar sonido" : "Silenciar"}
                  className="hidden p-2 sm:block"
                >
                  {muted || volume === 0 ? (
                    <FaVolumeXmark size={18} />
                  ) : (
                    <FaVolumeHigh size={18} />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={(event) => {
                    setVolume(Number(event.target.value));
                    setMuted(false);
                  }}
                  aria-label="Volumen"
                  className="hidden h-1 w-20 cursor-pointer accent-blood sm:block"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </PlayerContext.Provider>
  );
};
