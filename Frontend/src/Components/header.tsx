import "./header.css"
import { Bell, Search, UserRound } from "lucide-react";
import { useNavigate } from "react-router";



const Header = () => {
  const navigate= useNavigate();
  return (
    <div className="header-container">
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input placeholder="type here..." />
      </div>
      <div>
        <Bell className="icon-bell" />
        <UserRound className="icon-profile" />

        <button style={{ marginLeft: 16, padding: "4px 16px", width: "30%" }}
          onClick={() => {
            navigate("/login");
          }}>Login</button>
      <button style={{ marginLeft: 16, padding: "4px 16px", width: "30%" }}
          onClick={() => {
            navigate("/signup");
          }}>Signup</button>
      </div>


    </div>
  );
};

export default Header;