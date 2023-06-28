import { sidebarAtom } from "../../store/sidebar";
import { useAtom } from "jotai";
import { FC } from "react";

import cn from 'classnames'
import styles from './index.module.scss'

interface HeaderI {
  title: string,
  headerChild: React.ReactNode,
}

export const Header: FC<HeaderI> = ({
  title,
  headerChild,
}) => {
  const [sidebar] = useAtom(sidebarAtom)

  return (
    <div className={sidebar == false ? "header" : "header header--small"}>
      <div className="header__wrapper">
        <div className={cn(styles.container)}>
          <div className="header__title">
            <h2>{title}</h2>
            <div className="breadcrumbs"></div>
          </div>
          {headerChild}
        </div>
      </div>
    </div>
  );
}