import { MainLayout } from '../components/layouts/MainLayout.js'
import CrmUserGrid from "../components/CrmUser/CrmUserGrid";
import UsersGridFilter from "../components/Users/UsersGridFilter";

const pageData = {
  pageTitle: 'Crm Users'
}

export default function Home({ users }) {
  return (
    <MainLayout name={pageData.pageTitle}>
      <UsersGridFilter users={users}></UsersGridFilter>
      <CrmUserGrid users={users}></CrmUserGrid>
    </MainLayout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:4200/crmUsers`)
  const users = await res.json()

  return { 
    props: { 
      users: users
    } 
  }
}
