import { Button } from "../../controls/buttons/Button";
import { Routes } from "../../../AppRouter";

export function NotLoggedInView() {
  return (
    <div>
      <p>Logga in för att se dina ärenden</p>
      <div className="flex flex-col justify-center items-center mt-12 [&>*]:mb-3">
        <Button
          text={<p>Start App by Login in</p>}
          navigate={Routes.START}
          />
      </div>
    </div>
  );
}
