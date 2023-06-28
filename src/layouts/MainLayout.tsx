import { FC, PropsWithChildren, useEffect } from "react";
import Head from "next/head";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { sidebarAtom } from "../store/sidebar";
import { useAtom } from "jotai";
import { Snackbar } from "../components/Snackbar";

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
      <Sidebar/>
      <Header title={name} headerChild={headerChild}></Header>
      <div
        className={sidebar ? "content content--small" : "content"}
      >
        {children}
      </div>
      <Snackbar position={['bottom', 'right']}/>
    </main>
  );
}
