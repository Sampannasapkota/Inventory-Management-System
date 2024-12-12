import "./header.css";
import { Bell, LogOut, Settings, UserRound } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { UserContext } from "../context/userContext";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!event.target || !(event.target as HTMLElement).closest(".dropdown-container")) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    <div className="header-container">
      <h1>Hi {user?.name || "Guest"}!</h1>
      <div className="nav-all">
        
        <Bell className="icon-bell" />
        <div
          className="dropdown-container"
          onClick={toggleDropdown}
          style={{ cursor: "pointer", position: "relative" }}
        >
          <UserRound />
          {isDropdownOpen && (
            <div
              className="dropdown-content"
              style={{
                position: "absolute",
                top: "100%",
                right: "0",
                backgroundColor: "black",
                padding: "10px",
                borderRadius: "5px",
                zIndex: "1000",
              }}
            >
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  color: "white",
                }}
              >
                <li className="lists" style={{ marginBottom: "10px" }}>
                  <NavLink
                    to="/products"
                    className={({ isActive }) =>
                      isActive ? "active-item" : ""
                    }
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Settings />
                    Settings
                  </NavLink>
                </li>
                <li className="lists">
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "active-item" : ""
                    }
                    style={{
                      color: "white",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <LogOut />
                    Logout
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
