import React from "react";

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string | React.ReactNode;
  children?: React.ReactNode;
  // ... your custom props here
}

export const P16SemiBold: React.FunctionComponent<TextProps> = ({text, ...rest}) => {
  rest.className += " text-16 font-semibold text-darkTextAndIcon";
  return <p {...rest}>{text}</p>;
};