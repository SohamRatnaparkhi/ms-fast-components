import {
  customElement,
  html,
  css,
  FASTElement,
  attr,
  observable,
  when,
  repeat,
} from "@microsoft/fast-element";
import { provideReactWrapper } from "@microsoft/fast-react-wrapper";
import React from "react";
import { DesignToken } from "@microsoft/fast-foundation";

import { TES_AXIOS_INSTANCE } from "../constants";

type taskSchema = any;
const template = html`
  <h2>Enter task JSON</h2>

  <form @submit=${async (x) => await x.makeReq()}>
    <input
      type="text"
      :value=${(x) => x.payload}
      @input=${(x, c) => x.handleInput(c.event)}
    />
    <button type="submit">Submit</button>
  </form>

  ${when(
    (x) => x.taskStatus != 0,
    html`<div className="output">
      created task ${(x) => x.taskId} with status ${(x) => x.taskStatus}
    </div>`
  )}
  ${when((x) => x.taskStatus == 400, html`<div className="output">Error</div>`)}
`;

@customElement({
  name: "post-task",
  template,
})
export class PostTasksTES extends FASTElement {
  @observable payload: string = "";
  @observable taskId = "";
  @observable taskStatus = 0;

  async makeReq() {
    if (!this.payload) {
      return;
    }

    const reqBody: taskSchema = JSON.parse(this.payload);
    console.log(reqBody);
    const { data, status } = await TES_AXIOS_INSTANCE.post("/tasks", reqBody);
    console.log(data.id, status);
    this.taskId = data.id;
    this.taskStatus = status;
    this.payload = "";
  }

  handleInput(event: Event) {
    this.payload = (event.target! as HTMLInputElement).value;
  }
}

export const PostTasks = provideReactWrapper(React).wrap(PostTasksTES);
