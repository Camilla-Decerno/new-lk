import * as React from "react";
import { Button, ButtonTypes } from "../buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCog, faFile, faHouse, faInfoCircle, faPen, faSignIn, faSignOut, faUser } from "@fortawesome/pro-light-svg-icons";
import { useAuthState } from "../../../contexts/authContext";
import { useState } from "react";

export interface IMainMenuSignedInProps {}

export default function MainMenuSignedIn(props: IMainMenuSignedInProps) {
  return (
    <>
      <div className="flex flex-col w-80 h-screen bg-white absolute -bottom-screen right-0 z-50 border-t border-grey-borderLight">
        <Button
          text="Start"
          type={ButtonTypes.MENUITEMS}
          navigate="/start"
          iconLeft={
            <FontAwesomeIcon
              icon={faHouse}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Skapa ärende"
          type={ButtonTypes.MENUITEMS}
          navigate="/"
          iconLeft={
            <FontAwesomeIcon
              icon={faPen}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Aviseringar"
          type={ButtonTypes.MENUITEMS}
          navigate="/"
          iconLeft={
            <FontAwesomeIcon
              icon={faBell}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Mina ärenden"
          type={ButtonTypes.MENUITEMS}
          navigate="/"
          iconLeft={
            <FontAwesomeIcon
              icon={faFile}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Sparade utkast"
          type={ButtonTypes.MENUITEMS}
          navigate="/"
          iconLeft={
            <FontAwesomeIcon
              icon={faFile}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Mina inställningar"
          type={ButtonTypes.MENUITEMS}
          navigate="/"
          iconLeft={
            <FontAwesomeIcon
              icon={faCog}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Språk (Svenska)"
          type={ButtonTypes.MENUITEMS}
          iconLeft={<i className="bg-icon_sweden h-6 w-6 bg-no-repeat bg-center inline-block mr-5"></i>}
        />
        <Button
          text="Ledningskollens ärendeprocess"
          type={ButtonTypes.MENUITEMS}
          iconLeft={
            <FontAwesomeIcon
              icon={faInfoCircle}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Logga ut"
          type={ButtonTypes.MENUITEMS}
          iconLeft={
            <FontAwesomeIcon
              icon={faSignOut}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <a
          href="#"
          className="link14">
          Vanliga frågor
        </a>
      </div>
    </>
  );
}
