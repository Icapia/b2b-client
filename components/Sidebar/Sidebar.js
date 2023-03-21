import Logo from '../../public/image/logo-m.svg';
import LogoM from '../../public/image/logo-small.svg';
import SidebarUserInfo from '../Sidebar/SidebarUserInfo';
import SidebarNavMenu from '../Sidebar/SidebarNavMenu';
import SidebarToggle from '../../public/image/sidebar-icons/SidebarToggle.svg';
import Link from 'next/link';
import { useContext, useState } from 'react';
import ThemeContext from '../Context/Theme';

export default function Sidebar(props) {
  const { isActive, setActive } = useState(true);
  const toggleSidebar = () => {
    setActive(!isActive);
  };

  return (
    <div className={isActive ? 'sidebar sidebar__active' : 'sidebar'}>
      <div className='sidebar__wrapper'>
        <Link href={'/dashboard'}>
          {isActive ? (
            <a>
              <LogoM className='sidebar__logo'></LogoM>
            </a>
          ) : (
            <a>
              <Logo className='sidebar__logo'></Logo>
            </a>
          )}
        </Link>
        <SidebarUserInfo state={isActive}></SidebarUserInfo>
        <SidebarNavMenu state={isActive}></SidebarNavMenu>

        <div
          id='sibebar__toggle'
          className='sibebar__toggle'
          onClick={toggleSidebar}
        >
          <div className='sibebar__toggle-image'>
            <SidebarToggle
              width={24}
              height={24}
            ></SidebarToggle>
          </div>
          {isActive ? <span></span> : <span>Toggle sidebar</span>}
        </div>
      </div>
    </div>
  );
}
