import AuthContext from "../Context/AuthContext";
import Head from "next/head";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import ThemeContext from "../Context/Theme";
import { useAuth } from "../../hooks/auth.hook";
import { useContext } from "react";
import { useRouter } from "next/router";

export function MainLayout(props) {
  const { isActive, setActive } = useContext(ThemeContext);

  return (
    <main className="app">
      <Head>
        <title>{props.name}</title>
      </Head>
      <Sidebar></Sidebar>
      <Header name={props.name} childComponent={props.childComponent}></Header>
      <main
        className={isActive == false ? "content" : "content content--small"}
      >
        {props.children}
      </main>
    </main>
  );
}
