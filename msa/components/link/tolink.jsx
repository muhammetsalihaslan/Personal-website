import Link from "next/link";
import React from "react";

const Tolink = ({ toWhere, privateClass, children, toref }) => {
  return (
    <div>
      <Link href={`${toref}`} target="_blank" className={privateClass}>
        {toWhere}
        {children}
      </Link>
    </div>
  );
};

export default Tolink;
