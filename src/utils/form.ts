import { HtmlInputValue } from "@/common/models";

export function getFormValues(
  ids: { [key: string]: string },
  form: HTMLFormElement
) {
  const result: { [id: string]: string | undefined } = {};
  return Object.values(ids).reduce((res, id) => {
    const value = (form[id] as HtmlInputValue)?.value;
    if (value === "") return res;
    return { ...res, [id]: value };
  }, result);
}

export function escapeInput(rawValue: string) {
  return rawValue
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
