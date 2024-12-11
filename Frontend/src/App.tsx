import "./App.css";
import "./Components/table.css";
// import Header from './Components/header';
import { Navigate, Route, Routes } from "react-router";
import Products from "././pages/products";
import AddProduct from "./pages/products/addProduct";
import Login from "./pages/loginandsignup/login";
import Signup from "./pages/loginandsignup/signup";
import AppLayout from "./Components/appLayout";

import NewOrganization from "./pages/loginandsignup/newOrganization";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log({ isAuthenticated });
  return isAuthenticated ? <AppLayout /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/organization" element={<p>Page not found!!!</p>} />
        <Route path="*" element={<NewOrganization />} />
      </Route>
    </Routes>
  );
}

export default App;
