import React, { FC, ReactElement } from "react";
import { Link } from "wouter";
import { useAuthState, useSignOut } from "../../../contexts/authContext";
import { PageHeaderView } from "./PageHeaderView";

export function PageHeaderContainer() {
  const auth = useAuthState();
  const onSignOut = useSignOut();

  const SignInLink: FC<{ children: ReactElement }> = ({ children }) => (
    <Link to="/signin">{children}</Link>
  );

  return (
    <PageHeaderView
      homeLink="/"
      userName={auth.status === "valid" ? auth.name : null}
      SignInLink={auth.status !== "valid" ? SignInLink : null}
      onSignOut={auth.status === "valid" ? onSignOut : null}
    />
  );
}
