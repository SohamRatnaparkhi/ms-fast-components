import { Counter, counterTemplate, counterStyles } from "./BtnComponent";
import React from "react";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import { provideFASTDesignSystem } from "@microsoft/fast-components";

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const CounterComp = Counter.compose({
  baseName: "counter-btn",
  counterStyles,
  counterTemplate,
  defaultButtonContent: "Count!",
});

export { counterStyles, Counter };

const CounterBtn = wrap(CounterComp());
export default CounterBtn;
