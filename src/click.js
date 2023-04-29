function processClick(key){
  let text = document.querySelector("textarea");
  if (key.type === "normal"){
    text.textContent += key.main.toLowerCase();
  }
}

export default processClick;