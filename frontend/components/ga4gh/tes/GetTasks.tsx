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

const template = html`
  <div class="header"></div>
  <div class="body">
    <slot></slot>

    ${when(
      (x) => !x.ready,
      html`
        <button class="get-tasks-btn">
          <p class="btn-text">
            ${(x) => x.compBtnName}
          </p>
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
              html`
                <li class="list-item">
                  ${(task) => task.id} - ${(task) => task.state}
                </li>
              `
            )}
          </ul>
          <button @click=${(x) => x.setBackBtn()} class="back-btn">
            Back
          </button>
        </div>
      `
    )}
  </div>
  <div class="footer"></div>
`;

const styles = css`
  .get-tasks-btn {
    background-color: var(--btn-primary-color);
    font-size: --var(--list-item-font-size);
    color: var(--btn-text-color);
  }

  .btn-text {
    font-size: var(--btn-font-size);
    padding: --var(--padding);
  }

  .back-btn {
    display: inline-block;
    contain: content;
    color: var(--btn-primary-color);
  }

  .list-item {
    color: var(--list-item-color);
    font-size: var(--list-item-font-size);
    padding: var(--padding);
  }
`;
@customElement({
  name: "get-tasks",
  template,
  styles,
})
export class GetTasks extends FASTElement {
  constructor() {
    super();
  }
  @attr compStyles: getTaskStylesTypes = {};
  @attr compBtnName: string = "Get-tasks";
  @attr designTokens: designTokensTypes = {};
  @observable ready: boolean = false;
  @observable data: any = [];

  compStylesChanged(
    _oldValue: getTaskStylesTypes,
    newValue: getTaskStylesTypes
  ) {
    console.log(newValue);
  }

  designTokensChanged(_oldValue: object[], tokenFromParams: object) {
    const currentComponent = this.$fastController.element;
    const tokenArray = Object.entries(tokenFromParams);
    tokenArray.map((token) => {
      const tokenName = token[0];
      const tokenValue = token[1];
      if (tokenName !== undefined && tokenValue !== undefined) {
        const newToken = DesignToken.create<string>(tokenName);
        console.log(tokenName, tokenValue);
        newToken.setValueFor(currentComponent, tokenValue);
      }
    });
  }

  setBackBtn() {
    const backBtn = this.shadowRoot!.querySelector(".back-btn");
    console.log(backBtn);
    backBtn?.addEventListener("click", () => {
      console.log("object");
      window.location.reload();
    });
  }

  async connectedCallback() {
    super.connectedCallback();
    const getTask = async () => {
      const { data, status } = await TES_AXIOS_INSTANCE.get(
        "/tasks?view=MINIMAL"
      );
      return status == 200 ? (this.data = data.tasks) : [];
    };
    const getTaskBtn = this.shadowRoot!.querySelector(".get-tasks-btn");
    getTaskBtn?.addEventListener("click", async () => {
      await getTask();
      this.ready = true;
    });
    console.log(this.ready);
  }
}

export const ReactGetTask = provideReactWrapper(React).wrap(GetTasks);
