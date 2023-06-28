import { NavMenu } from "./NavMenu";
import { useAtom } from "jotai";
import { sidebarAtom } from "../../store/sidebar";
import { Profile } from "./Profile";
import { graphQlInstance } from "@/services/gql";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from 'classnames'
import styles from './index.module.scss'

export const Sidebar = () => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)
  const router = useRouter()
  
  const handlerToggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const handlerDisconnect = () => {
    graphQlInstance.removeAccessToken()
    router.push('/')
  }

  return (
    <div className={sidebar ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__wrapper">
        <Link href={"/dashboard"} legacyBehavior>
          <div className={cn(styles.logo)}>
            <img src="/image/logo-m.svg" alt="" />
            {!sidebar && (
              <div className={cn(styles.logo__info)}>
                <h2 style={{ color: "#fff" }}>{sidebar ? '' : 'ICAPIA EV'}</h2>
                <p style={{ color: "#fff", fontSize: "9px" }}>{sidebar ? '' : 'ChargePoint Management'}</p>
              </div>
            )}
          </div>
        </Link>
        <Profile/>
        <NavMenu/>
          
        <div className={cn(styles.container)}>
          <div
            className={cn(styles.item)}
            onClick={handlerDisconnect}
          >
            <img src="/image/logout-white.svg"/>
            {sidebar ? <span></span> : <span>Disconnect</span>}
          </div>
          <div
            className={cn(styles.item)}
            onClick={handlerToggleSidebar}
          >
            <img src="/image/sidebar-icons/SidebarToggle.svg"/>
            {sidebar ? <span></span> : <span>Toggle sidebar</span>}
          </div>
        </div>
        
      </div>
    </div>
  );
}
