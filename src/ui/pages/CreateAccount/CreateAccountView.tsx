import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faSparkles } from "@fortawesome/pro-light-svg-icons";
import { Button, ButtonTypes } from "../../controls/buttons/Button";
import { Text16SemiBold } from "../../controls/smallComponents/texts/Text16SemiBold";
import { CardField } from "../../controls/cards/CardField";
import CardContainer from "../../containers/CardContainer";
import { Routes } from "../../../AppRouter";
import Label from "../../controls/labels/Label";
import { Text14 } from "../../controls/smallComponents/texts/Text14";

export function CreateAccountView() {
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
            navigate={Routes.CREATEACCOUNT}
            iconLeft={
              <FontAwesomeIcon
                icon={faSparkles}
                className="text-orange-primary"
              />
            }
            element={
              <Label
                text={
                  <Text14
                    text={
                      <>
                        <span className="font-semibold">Privatkonto</span> för markarbeten på privat fastighet eller tomt.
                      </>
                    }></Text14>
                }></Label>
            }
          />,
          <CardField
            element={
              <Label
                text={
                  <Text14
                    text={
                      <>
                        <span className="font-semibold">Företag eller organisation</span> för markarbeten i tjänsten.
                      </>
                    }></Text14>
                }></Label>
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
