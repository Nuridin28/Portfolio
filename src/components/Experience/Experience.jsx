import React from "react";
import { experience } from "../../api/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section className="experience  md:py-40 py-14 w-full">
      <h1 className=" md:text-6xl text-3xl font-bold lg:text-start text-center">
        Experience
      </h1>
      <ul className="mt-16">
        {experience.map((e, id) => (
          <ExperienceItem experienceInfo={e} key={id} />
        ))}
      </ul>
    </section>
  );
}
