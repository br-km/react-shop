import React from "react";

import "./App.scss";

import StoreProvider from "./store/StoreProvider";

const App = () => (
  <StoreProvider>
    <header>Hello World!</header>;
  </StoreProvider>
);

export default App;
