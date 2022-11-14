const leapYears = function(year) {
    let four = (year % 4 === 0);
    let hundred = (year % 100 === 0);
    let fourHundred = (year % 400 === 0);

    if(fourHundred === true){return true;}
    else if(hundred === true){return false;}
    else if(four === true){return true;}
    else{return false;}
    
};

// Do not edit below this line
module.exports = leapYears;
