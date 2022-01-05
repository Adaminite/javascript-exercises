const removeFromArray = function() {
    let arr = arguments[0];

    for(let i = 1; i < arguments.length; i++){
        while(arr.indexOf(arguments[i]) !== -1){
            let idx = arr.indexOf(arguments[i]);
            arr.splice(idx, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
