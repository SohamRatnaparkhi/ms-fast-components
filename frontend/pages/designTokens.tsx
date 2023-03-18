import React from "react";
import dynamic from "next/dynamic";

const CustomBtn1React = dynamic(
  () => import("my-fast-comps").then((mod) => mod.CustomBtn1React),
  {
    ssr: false,
  }
);

const designTokens = () => {
  return (
    <div>
      <CustomBtn1React />
    </div>
  );
};

export default designTokens;
