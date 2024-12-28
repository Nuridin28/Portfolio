import React, { useContext, useState } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Context/ThemeContext";
import ThemeSwitcher from "../../Context/ThemeSwitcher";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative">
      <div
        className="flex flex-col gap-1 w-8 cursor-pointer"
        onClick={toggleMenu}
      >
        <div
          className={`h-1 w-full  rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-y-2 rotate-45" : ""
          }`}
          style={{ background: theme === "dark" ? "white" : "black" }}
        ></div>
        <div
          className={`h-1 w-full rounded transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : ""
          }`}
          style={{ background: theme === "dark" ? "white" : "black" }}
        ></div>
        <div
          className={`h-1 w-full  rounded transition-transform duration-300 ease-in-out ${
            isOpen ? "-translate-y-2 -rotate-45" : ""
          }`}
          style={{ background: theme === "dark" ? "white" : "black" }}
        ></div>
      </div>

      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col gap-2 absolute top-12 right-2 bg-gray-700 text-white py-2 px-4 w-48 rounded-lg shadow-lg z-10`}
      >
        <li className="menu-item">
          <Link
            to="/About"
            className="block px-4 py-2 rounded hover:bg-gray-600"
            onClick={toggleMenu}
          >
            About
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/Experience"
            className="block px-4 py-2 rounded hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Experience
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/Projects"
            className="block  px-4 py-2 rounded hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Projects
          </Link>
        </li>
        <li className="menu-item">
          <Link
            to="/Contacts"
            className="block  px-4 py-2 rounded hover:bg-gray-600"
            onClick={toggleMenu}
          >
            Contacts
          </Link>
        </li>
        <li className="flex sm:hidden px-4">
          <ThemeSwitcher />
        </li>
      </ul>
    </div>
  );
};

export default NavMobile;
