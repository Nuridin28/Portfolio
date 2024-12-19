import React, { useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../../Context/ThemeContext";

export default function Nav() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav>
      <ul className="md:flex list-none lg:gap-8 gap-2 lg:text-base text-sm font-medium hidden">
        <li
          className={`nav-item cursor-pointer border-b-2 border-transparent ${
            theme === "dark" ? "hover:border-white" : "hover:border-black"
          }`}
        >
          <Link to={"/About"}>About</Link>
        </li>
        <li
          className={`nav-item cursor-pointer border-b-2 border-transparent ${
            theme === "dark" ? "hover:border-white" : "hover:border-black"
          }`}
        >
          <Link to={"/Experience"}>Experience</Link>
        </li>
        <li
          className={`nav-item cursor-pointer border-b-2 border-transparent ${
            theme === "dark" ? "hover:border-white" : "hover:border-black"
          }`}
        >
          <Link to={"/Projects"}>Projects</Link>
        </li>
        <li
          className={`nav-item cursor-pointer border-b-2 border-transparent ${
            theme === "dark" ? "hover:border-white" : "hover:border-black"
          }`}
        >
          <Link to={"/Contacts"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
