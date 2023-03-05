import { html, css } from "@microsoft/fast-element";
import type {
  ElementDefinitionContext,
  FoundationElementDefinition,
} from "@microsoft/fast-foundation";

import { FoundationElement } from "@microsoft/fast-foundation";
import { attr } from "@microsoft/fast-element";

export class Counter extends FoundationElement {
  @attr count = 0;

  increment() {
    this.count++;
  }
}

interface CounterDefinition extends FoundationElementDefinition {
  defaultButtonContent?: string;
}

export const counterTemplate = (
  context: ElementDefinitionContext,
  definition: CounterDefinition
) => {
  const buttonTag = "div";

  return html`
        <div>The count is ${(x: any) => x.count}.</div>
        <${buttonTag} @click=${(x) => x.increment()}>
            <slot>${
              definition.defaultButtonContent
                ? definition.defaultButtonContent
                : "Count"
            }</slot> <!--Use the custom configuration-->
        </${buttonTag}>
    `;
};

export const counterStyles = (context: ElementDefinitionContext) => {
  const buttonTag = "div";

  return css`
    ${buttonTag} {
      margin-inline-start: 12px;
    }
  `;
};
