import React, { MouseEventHandler, TouchEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "wouter";

export enum ButtonTypes {
  PRIMARY = "h-11 bg-blue-primary hover:bg-blue-primaryHover min-w-[160px] flex-row gap-x-2",
  SECONDARY = "h-11 hover:bg-blue-secondaryHover text-blue-primary bg-blue-secondary gap-x-2 min-w-2.5",
  ORANGE = "h-17.5 bg-orange-primary w-full self-center md:w-80 gap-x-2",
  ORANGEROUND = "bg-orange-primary w-20 h-20 rounded-full align-text-top flex-col-reverse",
  CANCEL = "h-11 bg-white border border-solid hover:bg-grey-background text-red-primary border-red-primary min-w-[124px] w-fit",
  MENU = "h-9 bg-white w-fit flex-col text-grey-textAndIcon",
  MENUITEMS = "bg-white h-16 text-grey-darkTextAndIcon p14 justify-start w-full border-b border-solid border-grey-borderLight rounded-none",
}

export interface ButtonProps {
  type?: ButtonTypes;
  text: React.ReactNode;
  navigate?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  className?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const { type = ButtonTypes.PRIMARY, text, navigate = "#", iconLeft, iconRight, className: className = "", onClick = () => {} } = props;
  let classes = twMerge(`flex justify-center items-center text-white py-3 rounded-button bg-white ${type} ${className}`);

  return (
    <Link
      to={navigate}
      onClick={onClick}>
      <button className={classes}>
        {iconLeft}
        {text}
        {iconRight}
      </button>
    </Link>
  );
}
