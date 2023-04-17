import * as db from "../db.json";

import { useEffect, useState } from "react";

import { Login } from "../components/Auth/Login/Login";
import { MainLayout } from "../components/Layouts/MainLayout.js";

const pageData = {
  pageTitle: "Login",
};

export default function Home() {
  return (
    // <MainLayout name={pageData.pageTitle}>
    <Login></Login>
    // </MainLayout>
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
