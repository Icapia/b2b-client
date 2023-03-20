import { useState, useEffect } from 'react';
import { MainLayout } from '../components/layouts/MainLayout.js'
import UsersGrid from '../components/Users/UsersGrid.js';
import UsersGridFilter from '../components/Users/UsersGridFilter.js';

const pageData = {
  pageTitle: 'Users'
}

export default function Home({ users }) {
  return (
    <MainLayout name={pageData.pageTitle}>
      <UsersGridFilter users={users}></UsersGridFilter>
      <UsersGrid users={users}></UsersGrid>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4200/users`)
  const users = await res.json()

  return { 
    props: { 
      users: users
    } 
  }
}
