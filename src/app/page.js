import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <h1 className="text-xl capitalize">Learning SSG With Next Js</h1>
      <Link
        className="font-bold text-blue-500 capitalize hover:text-blue-600"
        href="/ssg"
      >
        SSG
      </Link>
    </div>
  );
};

export default Home;
