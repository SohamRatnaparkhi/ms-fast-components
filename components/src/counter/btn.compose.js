"use strict";
exports.__esModule = true;
exports.counterStyles = exports.counter = void 0;
var BtnComponent_1 = require("./BtnComponent");
exports.counterStyles = BtnComponent_1.counterStyles;
var react_1 = require("react");
var fast_react_wrapper_1 = require("@microsoft/fast-react-wrapper");
var fast_components_1 = require("@microsoft/fast-components");
var wrap = (0, fast_react_wrapper_1.provideReactWrapper)(react_1["default"], (0, fast_components_1.provideFASTDesignSystem)()).wrap;
exports.counter = BtnComponent_1.Counter.compose({
    baseName: "counter-btn",
    counterStyles: BtnComponent_1.counterStyles,
    counterTemplate: BtnComponent_1.counterTemplate,
    defaultButtonContent: "Count!"
});
var CounterBtn = wrap((0, exports.counter)());
exports["default"] = CounterBtn;
