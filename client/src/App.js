import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Test from './pages/Test';
import Nav from './components/Navbar/Nav';
import Footer from './components/Footer/Footer';
import ProductPage from './components/ProductPage/ProductPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="blogs" element={<Test />} />
        <Route path="contact" element={<Test />} />
        <Route path="*" element={<Test />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

    </div>
  );
}

export default App;
