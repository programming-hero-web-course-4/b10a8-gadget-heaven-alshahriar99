import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";
import { Toaster } from "react-hot-toast";

export const CartContext = createContext(0);
export const WishContext = createContext(0);

const Root = () => {
  const [cartCount, setCartCount] = useState(0);
  const [wistList, setWishList] = useState(0);

  return (
    <WishContext.Provider value={[wistList, setWishList]}>
      <CartContext.Provider value={[cartCount, setCartCount]}>
        <div>
          <Toaster />
          {/* navbar  */}
          <div className="container mx-auto">
            <Navbar cartCount={cartCount} wistList={wistList}></Navbar>
          </div>

          {/* outlet */}
          <div className="container mx-auto  min-h-[calc(100vh-220px)]">
            <Outlet></Outlet>
          </div>

          {/* footer */}
          <Footer></Footer>
        </div>
      </CartContext.Provider>
    </WishContext.Provider>
  );
};

export default Root;
