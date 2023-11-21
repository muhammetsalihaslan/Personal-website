import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-x-3 mt-6 ms-6">
        {/* <Image
          src="/images/personal.png"
          width={60}
          height={40}
          className="rounded-full"
          alt="pers"
        /> */}
        <div className="text-3xl mt-1 font-bold">msa.</div>
      </div>
      <div className="flex items-center gap-x-2 mt-6 me-6 ">
        <Image
          src="/images/logo-black.png"
          width={30}
          height={30}
          alt="x"
          className=""
        />
        <Image
          src="/images/linkedin.png"
          width={40}
          height={40}
          alt="linkedin"
          className
        />
        <Image
          src="/images/iconmonstr-github-1.svg"
          width={40}
          height={40}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Header;
