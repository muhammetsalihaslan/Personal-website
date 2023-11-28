import React from "react";
import Tolink from "../link/tolink";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse   md:flex-row mt-[8rem] gap-x-6">
      <div className="ms-6 flex flex-col text-center md:text-start gap-y-5 ">
        <h1 className="text-6xl font-bold ">
          Nice to meet you! I'am{" "}
          <span className="underline underline-offset-2 decoration-sky-500">
            Muhammet Salih Aslan
          </span>
        </h1>
        <p className="mt-6 text-xl">
          Based on Turkiye, I'm front-end developer passionate about building
          accesible web apps that users love.
        </p>
        <Tolink
          toref="https://app.enhancv.com/share/d51793a8/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
          toWhere="resume"
          privateClass="underline underline-offset-2 decoration-sky-500 text-xl hover:text-sky-500"
        />
      </div>
      <div className="flex justify-center ms-[40px] -me-[20px] -mt-[25px] md:ms-0 md:-me-0 md:-mt-0">
        <Image
          src="/images/mypage.jpg"
          width={300}
          height={100}
          className="rounded-full me-6"
        />
      </div>
    </div>
  );
};

export default Hero;
