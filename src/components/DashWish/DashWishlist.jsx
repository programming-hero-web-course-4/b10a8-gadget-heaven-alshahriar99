/* eslint-disable react/jsx-key */

const DashWishlist = ({ wishList }) => {
  return (
    <div className="w-10/12 mx-auto py-10 space-y-5">
      <h1 className="text-2xl font-bold">Wishlist</h1>
      {wishList.map((gadgets) => (
        <div>
          <div className="w-full h-auto border p-5 rounded-xl flex gap-6 items-center justify-between mt-10 mb-10 ">
            <div className="flex gap-6 ">
              <div>
                <img
                  className="w-44 h-36 rounded-box"
                  src={gadgets.product_image}
                  alt=""
                />
              </div>

              <div className="space-y-2">
                <h2 className="text-xl font-bold">{gadgets.product_title}</h2>

                <p className="text-lg text-gray-500-200">
                  {gadgets.description}
                </p>
                <p className="text-lg text-gray-500-200 font-medium">
                  Price: ${gadgets.price}
                </p>
                <button className="flex items-center justify-center px-4 py-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <button>
                <i className="text-2xl fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashWishlist;
