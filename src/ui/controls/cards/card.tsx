import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "wouter";

export enum CardTypes {
  NEXTVIEW = "border border-solid border-grey-border gap-x-2",
}

export interface CardProps {
  type?: CardTypes;
  text: string | React.ReactNode;
  navigate?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  className?: string;
  onClick?: Function;
}

export function Card(props: CardProps) {
  const { type = CardTypes.NEXTVIEW, text, navigate = "#", iconLeft, iconRight, className: className = "", onClick = () => {} } = props;
  const classes = twMerge(`flex justify-between w-full min-h-17.5 bg-white text-start text-grey-textAndIcon items-center px-3 py-3 rounded-button ${type} ${className}`);

  return (
    <Link
      to={navigate}
      onClick={() => onClick()}>
      <button className={classes}>
        {iconLeft}
        {text}
        {iconRight}
      </button>
    </Link>
  );
}
