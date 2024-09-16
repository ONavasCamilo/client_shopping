import React, { useState, useContext } from "react";

const authContext = React.createContext();
const setAuthContext = React.createContext();

export function useAuthContext() {
  return useContext(authContext);
}

export function useSetAuthContext() {
  return useContext(setAuthContext);
}

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState({ login: false, user: {}, token: null, detailsUser: {}});

  const handleOnAuthContext = (login, user, token, detailsUser) => {
    setAuth({ login, user, token, detailsUser });
  };

  const handleLogoutAuthContext = () => {
    setAuth({ login: false, user: {}, token: null, detailsUser: {} });
  };

  return (
    <authContext.Provider value={auth}>
      <setAuthContext.Provider
        value={{ handleOnAuthContext, handleLogoutAuthContext }}
      >
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  );
}
