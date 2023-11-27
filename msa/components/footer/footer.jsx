import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-[5rem] p-6">
      <hr className=" border border-black ms-6 me-6 " />
      <div className="flex justify-between ">
        <div className="flex gap-x-3 mt-6 ms-6">
          <div className="text-3xl mt-1 font-bold cursor-pointer">
            muhammetSalihAslan
          </div>
        </div>
        <div className="flex items-center gap-x-7 mt-6 me-6 ">
          <Image
            src="/images/logo-black.png"
            width={30}
            height={30}
            alt="x"
            className="cursor-pointer"
          />
          <Image
            src="/images/linkedin.png"
            width={40}
            height={40}
            alt="linkedin"
            className="cursor-pointer"
          />
          <Image
            src="/images/iconmonstr-github-1.svg"
            width={40}
            height={40}
            alt="github"
            className="cursor-pointer"
          />
          <Image
            src="/images/netlify-icon-seeklogo.com.svg"
            width={40}
            height={40}
            alt="netlify"
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
