import keyboard from "./keyboard.js";

function listenKeys(){
  addEventListener("keydown", (event)=>{
    console.log(event.key);
    // Find the keyboard key that was pressed
    keyboard.forEach(element => {
      element.forEach(elem => {
        if ((elem.main === event.key) || (elem.key === event.key)){
          console.log(event);
          console.log(event.key);
          console.log(event.code);
          if (((event.key === 'Shift') && (event.code === 'ShiftRight')) || 
          ((event.key === 'Control') && (event.code === 'ControlRight')) || 
          ((event.key === 'Alt') && (event.code === 'AltRight'))) {
            addPressedStyle(elem.main, 1);
          } else {
            addPressedStyle(elem.main);
          }
        }
      });
    });
  });

  addEventListener("keyup", (event)=>{
    console.log(event.key);
    // Find the keyboard key that was pressed
    keyboard.forEach(element => {
      element.forEach(elem => {
        if ((elem.main === event.key) || (elem.key === event.key)){
          console.log(event);
          console.log(event.key);
          console.log(event.code);
          if (((event.key === 'Shift') && (event.code === 'ShiftRight')) || 
          ((event.key === 'Control') && (event.code === 'ControlRight')) || 
          ((event.key === 'Alt') && (event.code === 'AltRight'))) {
            removePressedStyle(elem.main, 1);
          } else {
            removePressedStyle(elem.main);
          }
        }
      });
    });
  });


}

function addPressedStyle(name, order = 0){
  let target = document.querySelectorAll(".button");
  if (order === 0) {
    for (let i = 0; i < target.length; i++) {
      if (target[i].innerHTML === name){
        target[i].classList.add("key-pressed");
        return;
      }
    }
  } else {
    for (let i = target.length - 1; i >=0; i--) {
      if (target[i].innerHTML === name){
        target[i].classList.add("key-pressed");
        return;
      }
    }
  }
}

function removePressedStyle(name, order = 0){
  let target = document.querySelectorAll(".button");
  if (order === 0) {
    for (let i = 0; i < target.length; i++) {
      if (target[i].innerHTML === name){
        target[i].classList.remove("key-pressed");
        return;
      }
    }
  } else {
    for (let i = target.length - 1; i >=0; i--) {
      if (target[i].innerHTML === name){
        target[i].classList.remove("key-pressed");
        return;
      }
    }
  }
}

export default listenKeys;