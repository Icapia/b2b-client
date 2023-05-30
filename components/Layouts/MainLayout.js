import Head from "next/head";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarAtom } from "../../store/sidebar";
import { useAtom } from "jotai";

export function MainLayout(props) {
  const [sidebar] = useAtom(sidebarAtom)

  return (
    <main className="app">
      <Head>
        <title>{props.name}</title>
      </Head>
      <Sidebar></Sidebar>
      <Header name={props.name} childComponent={props.childComponent}></Header>
      <main
        className={sidebar == false ? "content" : "content content--small"}
      >
        {props.children}
      </main>
    </main>
  );
}
