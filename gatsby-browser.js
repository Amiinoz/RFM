import React from "react";

import { GlobalProvider } from "./src/context/glopalContext";

export const wrapRootElement = ({ element }) => {
  return <GlobalProvider>{element}</GlobalProvider>;
};
