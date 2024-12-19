import React from "react";
import { Link } from "react-router";

export default function Nav() {
  return (
    <nav>
      <ul className="md:flex list-none lg:gap-8 gap-2 lg:text-base text-sm font-medium  hidden">
        <li className="nav-item cursor-pointer">
          <Link to={"/About"}>About</Link>
        </li>
        <li className="nav-item cursor-pointer">
          <Link to={"/Experience"}>Experience</Link>
        </li>
        <li className="nav-item cursor-pointer">
          <Link to={"/Projects"}>Projects</Link>
        </li>
        <li className="nav-item cursor-pointer">
          <Link to={"/Contacts"}>Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}
