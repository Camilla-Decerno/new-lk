import { PageHeaderContainer } from "../PageHeader/PageHeaderContainer";
import { StartPageView } from "./StartPageView";
import { PageView } from "../PageView";
import { useEffect, useState } from "react";
import { useAuthState } from "../../../contexts/authContext";
import { SignedInStartPageView } from "./SignedInStartPageView";

export function StartPageContainer() {
  const header = <PageHeaderContainer />;
  const authState = useAuthState();
  const [signedIn, setSignedIn] = useState(false);
  const page = signedIn ? <SignedInStartPageView /> : <StartPageView />;
  console.log(page.type.name);
  

  useEffect(() => {
    setSignedIn(authState.status === "valid");
  }, [authState]);

  return <PageView header={header}>{page}</PageView>;
}
