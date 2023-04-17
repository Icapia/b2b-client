import { useCallback, useEffect, useState } from "react";

import { useRouter } from "next/router";

const storageName = "userData";

export const useAuth = () => {
  const router = useRouter();

  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [user, setUser] = useState(null);

  const login = useCallback((jwtToken, id, username) => {
    setToken(jwtToken);
    setUserId(id);
    setUser(username);

    localStorage.setItem(
      storageName,
      JSON.stringify({
        userId: id,
        token: jwtToken,
        user: username,
      })
    );
  }, []);

  const me = (id, username) => {
    setUserId(id);
    setUser(username);
  };

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    setUser(null);
    localStorage.removeItem(storageName);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName));

    if (data && data.token) {
      login(data.token, data.userId, data.user);
    } else {
      router.push("/login");
    }
  }, [login]);

  return { login, logout, token, userId, user };
};
