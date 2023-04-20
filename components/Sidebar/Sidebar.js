import { useContext, useState } from "react";

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

export default function Sidebar(props) {
  const { isActive, setActive } = useState(true);
  const toggleSidebar = () => {
    setActive(!isActive);
  };

  const { loggedInUser, logout, handleAuthAction } = useContext(AuthContext);

  return (
    <div className={isActive ? "sidebar sidebar__active" : "sidebar"}>
      <div className="sidebar__wrapper">
        <Link href={"/dashboard"}>
          {isActive ? (
            <a>
              <LogoM className="sidebar__logo"></LogoM>
            </a>
          ) : (
            <a></a>
          )}
        </Link>
        <h2 style={{ color: "#fff" }}>ICAPIA EV</h2>
        <p style={{ color: "#fff", fontSize: "9px" }}>ChargePoint Managment</p>
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
            <ListItemText
              primaryTypographyProps={{
                fontSize: "12px",
                noWrap: "true",
                width: "90px",
              }}
              secondaryTypographyProps={{ fontSize: "9px" }}
              primary={loggedInUser?.name}
              secondary={loggedInUser?.email}
            />
          </ListItem>
        </List>
        <button onClick={logout}>Logout</button>
        <SidebarUserInfo state={isActive}></SidebarUserInfo>
        <SidebarNavMenu state={isActive}></SidebarNavMenu>

        <div
          id="sibebar__toggle"
          className="sibebar__toggle"
          onClick={toggleSidebar}
        >
          <div className="sibebar__toggle-image">
            <SidebarToggle width={24} height={24}></SidebarToggle>
          </div>
          {isActive ? <span></span> : <span>Toggle sidebar</span>}
        </div>
      </div>
    </div>
  );
}
