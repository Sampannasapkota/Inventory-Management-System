import "./App.css";
import "./Components/table.css";
// import Header from './Components/header';
import { Navigate, Route, Routes } from "react-router";
import Products from "././pages/products";
import AppLayout from "./Components/appLayout";
import { useAuth } from "./context/authContext";
import Login from "./pages/loginandsignup/login";
import NewOrganization from "./pages/loginandsignup/newOrganization";
import Signup from "./pages/loginandsignup/signup";
import AddProduct from "./pages/products/addProduct";

const ProtectedRoutes = () => {
  const { token } = useAuth();
  console.log({ token });
  return token ? <AppLayout /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/add" element={<AddProduct />} />

        <Route path="/organization" element={<NewOrganization />} />
        <Route path="*" element={<p>Page not found!!!</p>} />
      </Route>
    </Routes>
  );
}

export default App;
