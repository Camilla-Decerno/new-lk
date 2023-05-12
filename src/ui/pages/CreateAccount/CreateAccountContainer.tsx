import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { CreateAccountView } from "./CreateAccountView";
import { PageView } from "../PageView";

export function CreateAccountContainer() {
  const header = <PageHeaderContainer />;
  const page = <CreateAccountView />;

  return <PageView header={header}>{page}</PageView>;
}
