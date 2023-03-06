"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.counterStyles = exports.counterTemplate = exports.Counter = void 0;
var fast_element_1 = require("@microsoft/fast-element");
var fast_foundation_1 = require("@microsoft/fast-foundation");
var fast_element_2 = require("@microsoft/fast-element");
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = 0;
        return _this;
    }
    Counter.prototype.increment = function () {
        this.count++;
    };
    __decorate([
        fast_element_2.attr
    ], Counter.prototype, "count");
    return Counter;
}(fast_foundation_1.FoundationElement));
exports.Counter = Counter;
var counterTemplate = function (context, definition) {
    var buttonTag = "div";
    return (0, fast_element_1.html)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div>The count is ", ".</div>\n        <", " @click=", ">\n            <slot>", "</slot> <!--Use the custom configuration-->\n        </", ">\n    "], ["\n        <div>The count is ", ".</div>\n        <", " @click=", ">\n            <slot>", "</slot> <!--Use the custom configuration-->\n        </", ">\n    "])), function (x) { return x.count; }, buttonTag, function (x) { return x.increment(); }, definition.defaultButtonContent
        ? definition.defaultButtonContent
        : "Count", buttonTag);
};
exports.counterTemplate = counterTemplate;
var counterStyles = function (context) {
    var buttonTag = "div";
    return (0, fast_element_1.css)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    ", " {\n      margin-inline-start: 12px;\n    }\n  "], ["\n    ", " {\n      margin-inline-start: 12px;\n    }\n  "])), buttonTag);
};
exports.counterStyles = counterStyles;
var templateObject_1, templateObject_2;
