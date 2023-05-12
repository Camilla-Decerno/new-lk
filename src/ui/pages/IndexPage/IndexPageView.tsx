import { ReactElement } from "react";

interface Props {
  page: ReactElement;
}
export function IndexPageView({ page }: Props) {
  return (
      {page}
  );
}
