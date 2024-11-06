import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ cartCount, wistList }) => {
  const { pathname } = useLocation();
  return (
    <div
      className={`navbar ${
        pathname === "/"
          ? "bg-[#9538E2] text-white mt-5"
          : "bg-white text-black"
      } px-20 py-5  rounded-t-2xl`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                ` ${isActive ? "text-warning" : "hover:text-warning"}`
              }
              to="/contract"
            >
              Contract
            </NavLink>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex gap-6 text-base ">
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/statistics"
        >
          Statistics
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            ` ${isActive ? "text-warning" : "hover:text-warning"}`
          }
          to="/contract"
        >
          Contract
        </NavLink>
      </div>
      <div className="navbar-end rounded-full text-white flex gap-3 relative">
        <button className="bg-white text-black px-3 py-2 rounded-full border">
          <i className="fa-solid fa-cart-shopping "></i>
          <span className="absolute -top-2 text-red-500">{cartCount}</span>
        </button>
        <button className="bg-white text-black px-3 py-2 rounded-full border">
          <i className="fa-solid fa-heart"></i>
          <span className="absolute -top-2 text-red-500 font-semibold">
            {wistList}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
