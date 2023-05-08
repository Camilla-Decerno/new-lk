import useSWR from "swr";
import { useSWRDataBearer } from "../swr/useSWRDataBearer";

export function useProductsListingData() {
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/auth/products`
  );

  return useSWRDataBearer({
    data: data != null ? data.products : null,
    error,
    isLoading,
  });
}
