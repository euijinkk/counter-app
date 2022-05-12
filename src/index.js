import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./redux";

export const ReactRedux = createContext(null);

const store = createStore(reducer);

console.log("store", store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReactRedux.Provider value={store}>
    <App />
  </ReactRedux.Provider>
);
