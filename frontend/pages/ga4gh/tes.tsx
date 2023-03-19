import React from "react";
import dynamic from "next/dynamic";

const ReactGetTask = dynamic(
  () => import("my-fast-comps").then((mod) => mod.ReactGetTask),
  {
    ssr: false,
  }
);

const TesPage = () => {
  return (
    <div>
      <ReactGetTask
        className="flex flex-col items-center justify-center  w-screen py-2 "
        compBtnName={"List task from TES API"}
        designTokens={{
          "list-item-color": "red",
          padding: "15px 32px",
          "btn-font-size": "16px",
          "btn-text-color": "white",
          "list-item-font-size": "20px",
          "btn-primary-color": "#008CBA",
        }}
      />
    </div>
  );
};

export default TesPage;
