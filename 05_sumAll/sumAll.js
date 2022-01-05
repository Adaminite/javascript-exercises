const sumAll = function(num1, num2) {
    if(typeof num1 !== "number" || typeof num2 !== "number"|| num1 < 0 || num2 < 0){
        return "ERROR";
    }

    let smallest;
    let largest;
    
    if(num1 < num2){
        smallest = num1;
        largest = num2;
    }
    else{
        smallest = num2;
        largest = num1;
    }

    let sum = 0;
    for(let ctr = smallest; ctr <= largest; ctr++){
        sum += ctr;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
