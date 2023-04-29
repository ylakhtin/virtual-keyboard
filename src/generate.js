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
  // Generate notice
  let notice = document.createElement("p");
  notice.textContent = "При проверке прошу учесть, что при нажатии клавиши 'Alt' просиходит изменение фокуса, что является стандартным задекларированным поведением внутри браузера. После нажатия 'Alt' необходимо вернуть вручную фокус чтобы продолжить использование виртуальной клавиатуры";
  wrapper.appendChild(notice);
}

function printElement(key, row){
  // Add parent div
  let parent = document.createElement("div");
  // Add new key
  let newKey = document.createElement("div");
  newKey.textContent = key.main;
  newKey.classList.add("button");
  parent.classList.add("parent");
  if (key.main === " "){
    parent.classList.add("button-space");
  }
  parent.appendChild(newKey);
  // Add alternative symbols for Shift+key combination
  if (key.secondary !== "none"){
    let newAltKey = document.createElement("div");
    newAltKey.classList.add("alternate-key");
    newAltKey.textContent = key.secondary;
    parent.appendChild(newAltKey);
  }
  // Process key clicks
  parent.addEventListener("click", ()=> {
    processClick(key);
  });
  row.appendChild(parent);
}

export default generatePage;