import { customElement, html, css, FASTElement } from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

const myStyles = css`
  .my-component {
    @apply bg-blue-500 text-white p-4 rounded-lg;
  }
`;

// var data = "null";

@customElement({
  name: "btn-2",
  // template: html` <div></div>`,
})
class _ApiComp2 extends FASTElement {
  data = [];

  async connectedCallback() {
    super.connectedCallback();
    const response = await fetch("http://localhost:3000/api/getNames");
    const { name } = await response.json();
    this.data = name;
    console.log(this.data);
    this.render();
  }

  render() {
    console.log(this.data);
    return html`
      <p>Hello</p>
      <ul>
        ${this.data.map((item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}
const ApiComp2 = provideReactWrapper(React).wrap(_ApiComp2);
export default ApiComp2;
