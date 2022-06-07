import React from "react";
import { HashRouter as Router } from "react-router-dom";
import bemCssModules from "bem-css-modules";
import { default as AppStyles } from "./App.scss";

import StoreProvider from "./store/StoreProvider";

import AsideMenu from "./components/AsideMenu/AsideMenu";
import Header from "./components/Header";

const style = bemCssModules(AppStyles);

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <Router>
        <div className={style()}>
          <AsideMenu />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
