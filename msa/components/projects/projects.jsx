"use client";
import React from "react";
import ProjectsData from "/assets/data/projects.json";
import Image from "next/image";
import Tolink from "../link/tolink";

const Projects = () => {
  return (
    <div className="ms-6 me-6 mt-[3rem]">
      <div>
        <h1 className="text-5xl">Projects</h1>
      </div>
      <div className="grid grid-cols-2 mt-[3rem] gap-y-2">
        {ProjectsData.map((project) => (
          <div key={project.id} className="w-[535px] h-[500px]">
            <Image
              src={project.images}
              alt={project.title}
              width={500}
              height={400}
              className="object-fill"
            />
            <div className="flex flex-col">
              <h1>{project.title}</h1>
              <div className="flex ">
                {project.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
              <div className="flex">
                <Tolink toWhere="wiev project" />
                <Tolink toWhere="wiev code" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
