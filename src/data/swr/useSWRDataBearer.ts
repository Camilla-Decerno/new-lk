import { DataBearer } from "../dataBearer";

type Params<Data> = {
  data: Data | undefined;
  error: unknown;
  isLoading: boolean;
};
export function useSWRDataBearer<Data>({
  data,
  error,
  isLoading,
}: Params<Data>): DataBearer<Data> {
  if (isLoading) {
    return { hasData: false, state: "loading" };
  }

  if (error != null || data === undefined) {
    return { hasData: false, state: "error", error };
  }

  return { hasData: true, state: "ready", data };
}
