import { AuthLayout } from '../components/Layouts/AuthLayout';
import { MainLayout } from '../components/layouts/MainLayout';
import { useContext } from 'react';
import AuthContext from '../components/Context/AuthContext';
import { useRouter } from 'next/router';

export default function Home() {
  const { isAuthenticated, token, userId, login, logout } = useContext(AuthContext);
  const router = useRouter();
  // router.push('/dashboard');

  return <MainLayout title={'Home'}></MainLayout>;

  // if(isAuthenticated == false) {
  //   return ( <AuthLayout></AuthLayout> )
  // } else {
  //   return ( <MainLayout title={"Home"} ></MainLayout> )
  // }
}

// export const getServerSideProps = async ({ res }) => {
//   res.setHeader("location", `/dashboard`);
//   res.statusCode = 302;
//   res.end();
//   return { props: {} };
// };
