import React from "react";
import Tolink from "../link/tolink";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-row mt-[8rem] gap-x-6">
      <div className="ms-6 flex flex-col justify-center ">
        <h1 className="text-6xl font-bold gap-y-2">
          Nice to meet you! I'am{" "}
          <span className="underline underline-offset-2 decoration-sky-500">
            Muhammet Salih Aslan
          </span>
        </h1>
        <p className="mt-6 text-xl">
          Based on Turkiye, I'm front-end developer passionate about building
          accesible web apps that users love.
        </p>
        <Tolink toWhere={"contact me"} privateClass="mt-8" />
      </div>
      <Image
        src="/images/mypage.jpg"
        width={300}
        height={100}
        className="rounded-full me-6"
      />
    </div>
  );
};

export default Hero;
