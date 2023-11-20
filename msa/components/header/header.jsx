import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-1  mt-6 ms-6">
        {/* <Image
          src="/images/personal.png"
          width={60}
          height={40}
          className="rounded-full"
          alt="pers"
        /> */}
        <div className="text-3xl mt-1 font-bold">msa.</div>
      </div>
      <div className="flex items-center gap-x-2 me-6 ">
        <Image src="/images/twitter-x.webp" width={40} height={40} alt="x" />
        <Image
          src="/images/icon-linkedin.svg"
          width={40}
          height={40}
          alt="linkedin"
          className
        />
        <Image
          src="/images/icon-github.svg"
          width={40}
          height={40}
          alt="github"
        />
      </div>
    </div>
  );
};

export default Header;
