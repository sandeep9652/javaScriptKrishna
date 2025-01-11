function countCharacterOccurrences(str) {
    const charCount = {};

    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    return charCount;
}

const result = countCharacterOccurrences('hello world');
console.log(result);
<<<<<<< HEAD
console.log(result);


=======
>>>>>>> 027b6b8563d7b981cf8bff27e6d2cf2807b608cf
