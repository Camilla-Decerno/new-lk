import React from "react";
import { Link } from "wouter";

export interface LinkProps {
  text: string | React.ReactNode;
  navigate: string;
  onClick?: () => void;
  // ... your custom props here
}

export function Link14(props: LinkProps) {
  const { text, navigate, onClick } = props;

  return (
    <Link
      to={navigate}
      onClick={onClick}
      className="text-14 font-normal text-blue-link underline cursor-pointer mb-3">
      {props.text}
    </Link>
  );
}
