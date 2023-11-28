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
      <div className="grid grid-cols-2 mt-[3rem] gap-y-1 ms-6 lg:items-center ">
        {ProjectsData.map((project) => (
          <div key={project.id} className="w-[535px] h-[300px] group relative">
            <div className="group">
              <Image
                src={project.images}
                alt={project.title}
                width={450}
                height={400}
                className="cursor-pointer lg:group-hover:opacity-25 "
              />
              <div className="flex gap-x-2 mt-[55px] absolute lg:w-[200px]  lg:-mt-[8rem] lg:flex lg:flex-col lg:items-center lg:ms-[7rem] lg:gap-y-2 lg:cursor-pointer lg:invisible lg:group-hover:visible  ">
                <Tolink
                  toref={project.projectUrl}
                  toWhere="wiev project"
                  privateClass="underline underline-offset-4 decoration-sky-500"
                />
                <Tolink
                  toref={project.sourceCodeUrl}
                  toWhere="wiev code"
                  privateClass="underline underline-offset-4 decoration-sky-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-y-1 lg:relative   ">
              <h1 className="text-2xl">{project.title}</h1>
              <div className="flex gap-x-2 ">
                {project.skills.map((skill, index) => (
                  <p key={index}>{skill}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
