import React, { ReactElement, useEffect, useState } from "react";
import { faSignIn } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, ButtonTypes } from "../../../controls/buttons/button";
import { useAuthState } from "../../../../contexts/authContext";
import SideToSideButtons from "../../../containers/SideToSideButtons";
import useLocation from "wouter/use-location";
import InputField from "../../../containers/InputField";

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

        <InputField
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
      <SideToSideButtons /*TODO: Borde dessa inehålla buttons helt? Innebär med propdrilling*/
        button1={
          <Button
            text="Tillbaka"
            type={ButtonTypes.SECONDARY}
            navigate="/start"
          />
        }
        button2={
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
