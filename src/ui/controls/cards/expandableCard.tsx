import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "wouter";

export enum CardTypes {
  NEXTVIEW = "border border-solid border-grey-border gap-x-2"
}

export interface CardProps {
  type?: CardTypes;
  text: React.ReactNode;
  navigate?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  cardClasses?: string;
  onClick?: Function;
}

export function Card(props: CardProps) {
  const { type = CardTypes.NEXTVIEW, text, navigate = "#", iconLeft, iconRight, cardClasses = "", onClick= () => {} } = props;
  const classes = twMerge(`flex bg-white text-start text-grey- items-center text-base px-3 py-3 rounded-button ${type} ${cardClasses}`);

  return (
    <Link to={navigate} onClick={() => onClick()}>
      <button className={classes}>
        {iconLeft}
        {text}
        {iconRight}
      </button>
    </Link>
  );
}
