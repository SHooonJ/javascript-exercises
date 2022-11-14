const palindromes = function (str) {
    let fixedStr = '';
    str = str.toLowerCase();
    for(let i = 0; i < str.length; i++){
        let code = str.charCodeAt(i);
        if(!(code <= 122 && code >= 97)){continue;}
        fixedStr += str[i];
    }

    for(let i = 0; i <= Math.floor(fixedStr.length/2); i++){
        if(fixedStr[i] !== fixedStr[fixedStr.length - i - 1]){return false;}
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
