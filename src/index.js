const { getMessage } = require("./util");

function component() {
  const element = document.createElement("div");

  // Uses implementation for browser
  element.innerHTML = getMessage();

  return element;
}

document.body.appendChild(component());
