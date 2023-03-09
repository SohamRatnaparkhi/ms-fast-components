import React from "react";
import dynamic from "next/dynamic";

const CounterBtn = dynamic(
  () => import("my-fast-comps").then((module) => module.CounterBtn),
  {
    ssr: false,
  }
);

const ApiComp1 = dynamic(
  () => import("my-fast-comps").then((module) => module.ApiComp1),
  {
    ssr: false,
  }
);

const ApiComp2 = dynamic(
  () => import("my-fast-comps").then((module) => module.ApiComp2),
  {
    ssr: false,
  }
);

const ApiComp3 = dynamic(
  () => import("my-fast-comps").then((module) => module.ApiComp3),
  {
    ssr: false,
  }
);

const Banner = dynamic(
  () => import("my-fast-comps").then((module) => module.Banner),
  {
    ssr: false,
  }
);

const ApiComp4 = dynamic(
  () => import("my-fast-comps").then((module) => module.ApiComp4),
  {
    ssr: false,
  }
);

const HardCodedTokens = () => {
  return (
    <div>
      <h1>Hardcoded</h1>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <CounterBtn />
        <ApiComp1 />
        <ApiComp2 />
        <ApiComp3 />
        <ApiComp4 />
        <Banner />
      </div>
    </div>
  );
};

export default HardCodedTokens;
