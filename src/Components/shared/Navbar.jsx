import { Link } from "react-router-dom";

import ThemeButton from "../mini-components/ThemeButton";

const Navbar = () => {


  const navItems = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 dark:bg-gray-500 dark:text-white max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link to={'/'}><a className="btn btn-ghost normal-case text-2xl">Home</a></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end flex gap-6 md:gap-12 items-center">
            <div className="text-xl sm:text-2xl">
                <ThemeButton></ThemeButton>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
