import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ children }) => {
  const linkActive = (isActive) =>
    "hover:text-blue-500 " +
    (isActive ? "text-blue-500 font-semibold" : "text-slate-400");
  return (
    <div>
      <div className="w-full bg-slate-50 h-20 flex justify-between items-center px-4">
        <div className="flex gap-5 text-lg text-slate-700">
          <NavLink
            to="/"
            className={({ isActive }) => linkActive(isActive)}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) => linkActive(isActive)}
          >
            Blogs
          </NavLink>
        </div>
        <Link to={'/login'} className="border px-2 py-1 border-blue-600 rounded-md font-semibold hover:bg-blue-600 hover:text-white">
          Login
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
