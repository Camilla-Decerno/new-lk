import React, { ReactElement } from "react";

interface Props {
  header: ReactElement;
  children: ReactElement | ReactElement[];
}

export function PageView({ header, children }: Props) {
  return (
    <div className="mx-3 h-screen">
      {header}
      {children}
    </div>
  );
}
