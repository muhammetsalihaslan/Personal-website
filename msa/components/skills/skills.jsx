import React from "react";

const Skills = () => {
  return (
    <div className="flex flex-col mt-[7em] ms-6 ">
      <hr className=" border border-black me-6 " />
      <div className="grid grid-cols-3 gap-y-5 mt-8">
        <div className="">
          <h1 className="text-3xl font-bold">REACT</h1>
          <p>2 Years Experience</p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">JAVASCRIPT</h1>
          <p>2 Years Experience</p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">NEXTJS</h1>
          <p>1 Years Experience</p>
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">TAILWINDCSS</h1>
          <p>1 Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
