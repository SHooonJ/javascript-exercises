const removeFromArray = function(arr, ...numArg) {
    let ans = [];
    arr.forEach((element) => {
        if(!numArg.includes(element)){
            ans.push(element);
        }
    });

    return ans;


};

// Do not edit below this line
module.exports = removeFromArray;
