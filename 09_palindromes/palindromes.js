const palindromes = function (str) {
    let fixedStr = str.toLowerCase().replace(/[^a-z]/g,"");


    for(let i = 0; i <= Math.floor(fixedStr.length/2); i++){
        if(fixedStr[i] !== fixedStr[fixedStr.length - i - 1]){return false;}
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
