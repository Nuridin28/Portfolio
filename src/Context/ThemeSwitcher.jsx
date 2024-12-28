import React, { useContext, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useContext(ThemeContext);

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    // {
    //   icon: "desktop-outline",
    //   text: "system",
    // },
  ];

  useEffect(() => {
    switch (theme) {
      case "dark":
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  return (
    <div className="flex gap-4">
      {options?.map((opt) => (
        <button
          key={opt.text}
          className={`w-8 h-8 leading-9 text-xl rounded-full hover:bg-neutral-400 flex items-center justify-center ${
            theme === opt.text ? "text-sky-600" : ""
          } `}
          onClick={() => setTheme(opt.text)}
        >
          <ion-icon name={opt.icon}></ion-icon>
        </button>
      ))}
    </div>
  );
}
