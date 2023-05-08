import React, { ReactElement } from "react";
import { Link } from "wouter";
import { useProductsListingData } from "../../../data/products/useProductsListingData";
import { DataNotReadyIndicationView } from "../common/DataNotReadyIndicationView";
import { ProductsListingView } from "./ProductsListingView";

export function ProductsListingContainer() {
  const productsData = useProductsListingData();

  if (!productsData.hasData) {
    return <DataNotReadyIndicationView data={productsData} />;
  }

  return (
    <ProductsListingView
      products={productsData.data}
      ProductLink={ProductLink}
    />
  );
}

function ProductLink({
  productId,
  children,
}: {
  productId: number;
  children: ReactElement | ReactElement[];
}) {
  return (
    <Link to={`/product/${productId}`}>
      <a>{children}</a>
    </Link>
  );
}
