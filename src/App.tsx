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
import SignupForm from "./components/auth/SignupForm";
import LoginForm from "./components/auth/LoginForm";
import WaitingConfirm from "./pages/WaitingConfirm";
import Cms from "./pages/Cms";
import Dashboard from "./components/cms/Dashboard";
import Customers from "./components/cms/Customers";
import AddProduct from "./components/cms/AddProduct";
import UpdateProducts from "./components/cms/UpdateProducts";
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
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/wait" element={<WaitingConfirm />} />
          <Route path="/cms" element={<Cms />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="update-products" element={<UpdateProducts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
