import { NotFoundView } from "../parts/common/NotFoundView";
import { PageView } from "./PageView";

export function NotFoundPageView() {
  const header = <></>;

  return (
    <PageView header={header}>
      <NotFoundView />
    </PageView>
  );
}
