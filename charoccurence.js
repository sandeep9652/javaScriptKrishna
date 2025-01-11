function countCharacterOccurrences(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    return charCount;
}

const result = countCharacterOccurrences('hello world');
console.log(result);
