import * as db from "../db.json";

import { useEffect, useState } from "react";

import { MainLayout } from "../components/layouts/MainLayout.js";
import UsersGrid from "../components/Users/UsersGrid.js";
import UsersGridFilter from "../components/Users/UsersGridFilter.js";

const pageData = {
  pageTitle: "Users",
};

export default function Home() {
  return (
    <MainLayout name={pageData.pageTitle}>
      <UsersGridFilter users={db.users}></UsersGridFilter>
      <UsersGrid users={db.users}></UsersGrid>
    </MainLayout>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:4200/users`);
//   const users = await res.json();

//   return {
//     props: {
//       users: users,
//     },
//   };
// }
