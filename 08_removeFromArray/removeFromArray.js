const removeFromArray = function(array, ...exclude) {
    return array.filter((item) => !exclude.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
