import React from "react";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const page = () => {
  return (
    <div className="overflow-hidden ">
      <NavBar />
      <Hero />
    </div>
  );
};

export default page;
