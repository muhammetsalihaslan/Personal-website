import Link from "next/link";
import React from "react";
import Tolink from "../link/tolink";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div>
        <h1>
          Nice to meet you! I'am{" "}
          <span className="underline underline-offset-2 decoration-sky-500">
            Muhammet Salih Aslan
          </span>{" "}
        </h1>
        <p>
          Based on Turkiye, I'm front-end developer passionate about building
          accesible web apps that users love.{" "}
        </p>
        <Tolink />
      </div>
      <Image
        src="/images/mypage.jpg"
        width={300}
        height={100}
        className="rounded-full"
      />
    </div>
  );
};

export default Hero;
