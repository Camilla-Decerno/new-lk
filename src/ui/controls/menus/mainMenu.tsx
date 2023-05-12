import { Button, ButtonTypes } from "../buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faFile, faHouse, faInfoCircle, faPen, faSignIn, faSignOut, faUser } from "@fortawesome/pro-light-svg-icons";
import { useAuthState, useSignOut } from "../../../contexts/authContext";
import { useEffect, useState } from "react";
import { Routes } from "../../../AppRouter";

export interface IMainMenu {
  showMainMenu: () => void;
}

export default function MainMenu(props: IMainMenu) {
  const authState = useAuthState();
  const [signedIn, setSignedIn] = useState(false);
  const onSignOut = useSignOut();

  useEffect(() => {
    setSignedIn(authState.status === "valid");
  }, [authState]);

  function closeOnSignOut() {
    onSignOut();
    props.showMainMenu()
  }
  
  const iconClass = "text-orange-primary pr-5 h-6 w-6";
  return (
    <>
      {signedIn && (
        <div className="flex flex-col pl-5 w-80 h-screen bg-white absolute -bottom-screen right-0 z-50 border-t border-grey-borderLight">
          <Button
            text="Start"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.START}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faHouse}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Skapa ärende"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.ROOT}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faPen}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Aviseringar"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.ROOT}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faBell}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Mina ärenden"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.ROOT}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faFile}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Sparade utkast"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.ROOT}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faFile}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Mina inställningar"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.ROOT}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faCog}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Språk (Svenska)"
            onClick={props.showMainMenu}
            type={ButtonTypes.MENUITEMS}
            iconLeft={<i className="bg-icon_sweden h-6 w-6 bg-no-repeat bg-center inline-block mr-5"></i>}
          />
          <Button
            text="Ledningskollens ärendeprocess"
            type={ButtonTypes.MENUITEMS}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faInfoCircle}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Logga ut"
            type={ButtonTypes.MENUITEMS}
            onClick={closeOnSignOut}
            iconLeft={
              <FontAwesomeIcon
                icon={faSignOut}
                className={`${iconClass}`}
              />
            }
          />
          <a
            href="#"
            className="link14">
            Vanliga frågor
          </a>
        </div>
      )}

      {!signedIn && (
        <div className="flex flex-col pl-5 w-80 h-screen bg-white absolute -bottom-screen right-0 z-50 border-t border-grey-borderLight">
          <Button
            text="Start"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.START}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faHouse}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Skapa konto"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.CREATEACCOUNT}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faUser}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Logga in"
            type={ButtonTypes.MENUITEMS}
            navigate={Routes.START}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faSignIn}
                className={`${iconClass}`}
              />
            }
          />
          <Button
            text="Språk (Svenska)"
            type={ButtonTypes.MENUITEMS}
            onClick={props.showMainMenu}
            iconLeft={<i className="bg-icon_sweden h-6 w-6 bg-no-repeat bg-center inline-block mr-5"></i>}
          />
          <Button
            text="Ledningskollens ärendeprocess"
            type={ButtonTypes.MENUITEMS}
            onClick={props.showMainMenu}
            iconLeft={
              <FontAwesomeIcon
                icon={faInfoCircle}
                className={`${iconClass}`}
              />
            }
          />
          <a
            href="#"
            className="link14">
            Vanliga frågor
          </a>
        </div>
      )}
    </>
  );
}
