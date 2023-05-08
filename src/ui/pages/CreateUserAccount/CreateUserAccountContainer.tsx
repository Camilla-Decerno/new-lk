import React from "react";
import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { CreateUserAccountView } from "./CreateUserAccountView";
import { PageView } from "../PageView";

export function CreateUserAccountContainer() {
  const header = <PageHeaderContainer />;
  const page = <CreateUserAccountView />;

  return <PageView header={header}>{page}</PageView>;
}
