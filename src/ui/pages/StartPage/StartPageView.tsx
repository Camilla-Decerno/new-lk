import React from "react";
import { faAngleRight, faAddressCard, faUser } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTypes } from "../../controls/buttons/button";
import { Card, CardTypes } from "../../controls/cards/card";
import { A14 } from "../../controls/smallComponents/Links/A14";
import { P12 } from "../../controls/smallComponents/Texts/P12";

export function StartPageView() {
  return (
    <div
      id="signin-container"
      className="flex flex-col">
      <h1 className="mb-12 font-bold text-center mt-7">Välkommen till ledningskollen</h1>
      <div className="flex flex-col [&>*:last-child]:mb-20 gap-y-3">
        <Button
          type={ButtonTypes.ORANGE}
          text="Skapa konto"
          navigate="/createUserAccount"
          iconLeft={
            <FontAwesomeIcon
              icon={faUser}
              className=" h-6 w-6"
            />
          }
        />
        <Card
          type={CardTypes.NEXTVIEW}
          text={
            <p className="text-xs">
              Logga in med <span className="font-semibold">Mobilt BankID</span>
            </p>
          }
          iconRight={
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-grey-icon h-6 w-6"
            />
          }
          iconLeft={<i className="bg-icon_bankid h-6 w-6 bg-no-repeat bg-center inline-block"></i>}
        />
        <Card
          navigate="/userSignin"
          type={CardTypes.NEXTVIEW}
          text={
            <p className="text-xs">
              Logga in med <span className="font-semibold">användarnamn och lösenord</span>
            </p>
          }
          iconRight={
            <FontAwesomeIcon
              icon={faAngleRight}
              className="text-grey-icon  h-6 w-6"
            />
          }
          iconLeft={
            <FontAwesomeIcon
              icon={faAddressCard}
              className="text-orange-primary h-6 w-6"
            />
          }
        />
      </div>
      <div className="self-end flex">
        <div className="bg-background_earth h-2"></div>
        <div className="bg-beige-image h-40 w-full p-3 text-xs">
          <A14 text="Test"></A14>
          <P12 text="This is a test"></P12>
          <p className="pb-3"> Genom att logga in accepterar du Ledningskollens användarvillkor och hantering av personuppgifter. Nödvändiga kakor kommer att användas.</p>
          <a
            href="#"
            className="text-blue-link underline">
            Mer information
          </a>
        </div>
      </div>
    </div>
  );
}
