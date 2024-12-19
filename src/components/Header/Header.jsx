import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Link } from "react-router";
import ThemeSwitcher from "../../Context/ThemeSwitcher";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-between items-center py-8">
      <ThemeSwitcher />
      <div className="lg:text-[32px] font-bold text-lg">
        <Link to="/">Nuridin Nurman</Link>
      </div>
      {isMobile ? <NavMobile /> : <Nav />}
    </div>
  );
}
