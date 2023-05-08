import React, { FC, ReactElement, useState } from "react";
import { Link, navigate } from "wouter";
import { Button, ButtonTypes } from "../../controls/buttons/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import MainMenuWrapper from "../../controls/menus/mainMenuWrapper";

interface Props {
  homeLink: string;
  userName: string | null;
  SignInLink: FC<{ children: ReactElement }> | null;
  onSignOut: (() => void) | null;
}

export function PageHeaderView({ homeLink, userName, SignInLink, onSignOut }: Props) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      id="header"
      className="flex flex-row justify-between h-14 items-center bg-white drop-shadow-sm -mx-3 px-5">
      <Link to="/start">
        <div className="cursor-pointer bg-no-repeat bg-contain w-44 h-7 bg-logo_lk_big"></div>
      </Link>
      <Button
        type={ButtonTypes.MENU}
        text={<p className="text-xs">Menu</p>}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
        iconLeft={<FontAwesomeIcon icon={faBars} />}
      />
      {showMenu && <MainMenuWrapper />}
      {/* <MainMenu /> */}
    </div>
  );
}
