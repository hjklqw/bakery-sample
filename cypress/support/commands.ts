/// <reference types="cypress" />

import { TestId } from "@/common/testIds";

export {};

declare global {
  namespace Cypress {
    interface Chainable {
      getByTestId(id: TestId): Chainable<JQuery<HTMLElement>>;
      assertRelativeUrl(
        chainer: string,
        value: string
      ): Cypress.Chainable<string>;
    }
  }
}

Cypress.Commands.add("getByTestId", (id) => cy.get(`[data-testid=${id}]`));

Cypress.Commands.add("assertRelativeUrl", (chainer, value) =>
  cy.url().should(chainer, `${Cypress.config().baseUrl}${value}`)
);
