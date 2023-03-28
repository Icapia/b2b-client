import { useState } from 'react';
import { MainLayout } from '../../components/layouts/MainLayout.js';
import UserActions from '../../components/UserProfile/UserActions.js';
import UserAvatar from '../../components/UserProfile/UserAvatar.js';
import UserProfileImages from '../../components/UserProfile/UserProfileImages.js';
import UserProfileInfo from '../../components/UserProfile/UserProfileInfo.js';
import UserSubscribe from '../../components/UserProfile/UserSubscribe.js';
import UserVerefication from '../../components/UserProfile/UserVerefication.js';
import UserLogs from '../../components/UserProfile/UserLogs.js';

export default function UserProfile({ user, verUser, userImages, userSubscribes, globalSubscribes, userLogs }) {
  
  const [userData, setUserData] = useState({
    id: user.id,
    gender: user.gender,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    registrationDate: getDateFormat(user.registrationDate),
    birthday: getDateFormat(user.birthday),
    country: user.country
  });
  
  const updateUserData = (userData) => {
    setUserData({
      id: userData.id,
      gender: userData.gender,
      firstname: userData.firstname,
      lastname: userData.lastname,
      phone: userData.phone,
      email: userData.email,
      registrationDate: userData.registrationDate,
      birthday: getDateFormat(userData.birthday),
      country: userData.country
    })
  }
  
  return (
    <MainLayout name={userData.firstname + ' ' + userData.lastname}>
      <div className="box">
        <div className='box-left'>
          <UserAvatar avatarUrl={user.avatarUrl} user={userData} verUser={verUser.verStatus} > 
          </UserAvatar>
          <UserActions user={user}></UserActions>
          <UserProfileInfo user={userData} onEdit={updateUserData}>
          </UserProfileInfo>
          <UserVerefication verUser={verUser} user={user.verStatus}>
          </UserVerefication>
        </div> 
        <div className="box-right">
          <UserProfileImages userImages={userImages}></UserProfileImages>
          <UserSubscribe userSubscribes={userSubscribes} globalSubscribes={globalSubscribes}>
          </UserSubscribe>
          <UserLogs userLogs={userLogs}></UserLogs>
        </div>
      </div>
      
      
    </MainLayout>
  )
}


function getDateFormat(date) {
  const nDate = new Date(date);
  const nDateDay = nDate.getDate() < 10 ? '0' + nDate.getDate() : nDate.getDate();
  const nDateMonth = (nDate.getMonth() + 1) < 10 ? '0' + (nDate.getMonth() + 1) : (nDate.getMonth() + 1);
  return(nDate.getFullYear() + '-' + nDateMonth + '-' + nDateDay);
}

export async function getServerSideProps(ctx) {
  const [res, verRes, imageRes, subscribesRes, globalSubscribesRes, logsRes] = await Promise.all([
    fetch(`http://localhost:4200/users/${ctx.query.id}`),
    fetch(`http://localhost:4200/verification/${ctx.query.id}`),
    fetch(`http://localhost:4200/usersImages/${ctx.query.id}`),
    fetch(`http://localhost:4200/userSubscribes/${ctx.query.id}`),
    fetch(`http://localhost:4200/subscribes/`),
    fetch(`http://localhost:4200/usersLog/1`),
  ]);
  
  const user = await res.json();
  const verUser = await verRes.json();
  const userImages = await imageRes.json();
  const userSubscribes = await subscribesRes.json();
  const globalSubscribes = await globalSubscribesRes.json();
  const userLogs = await logsRes.json();
  
  return { 
    props: { 
      user: user,
      verUser: verUser,
      userImages: userImages,
      userSubscribes: userSubscribes,
      globalSubscribes: globalSubscribes,
      userLogs: userLogs
    } 
  }
}





