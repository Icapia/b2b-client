import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useContext } from 'react';
import ThemeContext from '../Context/Theme';
import AuthContext from '../Context/AuthContext';
import Head from "next/head";
import { useRouter } from "next/router";
import { useAuth } from '../../hooks/auth.hook';


export function MainLayout ( props ) {
    const {isActive, setActive} = useContext(ThemeContext);
    
    return (
      <main className="app">
          <Head><title>{props.name}</title></Head>
          <Sidebar></Sidebar>
          <Header name={props.name}></Header>
          <main className={isActive == false ? 'content' : 'content content--small'}>
              {props.children}
          </main>
      </main>
    )
}

