import React from "react";
import { HashRouter as Router } from "react-router-dom";
import bemCssModules from "bem-css-modules";
import { default as AppStyles } from "./App.scss";

import StoreProvider from "./store/StoreProvider";

import AsideMenu from "./components/AsideMenu/AsideMenu";
import Content from "./components/Content/Content";
import Header from "./components/Header";

const style = bemCssModules(AppStyles);

const App = () => {
  return (
    <StoreProvider>
      <Header />
      <Router>
        <div className={style()}>
          <AsideMenu />
          <Content />
        </div>
      </Router>
    </StoreProvider>
  );
};

export default App;
