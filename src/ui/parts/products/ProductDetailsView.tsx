import * as React from "react";
import { ProductDetails } from "../../../models/productDetails";

interface Props {
  product: ProductDetails;
}

export function ProductDetailsView({ product }: Props) {
  const imageUrl = product.images.length !== 0 ? product.images[0] : null;

  return (
    <div>
      <h2>{product.title}</h2>
      {imageUrl && <img src={imageUrl} />}
      <dl>
        <dt>Price</dt>
        <dd>{product.price}</dd>
        <dt>Rating</dt>
        <dd>{Math.round(product.rating * 10)}%</dd>
      </dl>
      <p>{product.description}</p>
    </div>
  );
}
