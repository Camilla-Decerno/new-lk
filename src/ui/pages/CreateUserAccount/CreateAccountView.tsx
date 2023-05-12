import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSparkles } from "@fortawesome/pro-light-svg-icons";
import { Button, ButtonTypes } from "../../controls/buttons/Button";
import { Text16SemiBold } from "../../controls/smallComponents/texts/Text16SemiBold";
import { CardField } from "../../controls/cards/CardField";
import CardContainer from "../../containers/CardContainer";
import { Routes } from "../../../AppRouter";

export function CreateUserAccountView() {
  return (
    <div
      id="CreateAccountViewContent"
      className="flex flex-col items-center">
      <h1 className="text-center h-28 pt-7">Skapa konto</h1>
      <Text16SemiBold
        text="Välj kontotyp"
        className="pb-3 self-start"
      />
      <CardContainer
        elements={[
          <CardField
            navigate="/createUserAccount"
            iconLeft={
              <FontAwesomeIcon
                icon={faSparkles}
                className="text-orange-primary"
              />
            }
            element={
              <p className="text-xs mr-11 ml-5">
                <span className="font-semibold">Privatkonto</span> för markarbeten på privat fastighet eller tomt.
              </p>
            }
          />,
          <CardField
            element={
              <p className="text-xs mr-11 ml-5">
                <span className="font-semibold">Företag eller organisation</span> för markarbeten i tjänsten.
              </p>
            }
            iconLeft={
              <FontAwesomeIcon
                icon={faUsers}
                className="text-orange-primary"
              />
            }
          />,
        ]}
      />
      <Button
        type={ButtonTypes.CANCEL}
        text="Avbryt"
        navigate={Routes.START}
      />
    </div>
  );
}
