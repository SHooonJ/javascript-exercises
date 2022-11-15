function getAge(person){
    if(!person.yearOfDeath){
        today = new Date();
        death = today.getFullYear();
    }
    else{
        death = person.yearOfDeath;
    }
    return death - person.yearOfBirth;
}

const findTheOldest = function(arr) {
    let ans = arr.reduce((acc, curr)=>{
        if(getAge(curr) > getAge(acc)){return curr;}
        else{return acc};
    },arr[0])
    return ans;
};

// Do not edit below this line
module.exports = findTheOldest;
