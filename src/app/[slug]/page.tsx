import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowLeft, FaYoutube } from "react-icons/fa6";
import PlayButton from "@/components/PlayButton";
import { anton } from "../fonts";
import { tracks } from "../tracks";
import { cn } from "../utils";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = () =>
  tracks.map((track) => ({ slug: track.id }));

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const { slug } = await params;
  const track = tracks.find((item) => item.id === slug);
  if (!track) return {};

  return {
    title: `${track.title} | Felix Zepol`,
    description: track.tagline,
    openGraph: { images: [track.cover] },
  };
};

const TrackPage = async ({ params }: Props) => {
  const { slug } = await params;
  const index = tracks.findIndex((item) => item.id === slug);
  const track = tracks[index];
  if (!track) notFound();

  const previous = tracks[index - 1];
  const next = tracks[index + 1];

  return (
    <main className="mx-auto max-w-3xl px-4 pb-10">
      <header className="flex items-center justify-between border-b-2 border-paper py-4">
        <Link
          href="/"
          className="flex items-center gap-x-2 text-xs uppercase tracking-[0.3em] hover:text-blood"
        >
          <FaArrowLeft size={12} />
          Volver
        </Link>
        <Link
          href="/"
          className={cn("text-2xl uppercase leading-none", anton.className)}
        >
          Felix Zepol
        </Link>
      </header>

      <section className="grid items-end gap-8 py-10 md:grid-cols-2">
        <Image
          src={track.cover}
          alt={`${track.title} Cover`}
          width={600}
          height={600}
          sizes="(min-width: 768px) 352px, 100vw"
          priority
          className="aspect-square w-full border-2 border-paper object-cover shadow-[10px_10px_0_#e0001a]"
        />
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.3em] text-blood">
            {(index + 1).toString().padStart(2, "0")} /{" "}
            {tracks.length.toString().padStart(2, "0")}
          </p>
          <h1
            className={cn(
              "mb-3 text-5xl uppercase leading-[0.95] md:text-6xl",
              anton.className
            )}
          >
            {track.title}
          </h1>
          {track.tagline && (
            <p className="text-sm text-paper/70">{track.tagline}</p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <PlayButton trackId={track.id} />
            {track.youtube && (
              <a
                href={track.youtube}
                target="_blank"
                title="Youtube"
                id="streaming-link"
                className={cn(
                  "inline-flex items-center gap-x-3 border-2 border-paper px-6 py-[10px] text-2xl uppercase tracking-wide hover:border-blood hover:text-blood",
                  anton.className
                )}
              >
                <FaYoutube size={22} />
                Video
              </a>
            )}
          </div>
        </div>
      </section>

      <nav className="grid grid-cols-2 border-t-2 border-paper text-xs uppercase tracking-widest">
        <div className="py-4">
          {previous && (
            <Link href={`/${previous.id}`} className="hover:text-blood">
              ← {previous.title}
            </Link>
          )}
        </div>
        <div className="py-4 text-right">
          {next && (
            <Link href={`/${next.id}`} className="hover:text-blood">
              {next.title} →
            </Link>
          )}
        </div>
      </nav>
    </main>
  );
};

export default TrackPage;
