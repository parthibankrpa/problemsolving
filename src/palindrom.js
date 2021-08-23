const reverse = require("./stringreverse");
function palindrom(str){
    return  str === reverse(str);
}

module.exports = palindrom;