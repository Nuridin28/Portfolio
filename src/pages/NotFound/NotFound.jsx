import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

export default function NotFound() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen "
      style={{
        backgroundColor: theme === "dark" ? "#130125" : "#fff",
        color: theme === "dark" ? "#fff" : "#130125",
      }}
    >
      <h1 className="text-6xl font-bold  mb-4">404</h1>
      <p className="text-xl mb-8">Oops! Page not found.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600  font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
