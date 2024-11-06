import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoreAddToCart, getStoreAddWishlist } from "../Utilitis/Utilitis";
import DashCart from "../DashCart/DashCart";
import DashWishlist from "../DashWish/DashWishlist";

const Dashboard = () => {
  const allData = useLoaderData();
  const [gadgets, setGadgets] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [activeTab, setActiveTab] = useState("cart");

  useEffect(() => {
    const storeCartList = getStoreAddToCart();
    const storeListInt = storeCartList.map((id) => parseInt(id));
    const cartList = allData.filter((gadget) =>
      storeListInt.includes(gadget.id)
    );
    setGadgets(cartList);

    const storeWishList = getStoreAddWishlist();
    const storeWishListInt = storeWishList.map((id) => parseInt(id));
    const wishListItems = allData.filter((gadget) =>
      storeWishListInt.includes(gadget.id)
    );
    setWishList(wishListItems);
  }, [allData]);

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-8 bg-purple-600 text-white">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-center max-w-md mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-14 py-3 ${
              activeTab === "cart"
                ? "bg-white text-purple-600"
                : "text-white border border-white"
            } font-semibold rounded-full shadow-md `}
          >
            Cart
          </button>

          <button
            onClick={() => setActiveTab("wishlist")}
            className={`px-10 py-3 ${
              activeTab === "wishlist"
                ? "bg-white text-purple-600"
                : "text-white border border-white"
            } font-semibold rounded-full `}
          >
            Wishlist
          </button>
        </div>
      </div>

      {activeTab === "cart" && <DashCart gadgets={gadgets} />}
      {activeTab === "wishlist" && <DashWishlist wishList={wishList} />}
    </div>
  );
};

export default Dashboard;
