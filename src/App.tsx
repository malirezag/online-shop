import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./pages/Cart";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200,
      easing: "ease-in-out",
    });
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Applayout />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
