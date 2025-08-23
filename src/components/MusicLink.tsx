import { cn } from "@/app/utils";
import React from "react";

const MusicLink = ({
  href,
  icon,
  label,
  id,
  iconBackgroundClass = "",
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  id?: string;
  iconBackgroundClass?: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      title={label}
      id={id}
      className="relative flex items-center gap-x-2 mb-4  rounded-sm  w-[400px] bg-stone-900 px-4 py-8 h-[50px]"
    >
      <div
        className={cn([
          "absolute w-4 h-4 bg-white left-[20px] top-[25px]-z-10",
          iconBackgroundClass,
        ])}
      ></div>
      {icon}
      <p className="text-white font-bold">{label}</p>
      <span className="ml-auto block py-1 px-5 rounded-sm border-white text-white  border-2">
        Play
      </span>
    </a>
  );
};

export default MusicLink;
