import {
  customElement,
  html,
  css,
  FASTElement,
  attr,
} from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

import { TES_AXIOS_INSTANCE } from "../constants";

const template = html`
  <div class="header"></div>
  <div className="body"></div>
  <div className="footer"></div>
`;

@customElement({
  name: "get-tasks",
  template,
})
export class GetTasks extends FASTElement {
  @attr styles: getTaskStyles = {};
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  async connectedCallback() {
    super.connectedCallback();
    const getTask = async () => {
      const response = await TES_AXIOS_INSTANCE.get("/tasks");
      return response.data;
    };
    const body = document.querySelector(".body");
    const button = `<button
      class="${
        this.styles["btn-primary-color"] || "abc"
      } || 'btn-primary-color'"
      onClick="window.location.reload()"
    >
      Get tasks
    </button>`;
    const container = document.createElement("div");
    container.innerHTML = button;
  }
}
