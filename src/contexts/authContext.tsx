/** Provides a React Context based service for user authentication. */

import { createContext, useContext } from "react";
import {
  createContextServiceWithState,
  asUninitialized,
  useServiceState,
} from "./contextServiceWithState";

/** Possible states of authentication. */
export type AuthState =
  | { status: "none" }
  | { status: "pending" }
  | { status: "valid"; name: string; token: string };

export type AuthApi = ReturnType<typeof createAuthService>;

const AuthContext = createContext(asUninitialized(createAuthService()));
export const AuthProvider = AuthContext.Provider;

/** Creates a new auth service */
export function createAuthService() {
  const initialState: AuthState = { status: "none" };

  return createContextServiceWithState(
    initialState as AuthState,
    (stateApi) => ({
      signIn: (username: string, password: string) => {
        stateApi.updateState(() => ({ status: "pending" }));

        authenticate(username, password).then((result) => {
          if (result.token != null) {
            stateApi.updateState(() => ({
              status: "valid",
              name: `${result.firstName} ${result.lastName}`,
              token: result.token,
            }));
          } else {
            stateApi.updateState(() => ({ status: "none" }));
          }
        });
      },
      signOut: () => {
        stateApi.updateState(() => ({ status: "none" }));
      },
    })
  );
}

/** Hook to access the authentication state */
export function useAuthState(): AuthState {
  return useServiceState(AuthContext);
}

/** Hook to get a Sign In method */
export function useSignIn() {
  const service = useContext(AuthContext);
  return service.signIn;
}

/** Hook to get a Sign Out method */
export function useSignOut() {
  const service = useContext(AuthContext);
  return service.signOut;
}

async function authenticate(
  username: string,
  password: string
): Promise<
  | {
      firstName: string;
      lastName: string;
      token: string;
    }
  | {
      token: null | undefined;
    }
> {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const body = await response.json();
  return body;
}
