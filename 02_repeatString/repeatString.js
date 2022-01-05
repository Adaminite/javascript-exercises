const repeatString = function(string, numTimes) {
    if(numTimes < 0){
        return "ERROR";
    }

    let ans = ""
    for(let i = 0; i < numTimes; i++){
        ans += string;
    }

    return ans;
};

// Do not edit below this line
module.exports = repeatString;
