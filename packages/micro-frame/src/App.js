import React from "react";
import { BrowserRouter } from "react-router-dom";
import HvProvider from "@hv/uikit-react-core/dist/Provider";
import Header from "./components/layout/Header";

const App = ({ basename = "/" }) => {
  return (
    <HvProvider>
      <BrowserRouter basename={basename}>
        <Header />
      </BrowserRouter>
    </HvProvider>
  );
};

export default App;
