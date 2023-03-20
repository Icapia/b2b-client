import Image from 'next/image';
import Link from 'next/link';
import { SidebarData } from '../../components/Sidebar/SidebarData';
import { useRouter } from 'next/router';
import Transition from 'react-transition-group/Transition';
const duration = 200;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
  entering: { opacity: 0, display: 'none' },
  entered:  { opacity: 1 , display: 'block'},
  exited:  { opacity: 0, display: 'none'},
};
const Fade = ({ in: inProp, value: value }) => (
  <Transition in={inProp} timeout={duration}>
      {(state) => (
      <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
      }}>
          <span className='sidebar__menu-item-link'>{value}</span>
      </div>
      )}
  </Transition>
);

export default function SidebarNavMenu(props) {
    return (
      <div className="sidebar__menu">
        <div className="sidebar__menu-wrapper">
          <nav>
            <ul>
              {SidebarData.map((item, index) => {
                return(
                  <SidebarMenuItem state={props.state} key={index} url={item.url} name={item.name} image={item.image} ></SidebarMenuItem>
                )
              })}
            </ul>
          </nav>
        </div>
      </div> 
    )
}

function SidebarMenuItem (props) {
  const router = useRouter();
  return (
    <li className={router.pathname === props.url ? 'sidebar__menu-item active' : 'sidebar__menu-item'}>
      <Link passHref href={props.url}>
      <a className='sidebar__menu-wrapper'>
        <div className="sidebar__menu-item--image">
          <Image src={props.image} width={24} height={24} alt={props.name}></Image>
        </div>
        <Fade in={!props.state} value={props.name}></Fade>
      </a>
      </Link>
    </li>
  );
}


