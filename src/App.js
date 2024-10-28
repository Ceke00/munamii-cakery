import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";
import ErrorMessage from "./Pages/ErrorMessage";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Confirmation from "./Pages/Confirmation";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <NavBar />
      <div className="container max-w-screen-lg mx-auto bg-white">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/confirmation" element={<Confirmation />}></Route>
          <Route path="/*" element={<ErrorMessage />}></Route>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
