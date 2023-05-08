import React, { ReactElement } from "react";
import { PageView } from "../PageView";

interface Props {
  header: ReactElement;
  products: ReactElement;
}
export function IndexPageView({ header, products }: Props) {
  return (
    <PageView header={header}>
      {products}
    </PageView>
  );
}
