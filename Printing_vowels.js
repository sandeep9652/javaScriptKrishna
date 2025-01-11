function countVowels(str) {
    const vowelRegex = /[aeiouAEIOU]/g;

    const matchedVowels = str.match(vowelRegex);
    return matchedVowels ? matchedVowels.length : 0;
}

console.log(countVowels('Hello, World!')); // 3
console.log(countVowels('Programming is fun!')); // 5
console.log(countVowels('JavaScript')); // 3
