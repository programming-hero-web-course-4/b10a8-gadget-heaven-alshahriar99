import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import {
  addToStoreCart,
  addToStoreWishlist,
  getStoreAddWishlist,
} from "../Utilitis/Utilitis";
import { CartContext, WishContext } from "../Root/Root";
import toast from "react-hot-toast";

const CardDetails = () => {
  const [cartCount, setCartCount] = useContext(CartContext);
  const [wistList, setWishList] = useContext(WishContext);

  const { id } = useParams();
  const allGadgetsData = useLoaderData();
  const [gadgets, setGadgets] = useState({});

  const {
    product_title,
    product_image,
    category,
    price,
    description,
    specification,
    rating,
    warranty,
  } = gadgets;

  const [disCart, setDisCart] = useState(false);

  useEffect(() => {
    const singleData = allGadgetsData.find(
      (gadget) => gadget.id === parseInt(id)
    );
    setGadgets(singleData);

    const addToCart = getStoreAddWishlist();
    const isExist = addToCart.find((item) => item.id == singleData.id);
    if (isExist) {
      setDisCart(true);
    }
  }, [allGadgetsData, id]);

  const handleAddToCart = (id) => {
    addToStoreCart(id);
    console.log(id);
    setCartCount((prevCount) => prevCount + 1);
    toast.success("Item added to Cart!");
  };

  const handleAddToWishlist = (id) => {
    addToStoreWishlist(id);
    setWishList((prevCount) => prevCount + 1);
    toast.success("Item added to Wish List!");
  };

  return (
    <div>
      <div className="relative">
        <div className=" h-96 text-center p-8 bg-purple-600 text-white">
          <h1 className="text-3xl font-bold mb-4">Product Details</h1>
          <p className="text-center mb-8">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="flex w-9/12  p-2 justify-start bg-white border rounded-lg shadow-md items-center mx-auto mt-20 gap-5 absolute top-32 right-52">
          <div className=" p-4">
            <img
              className="rounded-3xl max-w-md h-[400px]"
              src={product_image}
              alt=""
            />
          </div>

          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {product_title}
            </h2>
            <p className="text-lg font-semibold text-gray-800 mt-2">
              Price: ${price}
            </p>

            <p className="inline-block px-3 py-1 mt-2 mb-4 text-sm font-semibold text-green-700 bg-green-100 rounded-full">
              In Stock
            </p>

            <p className="text-gray-600 mb-4">{description}</p>

            <div className="mb-4">
              <span className="font-semibold text-gray-800">
                Specification:
              </span>
              <ul>
                {specification &&
                  specification.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
              </ul>
            </div>

            <div className="flex items-center mb-4">
              <span className="font-semibold text-gray-800 mr-2">Rating:</span>
              <div className="flex text-yellow-400 mr-2">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </div>
              <span className="text-gray-600">4.8</span>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleAddToCart(id)}
                className="flex items-center justify-center px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700"
              >
                Add to Cart
              </button>
              <button
                disabled={disCart}
                onClick={() => handleAddToWishlist(id)}
                className="p-2 text-black bg-gray-400 rounded-full hover:bg-purple-500"
              >
                <i className="fa-regular fa-heart px-2 py-2  "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
