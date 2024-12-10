import { createContext, useState } from "react";

// interface AuthContextType{
//     token?: string | null;
//     isAuthenticated: boolean;
//     login :()=>void;
//     logout: ()=>void;
// }

const AuthContext = createContext<any>({
  token: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});
const AuthProvider = ({ children }: any) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = localStorage.getItem("token");

  const login = (token: string) => {
    if (token) {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
    }
  };
  const logout = (token: string) => {
    if (token) {
      setIsAuthenticated(false);
    }
  };
  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };

//Steps to create contextx//

//create a context variable using create
