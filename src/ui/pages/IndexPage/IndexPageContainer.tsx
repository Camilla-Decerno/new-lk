import React from "react";
import { useAuthState } from "../../../contexts/authContext";
import { NotLoggedInView } from "../../parts/common/NotLoggedInView";
import { ProductsListingContainer } from "../../parts/products/ProductsListingContainer";
import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { IndexPageView } from "./IndexPageView";

export function IndexPageContainer() {
  const authState = useAuthState();
  const header = <PageHeaderContainer />;

  const products = authState.status === "valid" ? <ProductsListingContainer /> : <NotLoggedInView />;

  return (
    <IndexPageView
      header={header}
      products={products}
    />
  );
}
