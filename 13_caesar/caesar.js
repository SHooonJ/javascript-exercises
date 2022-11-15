function getNewCode(currentCode, shift){
    shift %= 26;
    let newCode = currentCode + shift;
    if(currentCode >= 65 && currentCode <= 90){
        
        if(newCode > 90){return newCode - 26;}
        else if(newCode < 65){return newCode + 26;}
    }
    else{
        if(newCode > 122){return newCode - 26;}
        else if(newCode < 97){return newCode + 26;}
    }

    return newCode;
}

const caesar = function(phrase, shift) {
    let ans = "";
    for(let i = 0; i < phrase.length; i++){
        let currentCode = phrase.charCodeAt(i);
        if(currentCode < 65 || (currentCode > 90 && currentCode < 97) || currentCode > 122){
            ans += String.fromCharCode(currentCode);
        }
        else{
            let newCode = getNewCode(currentCode,shift);
            ans += String.fromCharCode(newCode);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = caesar;
