import { faDigging, faMagnifyingGlass, faRulerTriangle } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardContainer from "../../containers/CardContainer";
import { Header, HeaderTypes } from "../../controls/labels/Header";
import { CardField } from "../../controls/cards/CardField";
import Label from "../../controls/labels/Label";
import { Text14 } from "../../controls/smallComponents/texts/Text14";
import { Button, ButtonTypes } from "../../controls/buttons/Button";
import HorizontalButtonContainer from "../../containers/SideToSideButtonContainer";
import { Text16SemiBold } from "../../controls/smallComponents/texts/Text16SemiBold";
import { HeaderWithLink } from "../../controls/labels/HeaderWithLink";
import { Routes } from "../../../AppRouter";

export interface IChooseCaseProps {}

export default function ChooseCaseView(props: IChooseCaseProps) {
  return (
    <>
      <HeaderWithLink
        text={"Typ av arbete"}
        linkText={"Startsidan"}
        id="ChooseCaseHeader"
        navigate={Routes.START}
      />

      <CardContainer
        elements={[
          <CardField
            element={
              <Label
                text={
                  <Text14
                    text={
                      <>
                        Jag ska <strong>utföra</strong> ett markarbete
                      </>
                    }></Text14>
                }
              />
            }
            iconLeft={
              <FontAwesomeIcon
                icon={faDigging}
                className="text-orange-primary"
              />
            }></CardField>,
          <CardField
            element={
              <Label
                text={
                  <Text14
                    text={
                      <>
                        Jag vill <strong>planera eller projektera</strong> ett framtida markarbete
                      </>
                    }></Text14>
                }
              />
            }
            iconLeft={
              <FontAwesomeIcon
                icon={faRulerTriangle}
                className="text-orange-primary"
              />
            }></CardField>,
          <CardField
            element={
              <Label
                text={
                  <Text14
                    text={
                      <>
                        Jag vill <strong>veta var ledningarna finns</strong> men ska inte utföra något markarbete
                      </>
                    }></Text14>
                }
              />
            }
            iconLeft={
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-orange-primary"
              />
            }></CardField>,
        ]}></CardContainer>
      <HorizontalButtonContainer
        buttonLeft={
          <Button
            navigate={Routes.START}
            type={ButtonTypes.CANCEL}
            text={<Text16SemiBold text="Avbryt" />}
          />
        }></HorizontalButtonContainer>
    </>
  );
}
