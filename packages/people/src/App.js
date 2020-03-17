import React from "react";
import { BrowserRouter } from "react-router-dom";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import Routes from "./lib/routes";

const App = ({ basename = "/" }) => {
  return (
    <HvProvider>
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </HvProvider>
  );
};

export default App;
