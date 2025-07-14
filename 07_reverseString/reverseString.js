const reverseString = function(string) {
    let array = string.split('');
    let newArray = array.toReversed();
    return newString = newArray.reduce((total, letter) => {
        return total + letter;
    }, '');
};

// Do not edit below this line
module.exports = reverseString;
