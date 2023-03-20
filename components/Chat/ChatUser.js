import userImage from '../../public/image/user-avatar-m.png';
import Image from 'next/image';

export default function ChatUser(props) {
  
  return (
    <div className="userProfile__avatar userProfile__avatar--chat topline">
      <div className="userProfile__avatar-content">
        <div className={"userChat__avatar-image"}>
          <div className='userProfile__avatar-image'>
            <Image width={90} height={90} src={userImage}></Image>
          </div>
        </div>
        <div className="userProfile__avatar-info">
          <h5>{"Evgeniy Harlamov"}</h5>
          <div className="userProfile__avatar-link">
            Status: <span className='green'>Active</span>
          </div>
          <div className="userProfile__avatar-link">
            New messages: <span className='green'>3</span>
          </div>
        </div>
      </div>
    </div>
  )
}
