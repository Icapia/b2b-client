import Image from 'next/image';
import Link from 'next/link';

export default function UserCard(props) {
  const user = props.user || null;
  const avatar = props.avatar || '/image/avatars/Avatar01.jpg';

  return (
    <div className="userProfile__avatar topline">
      <div className="userProfile__avatar-content">
        <div className='userProfile__avatar-image'>
          <Image width={90} height={90} src={`http://localhost:3000${avatar}`} alt="Name: "></Image>
        </div>
        <div className="userProfile__avatar-info">
          <h5>{user.firstname + ' ' + user.lastname}</h5>
          <div className="userProfile__avatar-link">
            <Link href={`mailto:${user.email}`}>
              <a>{user.email}</a>
            </Link>
          </div>
          <div className={"userProfile__role"}>
            <span>{getRole(user.role)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function getRole(userRole) {
  if (userRole == 1) {
    return ('Owner')
  }

  if (userRole == 2) {
    return ('Administrator')
  }

  if (userRole == 3) {
    return ('Manager')
  }
}