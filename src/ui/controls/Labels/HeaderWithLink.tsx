import React from "react";
import { twMerge } from "tailwind-merge";
import { Link14 } from "../smallComponents/links/Link14";

export interface HeaderWithLinkProps {
  text: React.ReactNode | string;
  linkText: React.ReactNode | string;
  navigate: string;
  id?: string;
  className?: string;
}

export function HeaderWithLink(props: HeaderWithLinkProps) {
  const {id: id = undefined, text, className: className = "", navigate } = props;
  const classes = twMerge(`flex text-white mt-3 mb-12  rounded-button px-3 ${className}`);

  return (
    <div
      id={id}
      className={`flex flex-col ${classes}`}>
      <Link14 text={props.linkText} navigate={navigate}></Link14>
      <h1 className="font-bold">{text}</h1>
    </div>
  );
}
