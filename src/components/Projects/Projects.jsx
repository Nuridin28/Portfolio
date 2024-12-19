import React from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../api/projects";

export default function Projects() {
  return (
    <section className="projects md:py-40 py-14">
      <h1 className=" md:text-6xl text-3xl font-bold lg:text-start text-center">
        Projects I’ve Worked On
      </h1>
      <div className="projects-wrapper grid lg:grid-cols-3 gap-12 md:grid-cols-2 sm:grid-cols-1 mt-12">
        {projects.map((project, id) => (
          <ProjectCard project={project} key={id} />
        ))}
      </div>
    </section>
  );
}
