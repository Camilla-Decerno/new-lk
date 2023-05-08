import { BareFetcher, Middleware, SWRConfig, SWRHook } from "swr";
import {
  INVALID_API_RESPONSE_ERROR,
  NOT_AUTHENTICATED_ERROR,
} from "../../constants/errors";

type SWRConfigOptions = Parameters<typeof SWRConfig>[0]["value"];
export function createSWROptions(params: {
  getAuthToken: () => string | null;
}): SWRConfigOptions {
  return {
    use: [createAuthMiddleware(params.getAuthToken)],
    fetcher: (url: URL, request: RequestInit | undefined) => {
      return fetch(url, request)
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response;
          }

          return Promise.reject(INVALID_API_RESPONSE_ERROR);
        })
        .then((response) => response.json());
    },
  };
}

const createAuthMiddleware = (
  getAuthToken: () => string | null
): Middleware => {
  return (useSWRNext: SWRHook) => (key, fetcher, config) => {
    const authenticatingFetcher = (
      url: URL,
      request: RequestInit | undefined
    ) => {
      const authToken = getAuthToken();
      if (authToken == null) {
        return Promise.reject(NOT_AUTHENTICATED_ERROR);
      }

      return fetcher!(url, {
        ...request,
        headers: {
          Authorization: `Bearer ${authToken}`,
          ...request?.headers,
        },
      });
    };

    return useSWRNext(key, authenticatingFetcher, config);
  };
};
