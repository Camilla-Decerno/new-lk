import React from "react";
import { DataBearerWithoutData } from "../../../data/dataBearer";

interface Props {
  data: DataBearerWithoutData;
}

export function DataNotReadyIndicationView({ data }: Props) {
  if (data.state === "loading") {
    return <h1>Loading ...</h1>;
  }

  return (
    <div>
      <h1>Error!</h1>
      <pre>{(data.error ?? "").toString()}</pre>
    </div>
  );
}
