import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import App from "./App";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App
});

console.log("lifecycles: ", lifecycles);

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;

if (process.env.standalone) {
  ReactDOM.render(<App />, document.getElementById("root"));
}
