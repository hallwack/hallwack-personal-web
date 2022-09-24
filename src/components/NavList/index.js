import React from "react";
import { NavLink } from "react-router-dom";

function NavList({ href, children }) {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-sky-400 to-sky-500 bg-[length:100%_3px] bg-left-bottom bg-no-repeat transition-[background-size] text-sky-800"
          : "bg-gradient-to-r from-sky-400 to-sky-500 bg-[length:0px_3px] bg-left-bottom bg-no-repeat transition-[background-size] duration-[400ms] hover:bg-[length:100%_3px]"
      }
    >
      {children}
    </NavLink>
  );
}

export default NavList;
