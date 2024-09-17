
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'; 
import Menu from './components/menu';
import Order from './components/order' 
import About from './components/about'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
