import { useEffect } from "react";
import { NavMenu } from "./NavMenu";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import LogoM from "../../public/image/logo-small.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SidebarToggle from "../../public/image/sidebar-icons/SidebarToggle.svg";
import { useAtom } from "jotai";
import { sidebarAtom } from "../../store/sidebar";
import { useWindowSize } from 'usehooks-ts'
import { Profile } from "./Profile";

export default function Sidebar() {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)
  const { width } = useWindowSize()

  useEffect(() => {
    if(width < 1600) {
      setSidebar(true)
    } else {
      setSidebar(false)
    }
  }, [width])
  
  const toggleSidebar = () => {
    if(width < 1600) {
      return
    } else {
      setSidebar(!sidebar)
    }
  }

  return (
    <div className={sidebar ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__wrapper">
        <Link href={"/dashboard"} legacyBehavior>
          {sidebar ? (
            <LogoM className="sidebar__logo"/>
          ): <></>}
        </Link>
        <h2 style={{ color: "#fff" }}>{sidebar ? '' : 'ICAPIA EV'}</h2>
        <p style={{ color: "#fff", fontSize: "9px" }}>{sidebar ? '' : 'ChargePoint Management'}</p>
        <Profile/>
        <NavMenu/>

        <div
          id="sidebar__toggle"
          className="sidebar__toggle"
          onClick={toggleSidebar}
        >
          <div className="sidebar__toggle-image">
            <SidebarToggle width={24} height={24}></SidebarToggle>
          </div>
          {sidebar ? <span></span> : <span>Toggle sidebar</span>}
        </div>
      </div>
    </div>
  );
}
