/** React application entrypoint */

import React, { useState } from "react";
import { SWRConfig } from "swr";
import { AppRouter } from "./AppRouter";
import { createAuthService, AuthProvider } from "./contexts/authContext";
import { createSWROptions } from "./data/swr/createSWRConfig";

export function App() {
  const [authService] = useState(createAuthService());
  const [swrOptions] = useState(
    createSWROptions({
      getAuthToken: () => {
        const authState = authService.getState();
        return authState.status === "valid" ? authState.token : null;
      },
    })
  );

  return (
    <React.StrictMode>
      <AuthProvider value={authService}>
        <SWRConfig value={swrOptions}>
          <AppRouter />
        </SWRConfig>
      </AuthProvider>
    </React.StrictMode>
  );
}
