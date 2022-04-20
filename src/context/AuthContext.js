import { createContext, useContext } from "react";
import useToken from "../customHooks/useToken";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const { setToken, token, logout } = useToken();

  let auth = {
    setToken,
    token,
    logout,
  };

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
