import "./header.css"
import { Bell, Search, UserRound } from "lucide-react";

const Header = () => {
  return (
    <div className="header-container">
      <div className="search-container">
        <Search width={16} height={16} className="icon search" />
        <input placeholder="type here..." />
      </div>
      <div>
        <Bell className="icon" />
        <UserRound className="icon" />
      </div>
    </div>
  );
};

export default Header;