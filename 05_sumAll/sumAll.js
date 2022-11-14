const sumAll = function(num1, num2) {
    if(Number.isInteger(num1) === false || Number.isInteger(num2) === false
    || num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    let ans = 0;
    let smallNum = 0, largeNum = 0;
    if(num1 < num2){
        smallNum = num1;
        largeNum = num2;
    }
    else{
        smallNum = num2;
        largeNum = num1;
    }
    for(let i = smallNum; i <= largeNum; i++){
        ans += i;
    }
    return ans;


};

// Do not edit below this line
module.exports = sumAll;
