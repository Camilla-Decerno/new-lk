import React, { FC, ReactElement } from "react";
import { ProductListing } from "../../../models/productListing";

interface Props {
  products: ProductListing[];
  ProductLink: FC<{
    productId: number;
    children: ReactElement | ReactElement[];
  }>;
}

export function ProductsListingView({ products, ProductLink }: Props) {
  return (
    <div>
      <ul>
        {products.map((product) => (
          <SingleProductItemView
            key={product.id}
            product={product}
            ProductLink={ProductLink}
          />
        ))}
      </ul>
    </div>
  );
}

interface SingleProductItemViewProps {
  product: ProductListing;
  ProductLink: FC<{
    productId: number;
    children: ReactElement | ReactElement[];
  }>;
}
function SingleProductItemView({
  product,
  ProductLink,
}: SingleProductItemViewProps) {
  return (
    <li>
      <ProductLink productId={product.id}>
        <strong>{product.title}</strong>
      </ProductLink>
      <br />
      <img src={product.thumbnail} style={{ width: "4em" }} />
      <br />
      <span>{product.description}</span>
    </li>
  );
}
