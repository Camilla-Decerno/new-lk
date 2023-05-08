import * as React from "react";
import { expect, test } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductDetailsView } from "./ProductDetailsView";

test("rating is displayed as percent", async () => {
  // ARRANGE
  const props: Parameters<typeof ProductDetailsView>[0] = {
    product: {
      id: 1,
      description: "",
      images: [],
      price: 1,
      rating: 2.2,
      title: "",
    },
  };
  render(<ProductDetailsView {...props} />);

  // ACT
  await screen.findByText("Price");

  // ASSERT
  expect(screen.getByText("22%")).toBeDefined();
});
