import { Bell, LogOut, Settings, UserRound } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../context/userContext";
import "./header.css";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <div className="header-container">
      <h1>Hi {user?.name || "Guest"}!</h1>
      <div className="nav-all">
        <Bell className="icon-bell" />

        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              className="IconButton"
              style={{ background: "none", color: "black" }}
            >
              <UserRound />
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="DropdownMenuContent"
              sideOffset={5}
              style={{ background: "black", color: "white" }}
            >
              <DropdownMenu.Item
                className="DropdownMenuItem"
                style={{ cursor: "pointer", marginBottom: "5px" }}
                onClick={() => navigate("/setting")}
              >
                <Settings style={{ height: "20", width: "20" }} />
                Setting
              </DropdownMenu.Item>
              <DropdownMenu.Item
                className="DropdownMenuItem"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                <LogOut />
                Logout
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </div>
  );
};

export default Header;
