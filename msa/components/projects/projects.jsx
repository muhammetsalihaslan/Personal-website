"use client";
import React from "react";
import ProjectsData from "/assets/data/projects.json";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="ms-6 me-6 mt-[3rem]">
      <div>
        <h1 className="text-5xl">Projects</h1>
      </div>
      <div>
        {ProjectsData.map((project) => (
          <Image
            src={project.images}
            alt={project.title}
            width={90}
            height={90}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
