/** Decides which page to render depending on browser location/address */

import { CreateUserAccountContainer } from "./ui/pages/CreateUserAccount/CreateUserAccountContainer";
import { IndexPageContainer } from "./ui/pages/IndexPage/IndexPageContainer";
import { NotFoundPageView } from "./ui/pages/NotFoundPageView";
import { ProductDetailsPageContainer } from "./ui/pages/ProductDetailsPageContainer";
import { SignInPageContainer } from "./ui/pages/SignInPageContainer";
import { StartPageContainer } from "./ui/pages/StartPage/StartPageContainer";
import { Router, Switch, Route } from "wouter";


export function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <IndexPageContainer />
        </Route>
        <Route path="/start">
          <StartPageContainer />
        </Route>
        <Route path="/usersignin">
          <SignInPageContainer />
        </Route>
        <Route path="/bankidsignin">
          <SignInPageContainer />
        </Route>
        <Route path="/startPage">
          <StartPageContainer />
        </Route>
        <Route path="/createUserAccount">
          <CreateUserAccountContainer />
        </Route>
        <Route path="/product/:productId">
          {(params: any) => {
            const userId = numberParam(params, "productId");
            return userId.hasValue ? <ProductDetailsPageContainer productId={userId.value} /> : <NotFoundPageView />;
          }}
        </Route>
        <Route>
          <NotFoundPageView />
        </Route>
      </Switch>
    </Router>
  );
}

type Just<T> = { hasValue: true; value: T };
type Nothing = { hasValue: false };
type Maybe<T> = Just<T> | Nothing;

function numberParam(params: any, name: string): Maybe<number> {
  const raw = params[name];
  const parsed = raw != null ? parseInt(raw, 10) : null;
  return parsed != null && !isNaN(parsed) ? just(parsed) : nothing();
}

function just<T>(value: T): Just<T> {
  return { hasValue: true, value };
}

function nothing(): Nothing {
  return { hasValue: false };
}
