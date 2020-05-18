const _ = require("lodash");

function getMessage() {
    return _.join(["Hello", "webpack", "for", "node"], ' ');
}

module.exports = {
    getMessage
}