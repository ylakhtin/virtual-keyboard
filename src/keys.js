import keyboard from "./keyboard.js";

function addPressedStyle(name, order = 0) {
  let target = document.querySelectorAll(".button");
  if (order === 0) {
    for (let i = 0; i < target.length; i++) {
      if (target[i].innerHTML === name) {
        target[i].classList.add("key-pressed");
        return;
      }
    }
  } else {
    for (let i = target.length - 1; i >= 0; i--) {
      if (target[i].innerHTML === name) {
        target[i].classList.add("key-pressed");
        return;
      }
    }
  }
}

function removePressedStyle(name, order = 0) {
  let target = document.querySelectorAll(".button");
  if (order === 0) {
    for (let i = 0; i < target.length; i++) {
      if (target[i].innerHTML === name) {
        target[i].classList.remove("key-pressed");
        return;
      }
    }
  } else {
    for (let i = target.length - 1; i >= 0; i--) {
      if (target[i].innerHTML === name) {
        target[i].classList.remove("key-pressed");
        return;
      }
    }
  }
}

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
