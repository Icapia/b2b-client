import { graphQlInstance } from "@/services/gql"
import { loginFormAtom } from '@/store/login'
import cn from 'classnames'
import { useAtom } from "jotai"
import Link from "next/link"
import { useRouter } from "next/router"
import { sidebarAtom } from "../../store/sidebar"
import { NavMenu } from "./NavMenu"
import { Profile } from "./Profile"
import styles from './index.module.scss'

export const Sidebar = () => {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)
  const [, setLoginForm] = useAtom(loginFormAtom)
  const router = useRouter()

  const handlerToggleSidebar = () => {
    setSidebar(!sidebar)
  }

  const handlerDisconnect = () => {
    graphQlInstance.removeAccessToken()
    setLoginForm({
      email: '',
      code: '',
      isCodeSent: false,
      accessToken: null,
    })
    router.push({
      pathname: '/login',
    })
  }

  return (
    <div className={sidebar ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__wrapper">
        <Link href={"/organizations"} legacyBehavior>
          <div className={cn(styles.logo)}>
            <img src="/b2b/image/logo-m.svg" alt="" />
            {!sidebar && (
              <div className={cn(styles.logo__info)}>
                <h2 style={{ color: "#fff" }}>{sidebar ? '' : 'ICAPIA EV'}</h2>
                <p style={{ color: "#fff", fontSize: "9px" }}>{sidebar ? '' : 'ChargePoint Management'}</p>
              </div>
            )}
          </div>
        </Link>
        <Profile />
        <NavMenu />

        <div className={cn(styles.container)}>
          <div
            className={cn(styles.item)}
            onClick={handlerDisconnect}
          >
            <img src="/b2b/image/logout-white.svg" />
            {sidebar ? <span></span> : <span>Disconnect</span>}
          </div>
          <div
            className={cn(styles.item)}
            onClick={handlerToggleSidebar}
          >
            <img src="/b2b/image/sidebar-icons/SidebarToggle.svg" />
            {sidebar ? <span></span> : <span>Toggle sidebar</span>}
          </div>
        </div>

      </div>
    </div>
  )
}
