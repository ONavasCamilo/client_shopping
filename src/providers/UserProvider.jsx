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
  const [auth, setAuth] = useState({ user: {}, token: null });

  const handleOnAuthContext = (newUser, newToken) => {
    setAuth({ user: newUser, token: newToken })
  };

  return (
    <authContext.Provider value={auth}>
      <setAuthContext.Provider value={handleOnAuthContext}>
        {children}
      </setAuthContext.Provider>
    </authContext.Provider>
  );
}
