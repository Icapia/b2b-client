import { useRouter } from "next/router";
import { sidebarAtom } from "../../store/sidebar";
import { useAtom } from "jotai";
import Breadcrumbs from "nextjs-breadcrumbs";

interface HeaderI {
  title: string,
}

export default function Header(props) {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)
  const router = useRouter();

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
      </div>
    </div>
  );
}

function BreadcrumbsName(title) {
  return title[0].toUpperCase() + title.slice(1);
}
