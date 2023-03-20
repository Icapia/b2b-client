import Image from 'next/image'
import userImage from '../../public/image/user-avatar.png';
import Transition from 'react-transition-group/Transition';
import { useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Link } from '@mui/material';

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
const Fade = ({ in: inProp, name: name, email: email }) => (
  <Transition in={inProp} timeout={duration}>
      {(state) => (
      <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
      }}>
        <div className="sidebar__user-info">
            <h6>{ name || '' }</h6>
            <p>{ email || '' }</p>
        </div>
      </div>
      )}
  </Transition>
);

export default function SidebarUserInfo(props) {
  const { userId, user } = useContext(AuthContext);
  const currentUser = user || null;
  if(currentUser) {
    return (
      <Link className={"sidebar__user-link"} href={`/crm-users/${userId}`} alt=''>
        <a>
          <div className="sidebar__user">
            <div className="sidebar__user-logo">
                <Image width={40} height={40} src={`http://localhost:3000${currentUser[0].avatar}`} alt=""></Image>
            </div>
            <Fade email={currentUser[0].email} name={currentUser[0].firstname + ' ' + currentUser[0].lastname} in={!props.state} ></Fade>
          </div> 
        </a>
      </Link>
    )
  } else {
    return ( 
      <></>
    )
  }
}