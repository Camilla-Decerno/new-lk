import React from "react";
import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { StartPageView } from "./StartPageView";
import { PageView } from "../PageView";

export function StartPageContainer() {
  const header = <PageHeaderContainer />;
  const page = <StartPageView></StartPageView> ;

  return <PageView header={header}>{page}</PageView>;
}
