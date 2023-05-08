import React from "react";
import { ProductDetailsContainer } from "../parts/products/ProductDetailsContainer";
import { PageHeaderContainer } from "./PageHeader/PageHeaderContainer";
import { PageView } from "./PageView";

type Props = {
  productId: number;
};
export function ProductDetailsPageContainer({ productId }: Props) {
  const header = <PageHeaderContainer />;
  const productDetails = <ProductDetailsContainer productId={productId} />;

  return <PageView header={header}>{productDetails}</PageView>;
}
