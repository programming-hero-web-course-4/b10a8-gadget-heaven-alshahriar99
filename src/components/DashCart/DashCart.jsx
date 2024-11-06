/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import paymentImg from "../../assets/Group.png";

const DashCart = ({ gadgets }) => {
  const [sortedGadgets, setSortedGadgets] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [cartItems, setCartItems] = useState(gadgets);
  console.log(cartItems);
  const navigate = useNavigate();

  const totalPrice = cartItems
    .reduce((previous, item) => previous + item.price, 0)
    .toFixed(2);

  const handleShowModal = () => {
    setShowModal(true);
    setCartItems([]);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };

  const handleSort = (sortType) => {
    let sortedList;
    if (sortType === "Sort by Price") {
      sortedList = [...gadgets].sort((a, b) => b.price - a.price);
    } else {
      sortedList = gadgets;
    }
    setSortedGadgets(sortedList);
  };

  useEffect(() => {
    setSortedGadgets(gadgets);
  }, [gadgets]);

  return (
    <div className="mt-10 w-10/12 mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="space-x-3">
          <span className="text-2xl font-bold">Total cost: ${totalPrice}</span>
          <button
            onClick={() => handleSort("Sort by Price")}
            className="bg-white text-purple-700 text-xl font-semibold border border-purple-600 px-5 py-2 rounded-full"
          >
            Sort by Price
            <i className="fa-solid fa-up-down text-pink-400 ml-3"></i>
          </button>
          <button
            onClick={handleShowModal}
            className="bg-purple-600 text-white text-lg border border-purple-600 px-7 py-2 rounded-full disabled:opacity-50"
          >
            Purchase
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-96 ">
            <img className="w-20 mx-auto mb-5" src={paymentImg} alt="" />
            <hr className="pt-5" />
            <p className="mb-4 text-xl font-semibold">Payment Successfully</p>
            <p className="mb-4">Thanks for purchasing.</p>
            <p className="mb-4">Total: ${totalPrice}</p>
            <button
              onClick={handleCloseModal}
              className="w-full  py-2 bg-gray-200 text-black rounded-xl hover:bg-slate-400 font-bold"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {sortedGadgets.map((gadget) => (
        <div
          key={gadget.id}
          className="w-full h-auto border p-5 rounded-xl flex gap-6 items-center justify-between mt-10 mb-10"
        >
          <div className="flex gap-6">
            <div>
              <img
                className="w-40 h-28 rounded-box"
                src={gadget.product_image}
                alt=""
              />
            </div>
            <div className="space-y-2">
              <h2 className="text-xl font-bold">{gadget.product_title}</h2>
              <p className="text-lg text-gray-500-200">{gadget.description}</p>
              <p className="text-lg text-gray-500-200 font-medium">
                Price: ${gadget.price}
              </p>
            </div>
          </div>
          <div>
            <button>
              <i className="text-2xl fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashCart;
