/** Decides which page to render depending on browser location/address */

import { CreateAccountContainer } from "./ui/pages/CreateAccount/CreateAccountContainer";
import { ChooseCaseContainer } from "./ui/pages/CreateCase/ChooseCaseContainer";
import { IndexPageContainer } from "./ui/pages/IndexPage/IndexPageContainer";
import { NotFoundPageView } from "./ui/pages/NotFoundPageView";
import { SignInPageContainer, SignInType } from "./ui/pages/SignInPageContainer";
import { StartPageContainer } from "./ui/pages/StartPage/StartPageContainer";
import { Router, Switch, Route } from "wouter";

export enum Routes {
  ROOT = "/",
  START = "/start",
  USERSIGNIN = "/usersignin",
  BANKIDSIGNIN = "/bankidsignin",
  CREATEACCOUNT = "/createAccount",
  CREATECASE = "/chooseCaseContainer",
}

export function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.ROOT}>
          <IndexPageContainer />
        </Route>
        <Route path={Routes.START}>
          <StartPageContainer />
        </Route>
        <Route path={Routes.USERSIGNIN}>
          <SignInPageContainer type={SignInType.USER} />
        </Route>
        <Route path={Routes.BANKIDSIGNIN}>
          <SignInPageContainer type={SignInType.BANKID} />
        </Route>
        <Route path={Routes.CREATEACCOUNT}>
          <CreateAccountContainer />
        </Route>
        <Route path={Routes.CREATECASE}>
          <ChooseCaseContainer />
        </Route>
        <Route>
          <NotFoundPageView />
        </Route>
      </Switch>
    </Router>
  );
}
