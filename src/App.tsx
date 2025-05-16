import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetail";
import Category from "./pages/Category";
import ScrollToTop from "./helpers/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      offset: 200,
      easing: "ease-in-out",
    });
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route index element={<Applayout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/product" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
