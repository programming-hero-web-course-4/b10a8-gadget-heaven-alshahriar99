/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Gadgets = ({ category }) => {
  return (
    <div className="col-span-2 bg-gray-100 w-11/12 h-max py-10 rounded-xl">
      <div className="flex flex-col w-40 mx-7 ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `py-2 border bg-gray-200 rounded-full text-left px-5 mb-3 text-lg font-semibold ${
              isActive ? "bg-purple-600 text-lg text-white font-semibold" : ""
            }`
          }
        >
          All Product
        </NavLink>
        {category.map((category) => (
          <NavLink
            className={({ isActive }) =>
              `py-2 border bg-gray-200 rounded-full text-left px-5 mb-3 text-lg font-semibold ${
                isActive ? "bg-purple-600 text-lg text-white font-semibold" : ""
              }`
            }
            key={category.category}
            to={`/category/${category.category}`}
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Gadgets;
