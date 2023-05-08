import React from "react";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string | React.ReactNode;
  children?: React.ReactNode;
  // ... your custom props here
}

export const A14: React.FunctionComponent<LinkProps> = ({text, ...rest}) => {
  return <a className="text-14 font-normal text-blue-link underline" {...rest}>{text}</a>;
};