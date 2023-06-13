import { createContext, useState } from 'react';
import { login, logout } from "../utils/localStorageUtil"

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  const setAuthenticatedUser = (userDetails) => {
    setUser(userDetails);
    setAuthenticated(true);
    login(userDetails);
  }

  const clearAuthenticatedUser = () => {
    setUser({});
    setAuthenticated(false);
    logout();
  }

  return (
    <AuthContext.Provider value={{ clearAuthenticatedUser, setAuthenticatedUser, authenticated, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
