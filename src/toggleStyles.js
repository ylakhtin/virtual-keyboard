export function addPressedStyle(name, order = 0) {
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

export function removePressedStyle(name, order = 0) {
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
