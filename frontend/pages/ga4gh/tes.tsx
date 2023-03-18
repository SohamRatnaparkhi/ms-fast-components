import React from "react";
import dynamic from "next/dynamic";

const ReactGetTask = dynamic(
  () =>
    import("../../components/ga4gh/tes/GetTasks").then(
      (mod) => mod.ReactGetTask
    ),
  {
    ssr: false,
  }
);

const TesPage = () => {
  return (
    <div>
      <ReactGetTask
        compStyles={{ "btn-primary-color": "green" }}
        compName={"Random"}
      />
    </div>
  );
};

export default TesPage;
