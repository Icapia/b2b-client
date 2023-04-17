import ChartGraph from "../components/Charts/Chart";
import DashboardList from "../components/Dashboard/DashboardList";
import Head from "next/head";
import Image from "next/image";
import { MainLayout } from "../components/Layouts/MainLayout";
import Notification from "../components/Notification/Notification.js";

const pageData = {
  pageTitle: "Dashboard",
};

const dataSet1 = [20, 30, 60, 40, 30, 45, 55, 60, 58];
const dataSet2 = [40, 30, 20, 70, 90, 100, 75, 100, 55];

export default function Home({ notifications }) {
  return (
    <MainLayout name={pageData.pageTitle}>
      <DashboardList></DashboardList>
      <div className="charts charts__dashboard mb-50">
        <ChartGraph
          dataset={dataSet1}
          title={"New Users"}
          count={48}
        ></ChartGraph>
        <ChartGraph
          dataset={dataSet2}
          title={"New Subscriptions"}
          count={23}
        ></ChartGraph>
      </div>
      {/* <Notification title="Notifications" posts={notifications}></Notification> */}
    </MainLayout>
  );
}

// export async function getServerSideProps(ctx) {
//   const [res] = await Promise.all([
//     fetch(`http://localhost:4200/notifications`),
//   ]);

//   const notifications = await res.json();
//   return {
//     props: {
//       notifications: notifications,
//     },
//   };
// }
