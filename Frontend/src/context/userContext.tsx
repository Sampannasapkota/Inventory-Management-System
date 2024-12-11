import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { api } from "../api";

interface User {
 id: number;
  name: string;

}

interface UserContextType{
  user: User|null;
  fetchUser: (id: number)=>void;
  clearUser:()=> void;
 
}

const UserContext = createContext<UserContextType>({
  user: null,
  fetchUser:()=> {},
  clearUser:()=>{},
});

interface UserProviderProps{
  children: ReactNode;
}



const UserProvider=  ({ children }: UserProviderProps
) => {
  const [user, setUser] = useState<User | null>(null);
  const fetchUser = async ()=>{
    try{
      const response= await api.get(`/auth/profile`);
      const userData : User = response.data;
      setUser(userData);
    }
    catch(error){
      console.error("Error fetching user:", error);
    }
  };

  const clearUser=()=>{
    setUser(null);
  };

  useEffect(()=>{
    fetchUser();
  },[])

  return(
    <UserContext.Provider value={{user,fetchUser,clearUser}}>
      {children}
    </UserContext.Provider>
  );
};

export {UserProvider, UserContext};

