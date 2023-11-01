import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import './index.css';
import Home from './pages/home/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
export default App;
