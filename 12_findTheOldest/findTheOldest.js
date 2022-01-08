const findTheOldest = function(arr) {
    return arr.reduce( (oldest, curr) =>{

        if(Object.keys(oldest).length === 0){
            return curr;
        }
        let currBirth = curr.yearOfBirth;
        let oldestBirth = oldest.yearOfBirth;

        let currDeath;
        let oldestDeath;
        let currYear = (new Date()).getFullYear();
        if(curr.yearOfDeath === undefined){
            currDeath = currYear;
        }
        else{
            currDeath = curr.yearOfDeath;
        }
        if(oldest.yearOfDeath === undefined){
            oldestDeath = currYear;
        }
        else{
            oldestDeath = oldest.yearOfDeath;
        }

        return ( (currDeath - currBirth) > (oldestDeath - oldestBirth) ) ? curr: oldest;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;
