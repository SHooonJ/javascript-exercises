const reverseString = function(str) {
    let strArr = str.split('');
    let arr = [];
    for(let i = strArr.length-1; i >= 0; i--){
        arr.push(strArr[i]);
    }
    
    return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
