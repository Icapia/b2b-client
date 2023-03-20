import { MainLayout } from '../../components/layouts/MainLayout.js';
import UserCard from "../../components/CrmUser/UserCart";
import UserLogs from "../../components/UserProfile/UserLogs";
import { useState } from "react";
import CrmUserProfile from "../../components/CrmUser/CrmUserProfile";
import CrmUserActions from "../../components/CrmUser/CrmUserActions";

export default function UserProfile({ crmUser, logs }) {

  const [user, setUser] = useState(crmUser);

  const updateUser = (data) => {
    setUser({ data });
  }

  return (
    <MainLayout name={"User: " + user.firstname + ' ' + user.lastname}>
      <div className="box">
        <div className='box-left'>
          <UserCard user={user} avatar={crmUser.avatar} ></UserCard>
          <CrmUserProfile
            className={"mt-25"}
            user={user}
            onChange={(user) => updateUser(user)}
          />
          <CrmUserActions user={user}/>
        </div>
        <div className="box-right">
          <UserLogs className={"userLogs topline"} userLogs={logs}></UserLogs>
        </div>
      </div>
      
      
    </MainLayout>
  )
}


export async function getServerSideProps(ctx)   {
  const [responseUser, responseLogs] = await Promise.all([
    fetch(`http://localhost:4200/crmUsers/${ctx.query.id}`),
    fetch(`http://localhost:4200/usersLog/1`),
  ]);
  
  const crmUser = await responseUser.json();
  const logs = await responseLogs.json();

  return { 
    props: {
      crmUser: crmUser,
      logs: logs
    }
  }
}





