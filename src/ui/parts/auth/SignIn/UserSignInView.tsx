import React, { ReactElement, useEffect, useState } from "react";
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTypes } from "../../../controls/buttons/Button";
import { useAuthState } from "../../../../contexts/authContext";
import HorizontalButtonContainer from "../../../containers/SideToSideButtonContainer";
import useLocation from "wouter/use-location";
import InputContainer from "../../../containers/InputContainer";
import { Routes } from "../../../../AppRouter";

interface Props {
  header: ReactElement;
  onSignIn: (username: string, password: string) => void;
}

export function UserSignInView({ header, onSignIn }: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [, path] = useLocation();

  const [, setLocation] = useLocation();
  const authState = useAuthState();

  useEffect(() => {
    if (authState.status === "valid") {
      setLocation("/");
    }
  }, [authState]);

  function handleSignIn() {
    onSignIn(username, password);
  }

  return (
    <>
      <div
        id="signin-container"
        className="flex flex-col">
        <h1 className="mb-12 font-bold text-center mt-7">Logga in med användarnamn och lösenord</h1>

        <InputContainer
          elements={[
            {
              labelText: "Användarnamn",
              input: (
                <input
                  className="h-10 border-grey-border border"
                  type="text"
                  id="signinUser"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              ),
            },
            {
              labelText: "Lösenord",
              input: (
                <input
                  className="h-10 border-grey-border border"
                  type="text"
                  id="signinPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
            onClick={handleSignIn}
            type={ButtonTypes.PRIMARY}
            iconRight={<FontAwesomeIcon icon={faSignIn}></FontAwesomeIcon>}
          />
        }
      />
      <div className="flex justify-center w-full">
        <p className="link14">Problem att logga in?</p>
      </div>
    </>
  );
}
