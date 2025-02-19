import { element } from "valzu-core/dist";

function handleCurrentlyClick(e: Event) {
  e.preventDefault();
  const target = e.currentTarget as HTMLAnchorElement;
  const hiddenDiv = document.getElementById("hiddenDiv") as HTMLDivElement;
  const arrowSpan = target.querySelector("span.link-icon") as HTMLSpanElement;
  if (hiddenDiv && arrowSpan) {
    if (hiddenDiv.style.display === "block") {
      hiddenDiv.style.display = "none";
      target.classList.remove("active");
      arrowSpan.textContent = "↗";
    } else {
      hiddenDiv.style.display = "block";
      target.classList.add("active");
      arrowSpan.textContent = "←";
    }
  }
}

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
      ),
      element(
        "div",
        { class: "personal-links" },
        element(
          "a",
          { href: "#", class: "currently", onClick: handleCurrentlyClick },
          "CURRENTLY",
          element("span", { class: "link-icon" }, "↗")
        )
      ),
      element(
        "div",
        { id: "hiddenDiv", style: "display:none;" },
        "This is the hidden text that appears on click."
      )
    )
  );
}
