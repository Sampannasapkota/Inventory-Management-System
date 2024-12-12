import { createContext,useContext, useState } from "react";

interface AuthContextType{
    token?: string | null;
    isAuthenticated: boolean;
    login :(token: string)=>void;
    logout?: ()=>void;
  
}

const AuthContext = createContext<AuthContextType>({
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
  const logout = () => {
    localStorage.removeItem("token");
      setIsAuthenticated(false);
    
  };
  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const useAuth=()=> useContext(AuthContext);

export { AuthProvider, useAuth };




/** Steps to create ContextAPI **/
// create a context variable using createContext() function
// create a provider component that will wrap the entire application
// set value prop of the provider component
// export the context variable and the provider component
// wrap the application with the provider component
// use useContext() hook to access the context value in any component
