import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';


export const NavMenu = ({}) => {
  const router = useRouter();

  const SidebarData = [
    {
      image: "/image/sidebar-icons/Chart.svg",
      name: "Charging sites",
      url: "/charging-sites",
    },
    {
      image: "/image/sidebar-icons/User_box.svg",
      name: "Organization",
      url: "/organization",
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
                  <Link href={el.url}>
                  <div className='sidebar__menu-wrapper'>
                    <div className="sidebar__menu-item--image">
                      <Image src={el.image} width={24} height={24} alt={el.name}></Image>
                    </div>
                    <div>{el.name}</div>
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