import React from "react";
import Skill from "./Skill";
import { skills } from "../../api/skills";
import ImageComponent from "../ImageComponent/Image";
import img from "../../assets/imgMock.png";

export default function About() {
  return (
    <section className="about lg:flex-row  flex justify-between md:py-40 py-14 items-center flex-col">
      <div className="about-img flex justify-center mt-4 sm:block md:mt-0">
        <ImageComponent img={img} />
      </div>
      <div className="about-info lg:w-1/2 md:w-full">
        <div className="about-info__title  md:text-6xl text-3xl lg:text-start text-center font-bold mt-4 lg:mt-0">
          About me
        </div>
        <div className="about-info__descr text-xl font-light mt-8">
          I am a skilled front-end developer focused on creating responsive,
          user-friendly web interfaces. Proficient in React and modern
          frameworks, I deliver scalable, high-performance solutions,
          transforming designs into functional, elegant code.
        </div>
        <div className="about-info__skils mt-8">
          <p>Skills:</p>
          <ul className="lg:columns-3 md:columns-2 sm:columns-1 space-y-4 mt-8">
            {skills.map((skill, id) => (
              <Skill text={skill.name} key={id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
