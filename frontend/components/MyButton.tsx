import { customElement, html, css } from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

const myStyles = {
  "my-component": "bg-blue-500 text-blue p-4 text-2xl rounded-lg btn-2",
};

// var data = "null";

@customElement({
  name: "btn-1",
  template: html` <div class=""></div>`,
})
class _MyButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot!.innerHTML = `
      <div class="btn-2"></div>
    `;
  }

  async connectedCallback() {
    const response = await fetch("/api/hello");
    const data = await response.json();
    const div = this.shadowRoot!.querySelector("div");
    const btn2 = this.getElementsByClassName("btn-2")[0];
    div!.innerText = data.name;
    // btn2.className = myStyles["my-component"];
    div!.className = myStyles["my-component"];
    console.log(btn2);
    btn2 ? (btn2.textContent = data.name) : null;
    this.render();
    // const li = document.createElement("p");
    // li.textContent = data.name;
    // div?.appendChild(li);
  }
  render() {
    return (
      <div>
        <button className={myStyles["my-component"]}>Hello</button>
      </div>
    );
  }
}
const MyButton = provideReactWrapper(React).wrap(_MyButton);
export default MyButton;
