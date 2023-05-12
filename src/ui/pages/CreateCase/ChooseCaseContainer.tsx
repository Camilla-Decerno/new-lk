import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { PageView } from "../PageView";
import ChooseCaseView from "./ChooseCaseView";

export function ChooseCaseContainer() {
  const header = <PageHeaderContainer />;
  const page = <ChooseCaseView />;

  return <PageView header={header}>{page}</PageView>;
}
