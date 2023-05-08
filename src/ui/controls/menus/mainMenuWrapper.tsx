import * as React from "react";
import { Button, ButtonTypes } from "../buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faInfoCircle, faSignIn, faUser } from "@fortawesome/pro-light-svg-icons";
import { useAuthState } from "../../../contexts/authContext";
import { useState } from "react";
import MainMenu from "./mainMenu";
import MainMenuSignedIn from "./mainMenuSigned";

export interface IMainMenuWrapperProps {}

export default function MainMenuWrapper(props: IMainMenuWrapperProps) {
  const [loggedIn, setLoggedIn] = useState(false);
  const authState = useAuthState();

  React.useEffect(() => {
    if (authState.status === "valid") {
      setLoggedIn(true);
    }
  }, [authState]);

  return (
    <>
      {!loggedIn && <MainMenu/>}
      {loggedIn && <MainMenuSignedIn/>}
      <div className="bg-black opacity-10 w-full absolute left-0 -bottom-screen h-screen -z-10"></div>
    </>
  );
}
