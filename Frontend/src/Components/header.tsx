import "./header.css"
import { Bell, UserRound } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext";





const Header = () => {
  
  const navigate= useNavigate();
  const {user,fetchUser, clearUser}= useContext(UserContext);
  const [hasUser, setHasUser]= useState(false)

  const handleLoginNavigation =()=>{
    if(user){
      clearUser();
      navigate("/");

    }
    else{
      navigate("/login");
    }
  };

  useEffect(()=>{
    if (user){
      console.log({user});
      setHasUser(true);
    }
  }, [user]);
  return (
    <div className="header-container">
     
      <h1>Hi {user?.name }!</h1>
      <div className="nav-all">
        <Bell className="icon-bell" />
        <UserRound className="icon-profile" />

        <button style={{ marginLeft: 16, padding: "4px 16px", width: "30%",height:"30px",backgroundColor:"black" }}
          onClick={handleLoginNavigation}
          >Login</button>
      <button style={{ marginLeft: 16, padding: "4px 16px", width: "30%",height:"30px",backgroundColor:"black" }}
          onClick={() => {
            navigate("/organization");
          }}>Signup</button>
      </div>


    </div>
  );
};

export default Header;