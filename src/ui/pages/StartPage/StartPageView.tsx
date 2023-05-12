import { faAddressCard, faUser } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTypes } from "../../controls/buttons/Button";
import CardContainer from "../../containers/CardContainer";
import { CardField } from "../../controls/cards/CardField";
import { Routes } from "../../../AppRouter";
import { Header } from "../../controls/labels/Header";
import Label from "../../controls/labels/Label";

export function StartPageView() {
  return (
    <div
      id="signin-container"
      className="flex flex-col h-full">
      <Header text={"Välkommen till Ledningskollen"} />

      <CardContainer
        elements={[
          <Button
            type={ButtonTypes.ORANGE}
            text="Skapa konto"
            navigate={Routes.CREATEACCOUNT}
            iconLeft={
              <FontAwesomeIcon
                icon={faUser}
                className=" h-6 w-6"
              />
            }
          />,
          <CardField
            element={
              <Label
                text={
                  <p className="text-xs">
                    Logga in med <span className="font-semibold">Mobilt BankID</span>
                  </p>
                }></Label>
            }
            navigate={Routes.BANKIDSIGNIN}
            iconLeft={<i className="bg-icon_bankid h-6 w-8 bg-no-repeat bg-center inline-block"></i>}></CardField>,
          <CardField
            element={
              <Label
                text={
                  <p className="text-xs">
                    Logga in med <span className="font-semibold">användarnamn och lösenord</span>
                  </p>
                }></Label>
            }
            navigate={Routes.USERSIGNIN}
            iconLeft={
              <FontAwesomeIcon
                icon={faAddressCard}
                className="text-orange-primary h-6 w-6"
              />
            }></CardField>,
        ]}
      />
      <div className="flex flex-col absolute bottom-0 left-0">
        <div className="bg-background_earth h-2 w-full"></div>
        <div className="bg-beige-image h-40 w-full p-3 text-xs">
          <p className="pb-3 pt-6"> Genom att logga in accepterar du Ledningskollens användarvillkor och hantering av personuppgifter. Nödvändiga kakor kommer att användas.</p>
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
