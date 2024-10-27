import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import ProductPage from "./components/ProductPage/ProductPage";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <div className="App">
      {loading ? (
        <div className="loader">
          <ScaleLoader
            color={"#2eb82e"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blogs" element={<Test />} />
            <Route path="contact" element={<Test />} />
            <Route path="*" element={<Test />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
