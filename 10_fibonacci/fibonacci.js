const fibonacci = function(x) {
    x = Number(x);

    if(typeof x !== "number" || x < 1){
        return "OOPS";
    }


    let seq = [1,1];

    let i;
    for(i = 2; i < x; i++){
        seq.push(seq[i-1] + seq[i-2]);
    }

    return seq[i-1];

};

// Do not edit below this line
module.exports = fibonacci;
