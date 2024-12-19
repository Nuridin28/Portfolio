import React from "react";

export default function ButtonPrimary({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type}
      className={`bg-[#FD5A14] px-6 py-4 rounded-sm text-lg font-bold font-[inter] mt-10 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
