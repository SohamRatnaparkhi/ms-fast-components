import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

@customElement("btn-4")
export class MyApiData extends FASTElement {
  private data: string[] | undefined;

  async connectedCallback() {
    super.connectedCallback();
    const response = await fetch("http://localhost:3000/api/getNames");
    const { name } = await response.json();
    this.data = name;
  }

  render() {
    if (!this.data) {
      return html`<p>Loading data...</p>`;
    }

    return html`
      <ul>
        ${this.data.map((item) => html`<li>${item}</li>`)}
      </ul>
    `;
  }
}

const ApiComp3 = provideReactWrapper(React).wrap(MyApiData);
export default ApiComp3;
