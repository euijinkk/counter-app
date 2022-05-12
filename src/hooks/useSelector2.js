import { useRef } from "react";
import { useStore } from "./useStore";

const useSelector = (selector) => {
  const store = useStore();
  const selectorRef = useRef(selector);
  selectorRef.current = selector;
  const selectedStateRef = useRef(selector(store.getState()));
  selectedStateRef.current = selector(store.getState());

  return selectedStateRef.current;
};
