import logo from "./logo.svg";
import "./App.css";
import Laptop from "./pages/Laptop";
import Navbar from "./components/Navbar";
import Mobile from "./pages/Mobile";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./components/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobile" element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
