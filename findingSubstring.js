function longestSubstring(str) {
    let start = 0;
    let maxLength = 0;
    let longestSubstr = '';
    const charIndexMap = new Map();

    for (let end = 0; end < str.length; end++) {
        const char = str[end];

        if (charIndexMap.has(char) && charIndexMap.get(char) >= start) {
            start = charIndexMap.get(char) + 1;
        }

        charIndexMap.set(char, end);
        
        const currentLength = end - start + 1;

        if (currentLength > maxLength) {
            maxLength = currentLength;
            longestSubstr = str.substring(start, end + 1);
        }
    }

    return longestSubstr;
}

console.log(longestSubstring('abcabcbb')); // Output: 'abc'
console.log(longestSubstring('bbbbb'));    // Output: 'b'
console.log(longestSubstring('pwwkew'));   // Output: 'wke'
