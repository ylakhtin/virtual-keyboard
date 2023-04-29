import keyboard from "./keyboard.js";
import processClick from "./click.js";

function generatePage(){
  // Add wrapper
  document.body.appendChild(document.createElement("div"));
  let wrapper = document.querySelector("div");
  wrapper.classList.add("wrapper");
  wrapper.classList.add("flex-column");
  // Add text area
  let text = document.createElement("textarea");
  text.cols = 130;
  text.rows = 15;
  wrapper.appendChild(text);
  // Generate buttons
  keyboard.forEach(element => {
    let div = document.createElement("div");
    element.forEach(elem => {
      printElement(elem, div);
    });
    div.classList.add("flex-row");
    wrapper.appendChild(div);
  });
}

function printElement(key, row){
  let newKey = document.createElement("div");
  newKey.textContent = key.main;
  newKey.classList.add("button");
  if (key.main === " "){
    newKey.classList.add("button-space");
  }
  // Add alternative symbols for Shift+key combination
  if (key.secondary !== "none"){
    let newAltKey = document.createElement("div");
    newAltKey.classList.add("alternate-key");
    newAltKey.textContent = key.secondary;
    newKey.appendChild(newAltKey);
  }
  // Process key clicks
  newKey.addEventListener("click", ()=> {
    processClick(key);
  });
  row.appendChild(newKey);
}

export default generatePage;