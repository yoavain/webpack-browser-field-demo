const _ = require("lodash");
const {run} = require("./node");

function component() {
  const element = document.createElement("div");

  const result = run();

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack", "for", result], ' ');

  return element;
}

document.body.appendChild(component());
