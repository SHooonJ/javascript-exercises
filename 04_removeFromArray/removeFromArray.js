const removeFromArray = function(arr, ...numArg) {
    let ans = [];
    return ans = arr.filter((element)=>((!numArg.includes(element))));


};

// Do not edit below this line
module.exports = removeFromArray;
