import React from "react";

export default function ExperienceItem({ experienceInfo }) {
  return (
    <li className="flex items-center justify-between mt-12 sm:flex-row flex-col md:border-0 border border-white rounded-xl px-4 py-2 text-center lg:text-right">
      <div className="md:text-xl text-sm font-bold ">
        {experienceInfo.period}
      </div>
      <div className="flex flex-col w-2/3 mt-2 sm:mt-0">
        <p className="md:text-xl text-sm font-medium font-[inter]">
          {experienceInfo.role} at {experienceInfo.company}
        </p>
        <p className="md:text-xl text-sm font-normal font-[inter] mt-3">
          {experienceInfo.geolocation}
        </p>
        <p className="md:text-xl text-sm mt-4 font-normal font-[inter]">
          {experienceInfo.descr}
        </p>
      </div>
    </li>
  );
}
