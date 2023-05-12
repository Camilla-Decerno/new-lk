import { useAuthState } from "../../../contexts/authContext";
import { NotLoggedInView } from "../../parts/common/NotLoggedInView";
import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { PageView } from "../PageView";
import { StartPageContainer } from "../StartPage/StartPageContainer";

export function IndexPageContainer() {
  const authState = useAuthState();
  const header = <PageHeaderContainer />;
  const page = authState.status === "valid" ? <StartPageContainer /> : <NotLoggedInView />;

  return <PageView header={header}>{page}</PageView>;
}
