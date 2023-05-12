import { faAngleRight } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Link } from "wouter";

export enum CardFieldTypes {
  NEXTVIEW = "border border-solid border-grey-border gap-x-4 cursor-pointer",
  NEXTVIEWGREEN = "border border-solid border-green-primary gap-x-4 cursor-pointer",
}

export interface CardFieldProps {
  type?: CardFieldTypes;
  element: React.ReactNode | string;
  navigate?: string;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  className?: string;
  onClick?: () => void;
}

export function CardField(props: CardFieldProps) {
  let { type = CardFieldTypes.NEXTVIEW, element, navigate = "#", iconLeft, iconRight, className: className = "", onClick = () => {} } = props;
  const classes = twMerge(`flex justify-between w-full min-h-17.5 bg-white text-start text-grey-textAndIcon items-center px-3 py-3 rounded-button ${type} ${className}`);

  if (!iconRight && type === CardFieldTypes.NEXTVIEW) {
    iconRight = (
      <FontAwesomeIcon
        icon={faAngleRight}
        className="text-grey-icon h-6 w-6"
      />
    );
  }

  return (
    <Link
      to={navigate}
      onClick={() => onClick()}>
      <div className={classes}>
        {iconLeft}
        {element}
        {iconRight}
      </div>
    </Link>
  );
}
