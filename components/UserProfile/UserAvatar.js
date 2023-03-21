import Image from 'next/image';
import Link from 'next/link';
import Chield from '../../public/image/sidebar-icons/Chield.svg';

export default function UserAvatar(props) {
  const verStatusLabel = props.verUser == 1 ? 'Verified' : false;

  return (
    <div className='userProfile__avatar topline'>
      <div className='userProfile__avatar-content'>
        <div className='userProfile__avatar-image'>
          <Image
            width={90}
            height={90}
            src={`/image${props.avatarUrl}`}
            alt='Name: '
          ></Image>
        </div>
        <div className='userProfile__avatar-info'>
          <h5>{props.user.firstname + ' ' + props.user.lastname}</h5>
          <div className='userProfile__avatar-link'>
            <Link href={`mailto:${props.user.email}`}>
              <a>{props.user.email}</a>
            </Link>
          </div>
          <div className='tags'>
            <span>{props.user.gender}</span>
            <span>{props.user.birthday}</span>
            <span>{props.user.country}</span>
          </div>
        </div>
      </div>
      {verStatusLabel !== false ? (
        <div className='userProfile__avatar-status'>
          <span>{verStatusLabel}</span>
          <div className='icon'>
            <Chield
              width={20}
              height={20}
            ></Chield>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
