import React from "react";
import { openNewTab } from "../../functions/openNewTab";

export default function ButtonSecondary({ children, url }) {
  return (
    <button
      onClick={() => openNewTab(url)}
      className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% px-6 py-2 rounded-3xl lg:text-base text-sm font-bold font-[inter] mt-10  w-1/2 "
    >
      {children}
    </button>
  );
}
