import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuthState } from "../../contexts/authContext";
import { SignInContainer } from "../parts/auth/SignIn/SignInContainer";
import { PageHeaderContainer } from "./PageHeader/PageHeaderContainer";
import { PageView } from "./PageView";
import { BankIDSignInContainer } from "../parts/auth/SignInBankID/BankIDSignInContainer";
import { Routes } from "../../AppRouter";

export enum SignInType {
  USER = "user",
  BANKID = "bankid",
}

export function SignInPageContainer(props: { type: SignInType }) {
  const [, setLocation] = useLocation();
  const authState = useAuthState();

  useEffect(() => {
    if (authState.status === "valid") {
      setLocation(Routes.START);
    }
  }, [authState, props.type, setLocation]);

  const header = <PageHeaderContainer />;
  let signIn = <></>;

  switch (props.type) {
    case SignInType.USER:
      signIn = <SignInContainer />;
      break;
    case SignInType.BANKID:
      signIn = <BankIDSignInContainer />;
      break;
    default:
      break;
  }

  return <PageView header={header}>{signIn}</PageView>;
}
