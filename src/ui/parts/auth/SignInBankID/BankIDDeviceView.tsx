import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTypes } from "../../../controls/buttons/Button";
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import InputContainer from "../../../containers/InputContainer";
import HorizontalButtonContainer from "../../../containers/SideToSideButtonContainer";
import { useSignIn } from "../../../../contexts/authContext";
import { Routes } from "../../../../AppRouter";

export function BankIDDeviceView() {
  const onSignIn = useSignIn();

  function handleSignIn() {
    onSignIn("kmeus4", "aUTdmmmbH");
  }

  return (
    <>
      <div
        id="signin-container"
        className="flex flex-col">
        <h1 className="mb-12 font-bold text-center mt-7">Logga in med Mobilt BankID</h1>

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
            onClick={handleSignIn}
          />
        }
      />
      <div className="flex justify-center w-full"></div>
    </>
  );
}
