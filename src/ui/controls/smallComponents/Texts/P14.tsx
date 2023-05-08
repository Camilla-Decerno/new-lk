import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string | React.ReactNode;
  children?: React.ReactNode;
  // ... your custom props here
}

export const P14: React.FunctionComponent<TextProps> = ({text, ...rest}) => {
  return <p className="text-14 font-normal text-darkTextAndIcon" {...rest}>{text}</p>;
};