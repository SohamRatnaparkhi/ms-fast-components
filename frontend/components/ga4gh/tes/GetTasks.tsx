import {
  customElement,
  html,
  FASTElement,
  attr,
  observable,
  when,
  repeat,
} from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";

import { TES_AXIOS_INSTANCE } from "../constants";

const template = html`
  <div class="header"></div>
  <div class="body">
    <slot></slot>

    ${when(
      (x) => !x.ready,
      html`
        <button
          class="get-tasks-btn"
          style="background-color: ${(x) =>
            x.compStyles["btn-primary-color"] || "red"}"
        >
          Get tasks
        </button>
      `
    )}
    ${when(
      (x) => x.ready,
      html`
        <div class="task-container">
          <ul>
            ${repeat(
              (x) => x.data,
              html` <li>${(task) => task.id} - ${(task) => task.state}</li> `
            )}
          </ul>
        </div>
      `
    )}
  </div>
  <div class="footer"></div>
`;

@customElement({
  name: "get-tasks",
  template,
})
export class GetTasks extends FASTElement {
  @attr compStyles: getTaskStylesTypes = {};
  @attr compName: string = "get-tasks";
  @observable ready: boolean = false;
  @observable data: any = [];
  constructor() {
    super();
  }
  async connectedCallback() {
    super.connectedCallback();
    const getTask = async () => {
      const { data, status } = await TES_AXIOS_INSTANCE.get(
        "/tasks?view=MINIMAL"
      );
      return status == 200 ? (this.data = data.tasks) : [];
    };

    const container = document.createElement("div");
    container.className = "container";
    // const response = await getTask();
    const getTaskBtn = this.shadowRoot!.querySelector(".get-tasks-btn");
    getTaskBtn?.addEventListener("click", async () => {
      await getTask();
      this.ready = true;
    });
  }
}

export const ReactGetTask = provideReactWrapper(React).wrap(GetTasks);
