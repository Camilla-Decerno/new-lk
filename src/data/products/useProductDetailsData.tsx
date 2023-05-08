import useSWR from "swr";
import { ProductDetails } from "../../models/productDetails";
import { useSWRDataBearer } from "../swr/useSWRDataBearer";

export function useProductDetailsData(productId: number) {
  const data = useSWR(`https://dummyjson.com/auth/products/${productId}`);

  return useSWRDataBearer<ProductDetails>(data);
}
