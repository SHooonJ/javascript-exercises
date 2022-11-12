const removeFromArray = function(arr, ...numArg) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < numArg.length; j++){
            if(arr[i] === numArg[j]){
                arr[i] = 'rm';
            }
        }
    }
    let ans = [];
    for(const x of arr){
        if(x !== 'rm'){
            ans.push(x);
        }
    }
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
