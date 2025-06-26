import React from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#2C3E50]">
        <div className="container w-[87%]  px-2 py-8 flex justify-between items-center">
          <h1 className="text-white text-4xl font-bold">
            <NavLink to="/home">Start Framework</NavLink>
          </h1>
          <ul className="flex gap-8 text-white text-l font-bold">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => {
                  return `${
                    isActive
                      ? "bg-[#1ABC9C] w-fit h-9 rounded-md "
                      : ""
                  } px-2 py-1 `;
                }}
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) => {
                  return `${
                    isActive
                      ? "bg-[#1ABC9C] w-fit h-9  rounded-md "
                      : ""
                  } px-2 py-1 `;
                }}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => {
                  return `${
                    isActive
                      ? "bg-[#1ABC9C] w-fit h-9 rounded-md "
                      : ""
                  } px-2 py-1 `;
                }}
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
