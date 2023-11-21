import Link from "next/link";
import React from "react";

const Tolink = ({ toWhere, privateClass }) => {
  return (
    <div>
      <Link href="https://" className={privateClass}>
        {toWhere}
      </Link>
    </div>
  );
};

export default Tolink;
