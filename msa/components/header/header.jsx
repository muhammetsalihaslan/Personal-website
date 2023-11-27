import Image from "next/image";
import React from "react";
import Tolink from "../link/tolink";

const Header = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex gap-x-3 mt-6 ms-6">
        <div className="text-3xl mt-1 font-bold cursor-pointer">msa.</div>
      </div>
      <div className="flex items-center gap-x-7 mt-6 me-6 ">
        <Tolink toref="https://twitter.com/muhammetsalih34">
          <Image src="/images/logo-black.png" width={30} height={30} alt="x" />
        </Tolink>
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
  );
};

export default Header;
