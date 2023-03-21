import '../styles/globals.scss';
import '../styles/main.scss';
import ThemeContext from '../components/Context/Theme';
import AuthContext from '../components/Context/AuthContext';
import { useState } from 'react';
import { useAuth } from '../hooks/auth.hook';

function CrmApp({ Component, pageProps }) {
  const [isActive, setActive] = useState(false);
  const { userId, user, token, login, logout } = useAuth();
  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ userId, token, login, logout, isAuthenticated, user }}>
      <ThemeContext.Provider value={{ isActive, setActive }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default CrmApp;
