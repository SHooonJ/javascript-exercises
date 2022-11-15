function test(element){
    return element.title;
}

const getTheTitles = function(books) {
    let ans = books.map(test);
    return ans;
};

// Do not edit below this line
module.exports = getTheTitles;
