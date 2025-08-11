const palindromes = function (phrase) {
/*  let array = phrase.split("");
    let cleanedArray = array.filter((char) => /[A-Za-z0-9]/.test(char));
    let lowerCaseArray = cleanedArray.map((char) => char.toLowerCase());
    let reversedArray = lowerCaseArray.toReversed();
    let cleanedPhrase = lowerCaseArray.join("");
    let reversedPhrase = reversedArray.join("");

    return reversedPhrase == cleanedPhrase; */

    let cleanedPhrase = phrase
        .toLowerCase()
        .split('')
        .filter((char) => /[a-z0-9]/.test(char))
        .join('');

    let reversedPhrase = cleanedPhrase
        .split('')
        .reverse()
        .join('');

    return reversedPhrase == cleanedPhrase;
};

palindromes("racecar");

// Do not edit below this line
module.exports = palindromes;
