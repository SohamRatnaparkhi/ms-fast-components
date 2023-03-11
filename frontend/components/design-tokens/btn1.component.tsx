import {
  customElement,
  html,
  css,
  FASTElement,
  attr,
} from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

const template = html`
  <div class="cstm-btn-header">
    <slot name=""></slot>
  </div>
  <div class="cstm-btn-body">
    <slot name="">
      Custom btn 1
    </slot>
  </div>
  <div class="cstm-btn-footer">
    <slot name=""></slot>
  </div>
`;

const styles = css`
  :host {
    display: inline-block;
    contain: content;
    color: var(--text-color, black);
    background: var(--base-200, white);
  }
  .negative-alert {
    color: var(--negative-alert-color);
  }
  .warning {
    color: var(--warning-alert-color);
  }
  .positive-alert {
    color: var(--positive-alert-color);
  }
  .api-data {
    color: var(--api-data-color);
  }
`;

@customElement({
  name: "custom-btn-1",
  template,
  styles,
})
export class CustomBtn1 extends FASTElement {
  @attr greeting: string = "Hello";
  constructor() {
    super();
  }
  async connectedCallback() {
    super.connectedCallback();
    const bodyHtml = `
      <div class="alert-colors-check">
        <p class="negative-alert">This is negative alert</p>
        <p class="warning">This is warning</p>
        <p class="positive-alert">This is positive alert</p>
      </div>
    `;
    const alertBody = document.createElement("div");
    alertBody.innerHTML = bodyHtml;
    console.log("alertBody", alertBody);
    this.shadowRoot!.querySelector(".cstm-btn-body")?.appendChild(alertBody);
    console.log("this.shadowRoot", this.shadowRoot);
    const response = await fetch("/api/hello");
    const { name } = await response.json();

    const apiBody = ` 
    <div class="api-data">
      <p class='api-data'>
      ${name}</p>
    </div>
    `;
    const apiData = document.createElement("div");
    apiData.innerHTML = apiBody;
    this.shadowRoot!.querySelector(".cstm-btn-body")?.appendChild(apiData);
  }
}

const CustomBtn1React = provideReactWrapper(React).wrap(CustomBtn1);
export default CustomBtn1React;
