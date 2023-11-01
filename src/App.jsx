import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css';
import Home from './pages/home/Home'
import Shop from "./pages/shop/Shop";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

      </Routes>
    </Router>
  )
}
export default App;
