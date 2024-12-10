import { Outlet } from "react-router";
import Header from "./header";
import Sidebar from "./sidebar";
import './appLayout.css'


export default function AppLayout() {
  return (
    <div className="layout">
    <div style={{ display: "flex", flexDirection: "row", height: "100vh" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
       
        <div style={{ padding: 16 }}>
          <Outlet />
        </div>
      </div>
    </div>
    </div>
  );
  
}