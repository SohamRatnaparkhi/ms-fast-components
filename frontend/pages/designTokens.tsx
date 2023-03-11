import React from "react";
import dynamic from "next/dynamic";

const CustomBtn1 = dynamic(
  () => import("../components/design-tokens/btn1.component"),
  {
    ssr: false,
  }
);

const designTokens = () => {
  return (
    <div>
      <CustomBtn1 />
    </div>
  );
};

export default designTokens;
