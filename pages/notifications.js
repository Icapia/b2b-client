import { ButtonDefault } from "../components/Buttons/Buttons";
import { MainLayout } from "../components/layouts/MainLayout.js";
import Notification from "../components/Notification/Notification.js";
import { useState } from "react";

const pageData = {
  pageTitle: "Notifications",
};

export default function Home({ notifications, crmUsers }) {
  return (
    <MainLayout name={pageData.pageTitle}>
      <Notification
        title="Today Notifications"
        posts={notifications}
      ></Notification>
      <div className="devider devider-l"></div>
      <Notification
        title="All Notifications"
        posts={notifications}
      ></Notification>
    </MainLayout>
  );
}

// export async function getServerSideProps(ctx) {
//   const [res, users] = await Promise.all([
//     fetch(`http://localhost:4200/notifications`),
//     fetch(`http://localhost:4200/crmUsers`),
//   ]);

//   const notifications = await res.json();
//   const crmUsers = await users.json();
//   return {
//     props: {
//       notifications: notifications,
//       crmUsers: crmUsers,
//     },
//   };
// }
