import React, { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuthState } from "../../contexts/authContext";
import { SignInContainer } from "../parts/auth/SignIn/SignInContainer";
import { PageHeaderContainer } from "./PageHeader/PageHeaderContainer";
import { PageView } from "./PageView";

export function SignInPageContainer() {
  const [, setLocation] = useLocation();
  const authState = useAuthState();

  useEffect(() => {
    if (authState.status === "valid") {
      setLocation("/");
    }
  }, [authState]);

  const header = <PageHeaderContainer />;
  const signIn = <SignInContainer />;

  return <PageView header={header}>{signIn}</PageView>;
}
