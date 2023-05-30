import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContextProvider";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../../public/image/logo-m.svg";
import LogoM from "../../public/image/logo-small.svg";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import SidebarNavMenu from "../Sidebar/SidebarNavMenu";
import SidebarToggle from "../../public/image/sidebar-icons/SidebarToggle.svg";
import SidebarUserInfo from "../Sidebar/SidebarUserInfo";
import ThemeContext from "../Context/Theme";
import { useAtom } from "jotai";
import { sidebarAtom } from "../../store/sidebar";
import { useWindowDimensions } from '../../hooks/dimensions.hook'

export default function Sidebar(props) {
  const [sidebar, setSidebar] = useAtom(sidebarAtom)
  const { loggedInUser, logout, handleAuthAction } = useContext(AuthContext);
  const { width } = useWindowDimensions();

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
        <Link href={"/dashboard"}>
          {sidebar ? (
            <a>
              <LogoM className="sidebar__logo"></LogoM>
            </a>
          ) : (
            <a></a>
          )}
        </Link>
        <h2 style={{ color: "#fff" }}>{sidebar ? '' : 'ICAPIA EV'}</h2>
        <p style={{ color: "#fff", fontSize: "9px" }}>{sidebar ? '' : 'ChargePoint Managment'}</p>
        <List sx={{ width: "100%" }}>
          <ListItem
            color="warning"
            pl="0"
            sx={{
              color: "#fff",
              "& p": { color: "#fff" },
              "&": { paddingLeft: "0px", fontSize: "9px" },
            }}
          >
            <ListItemAvatar>
              <Avatar>
                <PersonOutlineIcon />
              </Avatar>
            </ListItemAvatar>
            {!sidebar && <ListItemText
              primaryTypographyProps={{
                fontSize: "12px",
                noWrap: "true",
                width: "90px",
              }}
              secondaryTypographyProps={{ fontSize: "9px" }}
              primary={loggedInUser?.name}
              secondary={loggedInUser?.email}
            />}
          </ListItem>
        </List>
        <SidebarUserInfo state={sidebar}></SidebarUserInfo>
        <SidebarNavMenu state={sidebar}></SidebarNavMenu>

        <div
          id="sibebar__toggle"
          className="sibebar__toggle"
          onClick={toggleSidebar}
        >
          <div className="sibebar__toggle-image">
            <SidebarToggle width={24} height={24}></SidebarToggle>
          </div>
          {sidebar ? <span></span> : <span>Toggle sidebar</span>}
        </div>
      </div>
    </div>
  );
}
