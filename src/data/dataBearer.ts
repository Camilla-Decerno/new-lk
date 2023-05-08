export type DataBearer<Data> = DataBearerWithoutData | DataBearerWithData<Data>;
export type DataBearerWithoutData =
  | { hasData: false; state: "loading" }
  | { hasData: false; state: "error"; error: unknown };
export type DataBearerWithData<Data> = {
  hasData: true;
  state: "ready";
  data: Data;
};
