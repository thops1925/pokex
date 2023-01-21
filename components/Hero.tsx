import Link from "next/link";
import React from "react";

const Hero = async () => {
  const poke = await getData();
  const { results } = poke;

  console.log(results);

  return (
    <div>
      {results.map((item: any) => {
        return (
          <div>
            {item.name}
            <Link href={`/Hero/${item.name}`}>{item.url}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;

async function getData() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
