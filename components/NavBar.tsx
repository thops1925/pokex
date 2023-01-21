import Link from "next/link";
import React from "react";

const NavBar = () => {
  const nav = ["Home", "About", "Strat"];
  return (
    <div className="flex flex-row space-x-4 justify-center max-w-8xl mx-auto ">
      {nav.map((item) => (
        <Link href={`/${item}`} className="text-lg font-bold " key={item}>
          {item}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
