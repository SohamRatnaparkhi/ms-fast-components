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
  <div class="header">
    <slot name="avatar names"></slot>
    <h3>${(x) => x.greeting.toUpperCase()}</h3>
    <h4>my name is</h4>
  </div>

  <div class="body">
    <slot></slot>
  </div>

  <div class="footer"></div>
`;

const styles = css`
  :host {
    display: inline-block;
    contain: content;
    color: white;
    background: var(--fill-color);
    border-radius: var(--border-radius);
    min-width: 325px;
    text-align: center;
    box-shadow: 0 0 calc(var(--depth) * 1px) rgba(0, 0, 0, 0.5);
  }

  :host([hidden]) {
    display: none;
  }

  .header {
    margin: 16px 0;
    position: relative;
  }

  h3 {
    font-weight: bold;
    font-family: "Source Sans Pro";
    letter-spacing: 4px;
    font-size: 32px;
    margin: 0;
    padding: 0;
  }

  h4 {
    font-family: sans-serif;
    font-size: 18px;
    margin: 0;
    padding: 0;
  }

  .body {
    background: white;
    color: black;
    padding: 32px 8px;
    font-size: 42px;
    font-family: cursive;
  }

  .footer {
    height: 16px;
    background: var(--fill-color);
    border-radius: 0 0 var(--border-radius) var(--border-radius);
  }
  .btn-3 {
    background: blue;
  }
`;

@customElement({
  name: "btn-3",
  template,
  styles,
})
class _MyButton3 extends FASTElement {
  @attr greeting: string = "Hello";
  data = [];
  constructor() {
    super();
  }
  async connectedCallback() {
    super.connectedCallback();
    const response = await fetch("api/getNames");
    const { name } = await response.json();
    this.data = name;
    console.log(this.data);
    const namesDiv = document.createElement("div");
    namesDiv.className = "btn-3";
    this.data
      ? this.data.map((name) => {
          const nameDiv = document.createElement("div");
          nameDiv.innerHTML = name;
          namesDiv.appendChild(nameDiv);
        })
      : null;
    this.shadowRoot!.querySelector("div")?.appendChild(namesDiv);
  }
  render() {
    <div>
      <button className="btn-3">Hello</button>
    </div>;
  }
}
const MyButton3 = provideReactWrapper(React).wrap(_MyButton3);
export default MyButton3;
