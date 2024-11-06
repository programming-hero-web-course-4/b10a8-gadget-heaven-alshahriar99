import { Link } from "react-router-dom";

const Card = ({ gadgets }) => {
  const { product_title, price, product_image, id } = gadgets || {};
  return (
    <div>
      <div className="card bg-base-100-100 w-96 h-96 shadow-xl">
        <figure className="px-5 pt-5">
          <img src={product_image} alt="gadgets" className="rounded-xl" />
        </figure>
        <div className="card-body items-start text-center">
          <h2 className="card-title">{product_title}</h2>
          <p className="text-lg  ml-1">Price: ${price}</p>
          <div className="card-actions">
            <Link
              to={`/card/${id}`}
              className="bg-white text-purple-600 text-lg border border-purple-600 px-7 py-2 rounded-full"
            >
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
