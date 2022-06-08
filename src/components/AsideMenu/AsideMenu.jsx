import React, { useContext } from "react";
import bemCssModules from "bem-css-modules";

import { StoreContext } from "../../store/StoreProvider";

import AdminMenu from "./subcomponents/AdminMenu";
import UserMenu from "./subcomponents/UserMenu";

import { default as AsideMenuStyles } from "./AsideMenu.module.scss";
const style = bemCssModules(AsideMenuStyles);

import { ADMIN_TYPE } from "../../helpers/consts";

const AsideMenu = () => {
  const { user } = useContext(StoreContext);

  const adminMenuComponent =
    user?.accessLevel === ADMIN_TYPE ? <AdminMenu /> : null;

  return (
    <section className={style()}>
      <div className={style("nav-wrapper")}>
        <UserMenu isUserLogged={Boolean(user)} />
        {adminMenuComponent}
      </div>
    </section>
  );
};

export default AsideMenu;
