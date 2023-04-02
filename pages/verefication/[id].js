import { MainLayout } from "../../components/layouts/MainLayout";
import UserAvatar from "../../components/UserProfile/UserAvatar.js";
import UserProfileImages from "../../components/UserProfile/UserProfileImages.js";
import VereficationUserProfileInfo from "../../components/UserProfile/VereficationUserProfileInfo.js";
import VereficationUserVerefication from "../../components/UserProfile/VereficationUserVerefication.js";
import VereficationVideo from "../../components/UserProfile/VereficationVideo.js";
import VereficatonActions from "../../components/UserProfile/VereficatonActions.js";
import { useState } from "react";

export default function Verefication({ user, verUser, userImages }) {
  const [userData, setUserData] = useState({
    id: user.id,
    gender: user.gender,
    firstname: user.firstname,
    lastname: user.lastname,
    phone: user.phone,
    email: user.email,
    registrationDate: getDateFormat(user.registrationDate),
    birthday: getDateFormat(user.birthday),
    country: user.country,
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
      country: userData.country,
    });
  };

  return (
    <MainLayout name={"User: " + userData.firstname + " " + userData.lastname}>
      <div className="box">
        <div className="box-left">
          <UserAvatar
            avatarUrl={user.avatarUrl}
            user={userData}
            verUser={verUser.verStatus}
          ></UserAvatar>
          <VereficatonActions></VereficatonActions>

          <VereficationUserProfileInfo
            user={userData}
            onEdit={updateUserData}
          ></VereficationUserProfileInfo>
          <VereficationUserVerefication
            verUser={verUser}
            user={user.verStatus}
          ></VereficationUserVerefication>
        </div>
        <div className="box-right">
          <VereficationVideo
            videoUrl={verUser.videoUrl}
            videoDate={verUser.videoDate}
          ></VereficationVideo>
          <UserProfileImages userImages={userImages}></UserProfileImages>
        </div>
      </div>
    </MainLayout>
  );
}

function getDateFormat(date) {
  const nDate = new Date(date);
  const nDateDay =
    nDate.getDate() < 10 ? "0" + nDate.getDate() : nDate.getDate();
  const nDateMonth =
    nDate.getMonth() + 1 < 10
      ? "0" + (nDate.getMonth() + 1)
      : nDate.getMonth() + 1;
  return nDate.getFullYear() + "-" + nDateMonth + "-" + nDateDay;
}

export async function getServerSideProps(ctx) {
  const [res, verRes, imageRes, subscribesRes, globalSubscribesRes, logsRes] =
    await Promise.all([
      fetch(`http://localhost:4200/users/${ctx.query.id}`),
      fetch(`http://localhost:4200/verification/${ctx.query.id}`),
      fetch(`http://localhost:4200/usersImages/${ctx.query.id}`),
    ]);

  const user = await res.json();
  const verUser = await verRes.json();
  const userImages = await imageRes.json();

  return {
    props: {
      user: user,
      verUser: verUser,
      userImages: userImages,
    },
  };
}
