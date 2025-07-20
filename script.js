
const text = "EDITWITSS";
const typeTextElement = document.getElementById("type-text");

let i = 0;

function type() {
  if (i < text.length) {
    typeTextElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100); // speed of typing
  }
}

window.onload = type;