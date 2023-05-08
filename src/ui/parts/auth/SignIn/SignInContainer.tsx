import React from "react";
import { useAuthState, useSignIn } from "../../../../contexts/authContext";
import { LoadingIndicationView } from "../../common/LoadingIndicationView";
import { UserSignInView } from "./UserSignInView";
import { PageHeaderContainer } from "../../../pages/PageHeader/PageHeaderContainer";

export function SignInContainer() {
  const header = <PageHeaderContainer />;
  const authState = useAuthState();
  const onSignIn = useSignIn();

  function handleSignIn(username: string, password: string) {
    onSignIn(username, password);
  }
  if (authState.status !== "none") {
    return <LoadingIndicationView />;
  }

  return (
    <UserSignInView
      header={header}
      onSignIn={handleSignIn}
    />
  );
}
