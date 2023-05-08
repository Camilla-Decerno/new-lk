import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faUsers, faSparkles } from "@fortawesome/pro-light-svg-icons";
import { Button, ButtonTypes } from "../../controls/buttons/button";
import { Card, CardTypes } from "../../controls/cards/card";
import { P16SemiBold } from "../../controls/smallComponents/Texts/P16SemiBold";

export function CreateUserAccountView() {
  return (
    <div
      id="CreateAccountViewContent"
      className="flex flex-col items-center">
      <h1 className="text-center h-28 pt-7">Skapa konto</h1>
      <P16SemiBold
        text="Välj kontotyp"
        className="pb-3 self-start"
      />
      <Card
        className="mb-3"
        navigate="/createUserAccount"
        type={CardTypes.NEXTVIEW}
        text={
          <p className="text-xs mr-11 ml-5">
            <span className="font-semibold">Privatkonto</span> för markarbeten på privat fastighet eller tomt.
          </p>
        }
        iconRight={
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-grey-icon"
          />
        }
        iconLeft={
          <FontAwesomeIcon
            icon={faSparkles}
            className="text-orange-primary"
          />
        }
      />
      <Card
        className="mb-8"
        type={CardTypes.NEXTVIEW}
        text={
          <p className="text-xs mr-11 ml-5">
            <span className="font-semibold">Företag eller organisation</span> för markarbeten i tjänsten.
          </p>
        }
        iconRight={
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-grey-icon"
          />
        }
        iconLeft={
          <FontAwesomeIcon
            icon={faUsers}
            className="text-orange-primary"
          />
        }
      />
      <Button
        type={ButtonTypes.CANCEL}
        text={<p>Avbryt</p>}
        navigate="/start"
      />
    </div>
  );
}
