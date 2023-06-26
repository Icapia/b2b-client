import { FC, PropsWithChildren } from "react";
import Head from "next/head";
import { Header } from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import { sidebarAtom } from "../../store/sidebar";
import { useAtom } from "jotai";
import { Snackbar } from "../Snackbar";

interface MainLayoutI {
  name: string,
  headerChild?: React.ReactNode,
}

export const MainLayout: FC<PropsWithChildren<MainLayoutI>> = ({
  children,
  name,
  headerChild,
}) => {
  const [sidebar] = useAtom(sidebarAtom)

  return (
    <main className="app">
      <Head>
        <title>{name}</title>
      </Head>
      <Sidebar></Sidebar>
      <Header title={name} headerChild={headerChild}></Header>
      <main
        className={sidebar == false ? "content" : "content content--small"}
      >
        {children}
      </main>
      <Snackbar position={['top', 'right']}/>
    </main>
  );
}
