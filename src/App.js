// src/App.js
import './App.css';

import Register from './components/Register';
import HomePage from './components/HomePage';
import CustomPage from './components/CustomPage';
import Cafe from './components/Cafe';
import Modular from './components/Modular';
import Hotels from './components/Hotels';
import Vase from './components/Vase';
import Light from './components/Light';
import Lamp from './components/Lamp';
import Clock from './components/Clock';
import Smalldecor from './components/Smalldecor';
import Mirror from './components/Mirror';
import Cafe1 from './components/Cafe1';
import Cafe3 from './components/Cafe3';
import Cafe2 from './components/Cafe2';
import Cafe4 from './components/Cafe4';
import Cafe5 from './components/Cafe5';
import Decor1 from './components/Decor1';
import Waterfall from './components/Waterfall';
import Pooja from './components/Pooja';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUpPage from './components/SignUpPage';
import LoginPage from './components/LoginPage';
import Bhk from './components/Bhk';
import ColorPalette from './components/ColorPalette';
import Product from './components/Product';
import Service from './components/Service';
import About from './components/About';
import Contact from './components/Contact';
import Furniture1 from './components/Furniture1';
import ColorPalette1 from './components/ColorPalette1';
import ColorPalette3 from './components/ColorPalette3';
import Contact1 from './components/Contact1';




function App() {
  return (
    <div className="App">
   
 <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/custom" element={<CustomPage />} />
          <Route path="/cafe" element={<Cafe />} />
          <Route path="/modular" element={<Modular />} />
          <Route path="/cafe3" element={<Cafe3 />} />
          <Route path="/cafe1" element={<Cafe1 />} />
          <Route path="/cafe2" element={<Cafe2 />} />
          <Route path="/cafe4" element={<Cafe4 />} />
          <Route path="/cafe5" element={<Cafe5 />} />
          <Route path="/decor" element={<Decor1 />} />
          <Route path="/vase" element={<Vase />} />
          <Route path="/light" element={<Light />} />
          <Route path="/sdecor" element={<Smalldecor />} />
          <Route path="/clock" element={<Clock/>} />
          <Route path="/lamp" element={<Lamp/>} />
          <Route path="/mirror" element={<Mirror/>} />
          <Route path="/water" element={<Waterfall/>} />
          <Route path="/hotel" element={<Hotels/>} />
          <Route path="/pooja" element={<Pooja/>} />
          <Route path="/bhk" element={<Bhk/>} />
          <Route path="/service" element={<Service/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/con" element={<Contact/>} />
          <Route path="/fur" element={<Furniture1/>} />
          <Route path="/color" element={<ColorPalette/>} />
          <Route path="/color1" element={<ColorPalette1/>} />
          <Route path="/color3" element={<ColorPalette3/>} />
          <Route path="/con1" element={<Contact1/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
