const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }
    numbers = [0, 1, 1]
    for (i = 3; i <= index; i++) {
        number = numbers[i-1] + numbers[i-2];
        numbers.push(number);
    }
    return numbers[index];
};

// Do not edit below this line
module.exports = fibonacci;
