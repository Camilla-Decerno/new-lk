import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTypes } from "../../../controls/buttons/Button";
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import InputContainer from "../../../containers/InputContainer";
import HorizontalButtonContainer from "../../../containers/SideToSideButtonContainer";
import { useSignIn } from "../../../../contexts/authContext";
import { useState } from "react";
import DottedSpinner from "../../../controls/smallComponents/spinners/DottedSpinner";
import { Routes } from "../../../../AppRouter";

export function BankIDSignInView() {
  const onSignIn = useSignIn();
  const [showDevises, setShowDevises] = useState(false);

  function handleSignIn() {
    onSignIn("kmeus4", "aUTdmmmbH");
  }

  function setDevices() {
    setShowDevises(true);
  }

  return (
    <>
      <div
        id="signin-container"
        className="flex flex-col">
        <h1 className="mb-12 font-bold text-center mt-7">Logga in med Mobilt BankID</h1>
      </div>

      {!showDevises && (
        <div>
          <div
            id="signin-container"
            className="flex flex-col">
            <InputContainer
              elements={[
                {
                  labelText: "Personnummer",
                  input: (
                    <input
                      className="h-10 border-grey-border border"
                      type="number"
                      id="signinUser"
                    />
                  ),
                },
              ]}
            />
          </div>
          <div
            id="signin-container"
            className="flex flex-col">
            <HorizontalButtonContainer /*TODO: Borde dessa inehålla buttons helt? Innebär med propdrilling*/
              buttonLeft={
                <Button
                  text="Tillbaka"
                  type={ButtonTypes.SECONDARY}
                  navigate={Routes.START}
                />
              }
              buttonRight={
                <Button
                  text="Logga in"
                  type={ButtonTypes.PRIMARY}
                  iconRight={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}
                  onClick={setDevices}
                />
              }
            />
          </div>
        </div>
      )}

      {showDevises && (
        <div>
          <p className="text-center mb-10">Öppna BankID-appen på din enhet och följ instruktionerna.</p>
          <DottedSpinner />
          <div
            id="signin-container"
            className="flex flex-col">
            <HorizontalButtonContainer /*TODO: Borde dessa inehålla buttons helt? Innebär med propdrilling*/
              className="flex-col-reverse gap-y-8"
              buttonLeft={
                <Button
                  text="Mobild BankID på annan enhet"
                  type={ButtonTypes.SECONDARY}
                  navigate={Routes.START}
                  onClick={handleSignIn}
                />
              }
              buttonRight={
                <Button
                  text="Mobilt BankID på denna enhet"
                  type={ButtonTypes.PRIMARY}
                  onClick={handleSignIn}
                />
              }
            />
          </div>
        </div>
      )}
    </>
  );
}
