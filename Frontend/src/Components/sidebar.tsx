import { Building, LogOut,  PackageOpen,  Settings, User2 } from "lucide-react";
import {  NavLink, useNavigate } from "react-router";
import './sidebar.css'


export default function Sidebar() {
  const navigate= useNavigate()
  return (
    <div className="sidebar" style={{ backgroundColor: "#1E201E", color: "white", height:"100vh" }}>
      <div style={{ display: "flex", height: 80, alignItems: "center"}}>
      <img src="/vite.svg" height={45} width="100%" />
      </div>
      <ul>
      <li>
          <NavLink to="/products" className={({ isActive }) => isActive ? "active-item" : ""}>
            <PackageOpen />
            Product
          </NavLink>
        </li>
        <li>
          <NavLink to="/sales" className={({ isActive }) => isActive ? "active-item" : ""}>
            <Building />
            Organization
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/items" className={({ isActive }) => isActive ? "active-item" : ""}>
            <Settings />
            Item
          </NavLink>
        </li>
        <li>
          <NavLink to="/user" className={({ isActive }) => isActive ? "active-item" : ""}>
            <User2 />
            User
          </NavLink>
        </li>
        <li>
          {/* <NavLink to="/login" className={({ isActive }) => isActive ? "active-item" : ""}>
            <LogOut />
            Logout
          </NavLink> */}
          
        </li>
      </ul>
      <button onClick={() => navigate("/login")} style={{background:"none", border:"solid",borderRadius:"5px", width:"70%", margin:"120px 0px 0px 30px", display:"flex", alignItems:"center",  }} >
            <LogOut style={{width:"24px", height:"20px", alignItems:"center", marginRight:"10px"}}/>
            Logout
          </button>
    </div>
  );
}