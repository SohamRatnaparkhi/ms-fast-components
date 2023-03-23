import React from "react";
import dynamic from "next/dynamic";

const ReactGetTask = dynamic(
  () => import("my-fast-comps").then((mod) => mod.ReactGetTask),
  {
    ssr: false,
  }
);
const MyComponent = dynamic(
  () =>
    import("../../components/ga4gh/tes/GetTasks").then(
      (mod) => mod.ReactGetTask
    ),
  {
    ssr: false,
  }
);
const PostTasks = dynamic(
  () =>
    import("../../components/ga4gh/tes/PostTasks").then((mod) => mod.PostTasks),
  {
    ssr: false,
  }
);

const TesPage = () => {
  return (
    <div>
      <ReactGetTask
        compStyles={{ "btn-primary-color": "green" }}
        className="flex flex-col items-center justify-center  w-screen py-2 "
        compBtnName={"My Button text"}
        designTokens={{
          "list-item-color": "red",
          padding: "15px 32px",
          "btn-font-size": "16px",
          "btn-text-color": "white",
          "list-item-font-size": "20px",
          "btn-primary-color": "#008CBA",
        }}
      />
      <MyComponent
        compBtnName={"My Button text"}
        designTokens={{
          padding: "15px 32px",
          "btn-font-size": "16px",
          "btn-text-color": "white",
          "btn-primary-color": "#008CBA",
        }}
      />
      <PostTasks />
    </div>
  );
};

export default TesPage;
