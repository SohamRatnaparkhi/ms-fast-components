import { FASTElement, customElement, html } from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

@customElement("btn-5")
export class MyApiData extends FASTElement {
  private data: string[] | undefined;

  async connectedCallback() {
    super.connectedCallback();
    const response = await fetch("api/getNames");
    const { name } = await response.json();
    this.data = name;
    console.log(this.data);
    this.renderData();
  }

  private renderData() {
    if (!this.data) {
      console.log("no data");
      this.innerHTML = "<p>Loading data...</p>";
      return;
    }

    const list = document.createElement("ul");
    console.log(this.data);
    this.data.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.innerText = item;
      list.appendChild(listItem);
    });

    this.innerHTML = "";
    this.appendChild(list);
    this.shadowRoot!.appendChild(list);
  }
}

const MyButton5 = provideReactWrapper(React).wrap(MyApiData);
export default MyButton5;
