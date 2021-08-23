function maxChar(str) {
    let max=0;
    let maxChar='';
    let chars = str.split("");
    let charMap = {};
    for(let c of chars){
        if(charMap[c]){
            charMap[c] = charMap[c]+1;
        }else{
            charMap[c] = 1;
        }
        
    }
    for(let char in charMap){
        if(charMap[char]>max){
            maxChar = char;
            max = charMap[char];
        }
    }
    return maxChar;
}


module.exports = maxChar;