import { ReactRedux } from "..";
import { useReducer, useContext, useRef, useCallback } from "react";

const useSelector = (selector) => {
  const [_, forceRender] = useReducer((s) => s + 1, 0);

  const store = useContext(ReactRedux);
  const selectorRef = useRef(selector); //selector
  const selectedStateRef = useRef(selector(store.getState()));

  const checkIfUpdated = useCallback(() => {
    const newState = selectorRef.current(store.getState());

    if (newState !== selectedStateRef.current) {
      forceRender({});
    }
  }, [store]);

  store.subscribe(checkIfUpdated);

  return selectedStateRef.current;
};
