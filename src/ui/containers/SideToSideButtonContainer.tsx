import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IHorizontalButtonProps {
  buttonLeft: React.ReactElement;
  buttonRight?: React.ReactElement;
  className?: string;
}

export default function HorizontalButtonContainer(props: IHorizontalButtonProps) {
  const classes = twMerge(`flex flex-row tiny:flex-col tiny:gap-y-3 gap-x-8 ${props.className}`);

  return (
    <div className="flex justify-center w-full my-8">
      <div className={classes}>
        {props.buttonLeft}
        {props.buttonRight}
      </div>
    </div>
  );
}
