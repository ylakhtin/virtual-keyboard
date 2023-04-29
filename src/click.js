async function processClick(key){
  let text = document.querySelector("textarea");
  if (key.type === "normal"){
    let position = text.selectionStart;
    let temp1 = text.value.substring(0, position) + key.main.toLowerCase() + text.value.substring(position, text.value.length);
    text.value = temp1;
  }
}

export default processClick;