import React from "react";
import { useProductDetailsData } from "../../../data/products/useProductDetailsData";
import { DataNotReadyIndicationView } from "../common/DataNotReadyIndicationView";
import { ProductDetailsView } from "./ProductDetailsView";

interface Props {
  productId: number;
}

export function ProductDetailsContainer({ productId }: Props) {
  const productData = useProductDetailsData(productId);

  if (!productData.hasData) {
    return <DataNotReadyIndicationView data={productData} />;
  }

  return <ProductDetailsView product={productData.data} />;
}
