import { useContext } from "react";

import AuthContext from "../Context/AuthContext";
import Breadcrumbs from "nextjs-breadcrumbs";
import HeaderSearch from "./HeaderSearch";
import { useRouter } from "next/router";
import { sidebarAtom } from "../../store/sidebar";
import { useAtom } from "jotai";

export default function Header(props) {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)
  const { logout, userId, isAuthenticated, token, login } =
    useContext(AuthContext);
  const router = useRouter();

  const handlerLogout = (event) => {
    logout();
    router.push("/");
  };

  return (
    <div className={sidebar == false ? "header" : "header header--small"}>
      <div className="header__wrapper">
        <div className="header__container" style={{ display: "flex", alignItems: "flex-start" }}>
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

        {/* <HeaderSearch /> */}
      </div>
    </div>
  );
}

function BreadcrumbsName(title) {
  return title[0].toUpperCase() + title.slice(1);
}
