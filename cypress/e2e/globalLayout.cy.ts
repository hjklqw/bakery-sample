import { Routes } from "@/common/routes";
import { TestId } from "@/common/testIds";

function assertLink(
  link: JQuery<HTMLAnchorElement>,
  expectedText: string,
  expectedRoute: string
) {
  expect(link.text()).to.eq(expectedText);
  cy.wrap(link)
    .click()
    .then(() => {
      cy.assertRelativeUrl("eq", expectedRoute);
    });
}

describe("Global Layout", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Navigation", () => {
    it("contains the correct items with the correct routes", () => {
      cy.getByTestId(TestId.GLOBAL_NAV)
        .children("a")
        .then((links) => {
          assertLink(links.eq(0), "Home", Routes.HOME);
          assertLink(links.eq(1), "About", Routes.ABOUT);
          assertLink(links.eq(2), "Products", Routes.PRODUCTS);
          assertLink(links.eq(3), "Special", Routes.SPECIAL);
          assertLink(links.eq(4), "Contact", Routes.CONTACT);
        });
    });
  });

  describe.only("Special banner", () => {
    it("advertises Mother's Day 2023", () => {
      cy.getByTestId(TestId.SPECIAL_BANNER).contains("Mother's Day 2023");
    });

    it("links to the Special page", () => {
      cy.getByTestId(TestId.SPECIAL_BANNER)
        .children("a")
        .click()
        .then(() => {
          cy.assertRelativeUrl("eq", Routes.SPECIAL);
        });
    });
  });
});
