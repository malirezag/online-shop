import Header from "../ui/Header";

import EmailForm from "../ui/EmailForm";
import Footer from "../ui/Footer";
import NavHistory from "../ui/NavHistory";
import CartSummary from "../ui/CartSummary";
import CartOrders from "../components/orders/CartOrders";

export default function Cart() {
  return (
    <div className="">
      <Header />
      <NavHistory />
      <div className="flex flex-col md:flex-row md:items-start max-w-340 mx-auto  ">
        <CartOrders />
        <CartSummary />
      </div>
      <EmailForm />
      <Footer />
    </div>
  );
}
