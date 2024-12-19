import React from "react";
import inIcon from "../../assets/in.png";
import tgIcon from "../../assets/tg.webp";
import { openNewTab } from "../../functions/openNewTab";
export default function Contacts() {
  return (
    <section className="contacts  py-6 font-bold font-[inter] ">
      <div className="flex md:flex-row md:justify-between items-center flex-col text-center text-sm lg:text-lg">
        <ul className="flex md:flex-row gap-8 flex-col ">
          <li className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-300 to-pink-500 ">
            Feel free to contact me
          </li>
          <li>nuridinnurman@gmail.com</li>
          <li>Telegram @nownory</li>
        </ul>
        <ul className="flex md:flex-row gap-8 flex-col items-center mt-4 md:mt-0 text-sm lg:text-lg">
          <li
            onClick={() => openNewTab("https://www.linkedin.com/in/nnuridin/")}
            className="cursor-pointer"
          >
            <img src={inIcon} alt="in" className="w-11" />
          </li>
          <li
            onClick={() => openNewTab("https://telegram.me/nownory")}
            className="cursor-pointer"
          >
            <img src={tgIcon} alt="tg" className="w-11" />
          </li>
        </ul>
      </div>
    </section>
  );
}
