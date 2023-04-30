import keyboard from "./keyboard.js";
import putSymbol from "./click.js";
import { addPressedStyle, removePressedStyle } from "./toggleStyles.js";

function listenKeys() {
  window.addEventListener("keydown", (event)=>{
    document.querySelector("textarea").focus();
    // Find the keyboard key that was pressed
    keyboard.forEach(element => {
      element.forEach(elem => {
        if ((elem.main === event.key) || (elem.key === event.key)) {
          if (((event.key === "Shift") && (event.code === "ShiftRight"))
          || ((event.key === "Control") && (event.code === "ControlRight"))
          || ((event.key === "Alt") && (event.code === "AltRight"))) {
            addPressedStyle(elem.main, 1);
          } else {
            addPressedStyle(elem.main);
          }
        }
      });
    });
    if (event.key === "Tab") {
      event.preventDefault();
      putSymbol(document.querySelector("textarea"), document.querySelector("textarea").selectionStart, "\u0009");
    }
  });

  window.addEventListener("keyup", (event)=>{
    // Find the keyboard key that was released
    keyboard.forEach(element => {
      element.forEach(elem => {
        if ((elem.main === event.key) || (elem.key === event.key)) {
          if (((event.key === "Shift") && (event.code === "ShiftRight"))
          || ((event.key === "Control") && (event.code === "ControlRight"))
          || ((event.key === "Alt") && (event.code === "AltRight"))) {
            removePressedStyle(elem.main, 1);
          } else {
            removePressedStyle(elem.main);
          }
        }
      });
    });
  });
}

export default listenKeys;
