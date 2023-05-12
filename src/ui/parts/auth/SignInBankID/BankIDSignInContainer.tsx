import { useAuthState } from "../../../../contexts/authContext";
import { BankIDLoadingView } from "./BankIDLoadingView";
import { BankIDSignInView } from "./BankIDSignInView";

export function BankIDSignInContainer() {
  const authState = useAuthState();

  if (authState.status !== "none") {
    return <BankIDLoadingView />;
  }

  return (
    <BankIDSignInView />
  );
}
