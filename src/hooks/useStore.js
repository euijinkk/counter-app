import React, { useContext } from "react";
import { ReactRedux } from "..";

export const useStore = () => {
  const store = useContext(ReactRedux);

  return store;
};
