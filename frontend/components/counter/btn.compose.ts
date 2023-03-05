import { Counter, counterTemplate, counterStyles } from "./BtnComponent";
import React from "react";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import { provideFASTDesignSystem } from "@microsoft/fast-components";
import { customElement } from "@microsoft/fast-element";

const { wrap } = provideReactWrapper(React, provideFASTDesignSystem());

export const counter = Counter.compose({
  baseName: "counter-btn",
  counterStyles,
  counterTemplate,
  defaultButtonContent: "Count!",
});

export { counterStyles };

const CounterBtn = wrap(counter());
export default CounterBtn;
