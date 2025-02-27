import { element } from "valzu-core/dist";

export default function List() {
  return element(
    "div",
    { class: "container" },
    element(
      "div",
      { class: "list" },
      element("p", { class: "title" }, "VALZU'S LIST"),
      element(
        "a",
        { href: "https://x.com/vvaltterisa", target: "_blank" },
        "X",
        element("span", { class: "link-icon" }, "↗")
      ),
      element(
        "a",
        { href: "https://github.com/valtterisa", target: "_blank" },
        "GITHUB",
        element("span", { class: "link-icon" }, "↗")
      ),
      element(
        "a",
        { href: "https://t.me/vsavonen", target: "_blank" },
        "TELEGRAM",
        element("span", { class: "link-icon" }, "↗")
      ),
      element(
        "a",
        { href: "mailto:valtteri@bittive.com", target: "_blank" },
        "EMAIL",
        element("span", { class: "link-icon" }, "↗")
      )
    ),
    element(
      "footer",
      { class: "footer" },
      element("p", {}, "Made with"),
      element(
        "a",
        { href: "https://github.com/valtterisa/valzu.js", target: "_blank" },
        "valzu.js"
      )
    )
  );
}
