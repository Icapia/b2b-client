import { sidebarAtom } from "../../store/sidebar";
import { useAtom } from "jotai";
import Breadcrumbs from "nextjs-breadcrumbs";
import { FC } from "react";

interface HeaderI {
  title: string,
  headerChild: React.ReactNode,
}

export const Header: FC<HeaderI> = ({
  title,
  headerChild,
}) => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)

  const getBreadcrumbsLabel = (title: string) => {
    return title;
  }

  return (
    <div className={sidebar == false ? "header" : "header header--small"}>
      <div className="header__wrapper">
        <div className="header__container" style={{ display: "flex", alignItems: "flex-start" }}>
          <div className="header__title">
            <h3>{title}</h3>
            <div className="breadcrumbs">
              <Breadcrumbs
                rootLabel="Home"
                activeItemClassName="breadcrumbs-item active"
                inactiveItemClassName="breadcrumbs-item"
                transformLabel={(title) => getBreadcrumbsLabel(title)}
              />
            </div>
          </div>
          {headerChild}
        </div>
      </div>
    </div>
  );
}