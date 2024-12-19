import React from "react";
import liIcon from "../../assets/li.png";
export default function Skill({ text }) {
  return (
    <li className="flex gap-2">
      <img src={liIcon} alt={text} className="w-6 h-6 aspect-square" />
      <p>{text}</p>
    </li>
  );
}
