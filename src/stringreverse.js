// const reverse = (str) => {
//    if(!str) return '';
//    let reversed = '';
//    for(let charactor of str){
//        reversed = charactor + reversed;
//    }

//    return reversed;
    
// }

const reverse = (str) =>{
    
    return str.split("").reverse().join("") || "";
}
module.exports = reverse;