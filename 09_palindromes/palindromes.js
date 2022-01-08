const palindromes = function (str) {
    let modStr = str.replace(/[^a-z]/gi, '').replace(/\s/g, '').toLowerCase();

    let revStrArr = modStr.split('');
    let revStr = revStrArr.reduce( (string, char) => {
        string = char + string;
        return string;
    }, "");

    if(modStr === revStr){
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
