import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css';
import Home from './pages/home/Home'
import Shop from "./pages/shop/Shop";
import Login from './pages/login/Login';
import Register from "./pages/register/Register";
import Bedroom from "./pages/products/Bedroom/Bedroom";
import Mattress from "./pages/products/Mattress/Matress";
import Outdoor from "./pages/products/Outdoor/Outdoor";
import Sofa from "./pages/products/Sofa/Sofa";
import Living_Room from "./pages/products/Living-Room/Living-Room";
import Kitchen from './pages/products/Kitchen/Kitchen';
import Product from './pages/products/overview/Product';
import Checkout from "./pages/checkout/Checkout";
import Profile from './pages/profile/Profile';
import Account from './pages/account/Account'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/bedroom" element={<Bedroom />} />
        <Route path="/mattress" element={<Mattress />} />
        <Route path="/outdoor" element={<Outdoor />} />
        <Route path="/sofa" element={<Sofa />} />
        <Route path="/living-room" element={<Living_Room />} />
        <Route path="/kitchen" element={<Kitchen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  )
}
export default App;
