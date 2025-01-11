let a = new Array("krishna", "sandeep", "prashanth");
let b = ["a", "b"];
console.log("name :\n" + b[0]);
console.log(a[0]);
// ============================================================================================================================
                                        isPalindrome
// ============================================================================================================================



function isPalindrome(str) {
    const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}
console.log(isPalindrome('A man, a plan, a canal, panama')); // true
console.log(isPalindrome('racecar')); // true
console.log(isPalindrome('abcdcba')); // false
// ============================================================================================================================
                                        areAnagrams
// ============================================================================================================================


function areAnagrams(str1, str2) {
    const cleanString = (str) => {
        return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    };

    return cleanString(str1) === cleanString(str2);
}

console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world'));   // false
console.log(areAnagrams('rail safety', 'fairy tales')); // true

// ============================================================================================================================

