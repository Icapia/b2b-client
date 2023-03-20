import SidebarToggle from '../../public/image/sidebar-icons/Check.svg';

export default function Message(props) {
  let message = props.message;
  let className = props.className;
  
  return(
    <div className={className ?? 'messageBox'}>
      <div className="messageBox__content">
        <SidebarToggle width={35} height={35}></SidebarToggle>
        {message}
      </div>
    </div>
  );
};