import { faBell, faPen } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContainer from "../../containers/CardContainer";
import { Button, ButtonTypes } from "../../controls/buttons/Button";
import { Header } from "../../controls/labels/Header";
import { CardField } from "../../controls/cards/CardField";
import LabelAndInfo from "../../controls/labels/LabelAndInfo";
import { Routes } from "../../../AppRouter";

export function SignedInStartPageView() {
  return (
    <>
      <Header text={"Välkommen till Ledningskollen"} />

      <CardContainer
        elements={[
          <Button
            type={ButtonTypes.ORANGE}
            text="Skapa ärende"
            navigate={Routes.CREATECASE}
            iconLeft={
              <FontAwesomeIcon
                icon={faPen}
                className=" h-6 w-6"
              />
            }
          />,
          <CardField
            iconLeft={
              <FontAwesomeIcon
                icon={faBell}
                className="text-orange-primary"
              />
            }
            element={
              <LabelAndInfo
                primaryText={"Aviseringar"}
                secondaryText={"3 att göra, 2 meddelanden"}
              />
            }></CardField>,
          <CardField
            iconLeft={
              <FontAwesomeIcon
                icon={faBell}
                className="text-orange-primary"
              />
            }
            element={
              <LabelAndInfo
                primaryText={"Mina ärenden"}
                secondaryText={"7 öppna ärenden"}
              />
            }></CardField>,
          <CardField
            iconLeft={
              <FontAwesomeIcon
                icon={faBell}
                className="text-orange-primary"
              />
            }
            element={
              <LabelAndInfo
                primaryText={"Sparade utkast"}
                secondaryText={"2 sparade utkast"}
              />
            }></CardField>,
        ]}></CardContainer>
    </>
  );
}
