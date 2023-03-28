import { Component, useContext } from "react";

import AuthContext from "../Context/AuthContext";
import BellIcon from "../../public/image/sidebar-icons/header/Bell.svg";
import Breadcrumbs from "nextjs-breadcrumbs";
import HeaderSearch from "./HeaderSearch";
import Link from "next/link";
import LogoutIcon from "../../public/image/LogOut.svg";
import SearchIcon from "../../public/image/sidebar-icons/header/Search.svg";
import SettingsIcon from "../../public/image/sidebar-icons/header/Settings.svg";
import ThemeContext from "../Context/Theme";
import { useRouter } from "next/router";

export default function Header(props) {
  const { isActive, setActive } = useContext(ThemeContext);
  const { logout, userId, isAuthenticated, token, login } =
    useContext(AuthContext);
  const router = useRouter();

  const handlerLogout = (event) => {
    logout();
    router.push("/");
  };

  return (
    <div className={isActive == false ? "header" : "header header--small"}>
      <div className="header__wrapper">
        <div style={{ display: "flex", alingItems: "center" }}>
          <div className="header__title">
            <h3>{props.name}</h3>
            <div className="breadcrumbs">
              <Breadcrumbs
                rootLabel="Home"
                activeItemClassName="breadcrumbs-item active"
                inactiveItemClassName="breadcrumbs-item"
                transformLabel={(title) => BreadcrumbsName(title)}
              />
            </div>
          </div>
          {props.childComponent}
        </div>

        {/* <div className="header__lang">
          <button className="header__lang-btn" id={"ru_RU"}>
            RU
          </button>
          <button className="header__lang-btn active" id={"en_En"}>
            EN
          </button>
        </div> */}
        <HeaderSearch />
        {/* <div className="header__icons">
              <ul>
                <li>
                  <div className="header__icons-icon">
                    <Link href="/settings">
                      <a><SettingsIcon></SettingsIcon></a>
                    </Link>  
                  </div>
                </li>
                <li>
                  <div className="header__icons-icon">
                    <Link href="/notifications">
                      <a><BellIcon></BellIcon></a>
                    </Link>  
                  </div>
                </li>
                <li>
                  <div onClick={handlerLogout} className="header__icons-icon">
                    <LogoutIcon></LogoutIcon>
                  </div>
                </li>
              </ul>
            </div> */}
      </div>
    </div>
  );
}

function BreadcrumbsName(title) {
  return title[0].toUpperCase() + title.slice(1);
}
