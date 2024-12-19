import React from "react";
import ButtonSecondary from "../Buttons/ButtonSecondary";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card flex flex-col font-[inter] border-2 border-white px-6 py-4 rounded-3xl shadow-lg shadow-slate-300 mt-10 h-[50vw]">
      <div className="project-card__img">
        <img src={project.img} alt="project name" className="" />
      </div>
      <div className="project-card__title text-2xl font-bold mt-8">
        {project.title}
      </div>
      <div className="project-card__descr mt-8">{project.descr}</div>
      <div className="project-card__btns flex justify-between gap-2  mt-auto">
        <ButtonSecondary url={project.url}>Live preview</ButtonSecondary>
        <ButtonSecondary url={project.github}>Check On Github</ButtonSecondary>
      </div>
    </div>
  );
}
