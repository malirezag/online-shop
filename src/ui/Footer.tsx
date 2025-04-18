import Title from "./Title";
import { FaTelegram, FaWhatsapp } from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { VscGithub } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="px-5 mt-10 mb-6">
      <div>
        <Title title="SHOP.CO" className="text-left" />
        <p className="text-gray-500 tracking-wide">
          We have clothes that suits your style and which you’re proud to wear.
          From women to men.
        </p>
      </div>

      <div className="flex flex-row text-3xl items-center gap-4 my-5">
        <VscGithub />
        <FaWhatsapp />
        <FaTelegram />
        <LiaPhoneVolumeSolid />
      </div>

      <div className="flex flex-wrap justify-around gap-15 py-6 border-b border-gray-400 ">
        <div className="text-sm text-gray-500">
          <Title
            title="COMPANY"
            className="tracking-widest text-lg font-semibold text-black text-left"
          />
          <p>About</p>
          <p>Features</p>
          <p>Works</p>
          <p>Career</p>
        </div>

        <div className="text-sm text-gray-500">
          <Title
            title="HELP"
            className="tracking-widest text-lg font-semibold text-black text-left"
          />
          <p>Customer Support</p>
          <p>Delivery Details</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="text-sm text-gray-500">
          <Title
            title="FAQ"
            className="tracking-widest text-lg font-semibold text-black text-left"
          />
          <p>Account</p>
          <p>Manage Deliveries</p>
          <p>Orders</p>
          <p>Payment</p>
        </div>

        <div className="text-sm text-gray-500">
          <Title
            title="RESOURCES"
            className="tracking-widest text-lg font-semibold text-black text-left"
          />
          <p>Free eBook</p>
          <p>Development Tutorial</p>
          <p>How to - Blog</p>
          <p>Youtube Playlist</p>
        </div>
      </div>
      <p className="text-center text-gray-500 mt-5">
        Shop.co © 2000-2023, All Rights Reserved
      </p>
      <div className="flex flex-row ga-4 justify-center items-center mt-2">
        <img src="/images/Badge.png" alt="" />
        <img src="/images/Badge (2).png" alt="" />
        <img src="/images/Badge (1).png" alt="" />
        <img src="/images/Badge (3).png" alt="" />
      </div>
    </footer>
  );
}
