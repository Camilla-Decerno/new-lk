import React from "react";
import { twMerge } from "tailwind-merge";

export enum HeaderTypes {
  MAINHEADER = "items-center",
  LEFTHEADER = ""
}

export interface HeaderProps {
  type?: HeaderTypes;
  text: React.ReactNode | string;
  id?: string;
  className?: string;
}

export function Header(props: HeaderProps) {
  const { type = HeaderTypes.MAINHEADER, id: id = undefined, text, className: className = "" } = props;
  const classes = twMerge(`flex text-white py-3 rounded-button px-3 ${type} ${className}`);

  return (
    <div
      id={id}
      className={`flex flex-col ${classes}`}>
      <h1 className="mb-12 font-bold mt-7">{text}</h1>
    </div>
  );
}
