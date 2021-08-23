const reverse = require("./stringreverse.js");
function reverseInt(int){
    const str  = int.toString();
    const reversedString= parseInt(reverse(str));

    return Math.sign(int)*reversedString;
}

module.exports = reverseInt;