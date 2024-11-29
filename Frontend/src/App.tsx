import './App.css'
import Header from './Components/header';
import { Route, Routes } from 'react-router';
import Products from '././pages/products';
import AddProduct from './pages/products/addProduct';
// import Sales from './pages/sales';
// import AddSales from '././pages/sales/addSales';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
      <Header />
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Products />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<AddProduct />} />
      {/* <Route path="/" element={<Sales />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/sales/add" element={<AddSales />} /> */}
      {/* Add Sales Routes */}
    </Routes>
  )
}

export default App;