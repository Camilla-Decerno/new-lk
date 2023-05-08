import * as React from "react";
import { Button, ButtonTypes } from "../controls/buttons/button";
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ISideToSideButtonsProps {
  button1: React.ReactElement;
  button2: React.ReactElement;
//   button3: { text: string; type: ButtonTypes, iconRight?: JSX.Element, iconLeft?: JSX.Element };
//   button4: { text: string; type: ButtonTypes, iconRight?: JSX.Element, iconLeft?: JSX.Element };
}

export default function SideToSideButtons(props: ISideToSideButtonsProps) {
  return (
        <div className="flex justify-center w-full my-8">
          <div className="flex flex-row tiny:flex-col tiny:gap-y-3 gap-x-8">
            {props.button1}
            {props.button2}
          </div>
        </div>
//     <div className="flex justify-center w-full my-8">
//       <div className="flex flex-row tiny:flex-col tiny:gap-y-3 gap-x-8">
//           <Button
//             text={props.button3.text}
//             type={props.button3.type}
//             iconRight={props.button3.iconLeft}
//           />
//           <Button
//             text={props.button4.text}
//             type={props.button4.type}
//             iconRight={props.button4.iconLeft}
//           />
//       </div>
//     </div>
  );
}
