import keyboard from "./keyboard.js";
import processClick from "./click.js";

const WIDTH = 130;
const HEIGHT = 15;

function printElement(key, row) {
  // Add parent div
  let parent = document.createElement("div");
  // Add new key
  let newKey = document.createElement("div");
  newKey.textContent = key.main;
  newKey.classList.add("button");
  parent.classList.add("parent");
  if (key.main === " ") {
    parent.classList.add("button-space");
  }
  parent.appendChild(newKey);
  // Add alternative symbols for Shift+key combination
  if (key.secondary !== "none") {
    let newAltKey = document.createElement("div");
    newAltKey.classList.add("alternate-key");
    newAltKey.textContent = key.secondary;
    if (key.key === "CapsLock") {
      newAltKey.classList.add("caps-lock-off");
    }
    parent.appendChild(newAltKey);
  }
  // Add second language symbols to buttons
  if (key.lang !== "none") {
    let newAltKey = document.createElement("div");
    newAltKey.classList.add("alternate-language");
    newAltKey.textContent = key.lang;
    parent.appendChild(newAltKey);
  }
  // Process key clicks
  parent.addEventListener("click", ()=> {
    processClick(key);
  });
  row.appendChild(parent);
}

function generatePage() {
  // Set default values
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "EN");
  }
  localStorage.setItem("ShiftRight", "off");
  localStorage.setItem("ShiftLeft", "off");
  // Add wrapper
  document.body.appendChild(document.createElement("div"));
  let wrapper = document.querySelector("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("flex-column");
  // Add text area
  let text = document.createElement("textarea");
  text.cols = WIDTH;
  text.rows = HEIGHT;
  text.classList.add("text-area");
  wrapper.appendChild(text);
  text.focus();
  text.selectionStart = text.value.length;
  // Generate buttons
  keyboard.forEach(element => {
    let div = document.createElement("div");
    element.forEach(elem => {
      printElement(elem, div);
    });
    div.classList.add("flex-row");
    wrapper.appendChild(div);
  });
  // Add language indicator
  let lang = document.createElement("div");
  lang.classList.add("language");
  lang.textContent = localStorage.getItem("lang");
  lang.addEventListener("click", ()=>{
    if (lang.textContent === "EN") {
      lang.textContent = "RU";
      localStorage.setItem("lang", "RU");
    } else {
      lang.textContent = "EN";
      localStorage.setItem("lang", "EN");
    }
  });
  wrapper.appendChild(lang);
}

export default generatePage;
export { WIDTH };
