import { useState } from "react";
import { Link } from "wouter";
import { Button, ButtonTypes } from "../../controls/buttons/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/pro-light-svg-icons";
import MainMenu from "../../controls/menus/MainMenu";
import { Routes } from "../../../AppRouter";

export function PageHeaderView() {
  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <div
      id="header"
      className="flex flex-row justify-between h-14 items-center bg-white drop-shadow-sm -mx-3 px-5">
      <Link to={Routes.START}>
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
      {showMenu && <MainMenu showMainMenu={toggleMenu} />}
    </div>
  );
}
