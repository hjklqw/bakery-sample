import { render, screen, fireEvent } from "@testing-library/react";

import { getFormValues, escapeInput } from "./form";

describe("utils/form", () => {
  test("getFormValues should return all defined values for the given ID map", () => {
    const ids = {
      city: "city",
      country: "country",
      optional: "optional",
    };
    const randomFieldId = "random-field";

    render(
      <form data-testid="form">
        <input name={ids.city} type="text" />
        <input name={ids.country} type="text" />
        <input name={ids.optional} type="text" />
        <input name={randomFieldId} type="text" />
      </form>
    );

    const form = screen.getByTestId("form");

    form.onsubmit = (e: SubmitEvent) => {
      const values = getFormValues(ids, e.target as HTMLFormElement);
      expect(values).toEqual({
        [ids.city]: "Hello",
        [ids.country]: "World",
      });
    };

    fireEvent.submit(form, {
      target: {
        [ids.city]: { value: "Hello" },
        [ids.country]: { value: "World" },
        [randomFieldId]: { value: "!" },
      },
    });
  });

  test("escapeInput should replace all instances of &, <, >, \", and ' with html entities", () => {
    expect(
      escapeInput(`ampersands& <html> "double quotes" 'single quotes' &again`)
    ).toEqual(
      "ampersands&amp; &lt;html&gt; &quot;double quotes&quot; &#039;single quotes&#039; &amp;again"
    );
  });
});
