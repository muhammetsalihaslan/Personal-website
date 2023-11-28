import Image from "next/image";
import React from "react";
import Tolink from "../link/tolink";

const Footer = () => {
  return (
    <div className="mt-[3rem] p-6 md:mt-[5rem]    ">
      <hr className=" border border-black ms-6 me-6 " />
      <div className="flex  justify-center  md:justify-between  ">
        <div className="flex gap-x-3 mt-6 ms-6">
          <div className="invisible md:visible text-3xl mt-1 font-bold cursor-pointer">
            muhammetSalihAslan
          </div>
        </div>
        <div className="flex  gap-x-7 mt-6 me-6 -ms-[17rem] md:-ms-0 ">
          <Tolink toref="https://twitter.com/muhammetsalih34">
            <Image
              src="/images/logo-black.png"
              width={30}
              height={30}
              alt="x"
            />
          </Tolink>
          <Tolink toref="https://www.linkedin.com/in/muhammet-salih-aslan/">
            <Image
              src="/images/linkedin.png"
              width={40}
              height={40}
              alt="linkedin"
              className="cursor-pointer"
            />
          </Tolink>
          <Tolink toref="https://github.com/muhammetsalihaslan">
            <Image
              src="/images/iconmonstr-github-1.svg"
              width={40}
              height={40}
              alt="github"
              className="cursor-pointer"
            />
          </Tolink>
          <Tolink toref="https://app.netlify.com/teams/muhammetsalihaslan/overview">
            <Image
              src="/images/netlify-icon-seeklogo.com.svg"
              width={40}
              height={40}
              alt="netlify"
              className="cursor-pointer"
            />
          </Tolink>
        </div>
      </div>
    </div>
  );
};

export default Footer;
