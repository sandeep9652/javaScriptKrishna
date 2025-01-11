function findDuplicateCharacters(str) {
    const charCount = {};
    const duplicates = {};

    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    for (let char in charCount) {
        if (charCount[char] > 1) {
            duplicates[char] = charCount[char];
        }
    }

    return duplicates;
}

const result = findDuplicateCharacters('hello world');
console.log(result);
