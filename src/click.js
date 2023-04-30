import { WIDTH } from "./generate.js";

export function putSymbol(text, position, symbol) {
  let temp1 = text.value.substring(0, position)
      + symbol
      + text.value.substring(position, text.value.length);
  document.querySelector("textarea").value = temp1;
  document.querySelector("textarea").selectionStart = position + 1;
  document.querySelector("textarea").selectionEnd = position + 1;
  document.querySelector("textarea").focus();
}

function moveCursor(direction) {
  let position = document.querySelector("textarea").selectionStart;
  if (direction === "up") {
    position = position - WIDTH - 2;
    if (position < 0) { position = 0; }
  }
  if (direction === "down") {
    position = position + WIDTH + 2;
    if (position > document.querySelector("textarea").length) { position = document.querySelector("textarea").length; }
  }
  if (direction === "left") {
    position -= 1;
    if (position < 0) { position = 0; }
  }
  if (direction === "right") {
    position += 1;
    if (position > document.querySelector("textarea").length) { position = document.querySelector("textarea").length; }
  }
  document.querySelector("textarea").selectionStart = position;
  document.querySelector("textarea").selectionEnd = position;
  document.querySelector("textarea").focus();
}

function toggleCapsLock() {
  document.querySelector(".caps-lock-off").classList.toggle("caps-lock-on");
}

function deleteSymbol(text, direction) {
  let position = document.querySelector("textarea").selectionStart;
  if (direction === "right") {
    let temp1 = text.value.substring(0, position)
      + text.value.substring(position + 1, text.value.length);
    document.querySelector("textarea").value = temp1;
    document.querySelector("textarea").selectionStart = position;
    document.querySelector("textarea").selectionEnd = position;
    document.querySelector("textarea").focus();
  } else {
    let temp1 = text.value.substring(0, position - 1)
      + text.value.substring(position, text.value.length);
    document.querySelector("textarea").value = temp1;
    document.querySelector("textarea").selectionStart = position - 1;
    document.querySelector("textarea").selectionEnd = position - 1;
    document.querySelector("textarea").focus();
  }
}

function processClick(key) {
  let text = document.querySelector("textarea");
  if (key.type === "normal") {
    if (document.querySelector(".caps-lock-off").classList.contains("caps-lock-on")) {
      putSymbol(text, text.selectionStart, key.main.toUpperCase());
    } else {
      putSymbol(text, text.selectionStart, key.main.toLowerCase());
    }
  } else if (key.main === "Tab") {
    putSymbol(text, text.selectionStart, "\u0009");
  } else if (key.key === "ArrowUp") {
    moveCursor("up");
  } else if (key.key === "ArrowDown") {
    moveCursor("down");
  } else if (key.key === "ArrowLeft") {
    moveCursor("left");
  } else if (key.key === "ArrowRight") {
    moveCursor("right");
  } else if (key.key === "CapsLock") {
    toggleCapsLock();
  } else if (key.key === "Backspace") {
    deleteSymbol(text, "left");
  } else if (key.key === "Delete") {
    deleteSymbol(text, "right");
  } else if (key.key === "Enter") {
    putSymbol(text, text.selectionStart, "\n\r");
  }
}

export default processClick;
