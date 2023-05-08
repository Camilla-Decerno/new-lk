import * as React from 'react';
import { Button, ButtonTypes } from '../buttons/button';
import {
  faHouse,
  faInfoCircle,
  faSignIn,
  faUser
  } from '@fortawesome/pro-light-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IMainMenuProps {}

export default function MainMenu(props: IMainMenuProps) {
  return (
    <>
      <div className="flex flex-col pl-5 w-80 h-screen bg-white absolute -bottom-screen right-0 z-50 border-t border-grey-borderLight">
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
          text="Skapa konto"
          type={ButtonTypes.MENUITEMS}
          navigate="/createUserAccount"
          iconLeft={
            <FontAwesomeIcon
              icon={faUser}
              className="text-orange-primary pr-5 h-6 w-6"
            />
          }
        />
        <Button
          text="Logga in"
          type={ButtonTypes.MENUITEMS}
          navigate="/start"
          iconLeft={
            <FontAwesomeIcon
              icon={faSignIn}
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
        <a
          href="#"
          className="link14">
          Vanliga frågor
        </a>
      </div>
    </>
  );
}
