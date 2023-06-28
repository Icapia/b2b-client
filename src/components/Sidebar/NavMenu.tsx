import { useAtom } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { sidebarAtom } from '../../store/sidebar';


export const NavMenu = ({}) => {
  const router = useRouter();
  const [sidebar] = useAtom(sidebarAtom);

  const SidebarData = [
    {
      image: "/image/sidebar-icons/Chart.svg",
      name: "Charging sites",
      url: "/charging-sites",
    },
    {
      image: "/image/sidebar-icons/User_box.svg",
      name: "Organization",
      url: "/organizations",
    },
  ];

  return (
    <div className="sidebar__menu">
      <div className="sidebar__menu-wrapper">
        <nav>
          <ul>
            {SidebarData.map((el, index) => {
              return(
                <li key={index} className={router.pathname === el.url ? 'sidebar__menu-item active' : 'sidebar__menu-item'}>
                  <Link href={el.url} legacyBehavior>
                  <div className='sidebar__menu-wrapper'>
                    <div className="sidebar__menu-item--image">
                      <Image src={el.image} width={24} height={24} alt={el.name}/>
                    </div>
                    <div>{!sidebar ? el.name : ''}</div>
                  </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </div> 
  )
}