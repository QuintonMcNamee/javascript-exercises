/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
    let longest = 0;
    let longestCurrent = 0;
    let char = '';
    let charLongest = '';
    console.log(str);
    
    while (str.length > 0) {
        char = str.charAt(0);
        // console.log(char);
        for (let i = 0; i < str.length; i++) {
            if (char === str[i]) {
                longestCurrent += 1;
                if (longestCurrent > longest) {
                    longest = longestCurrent;
                    charLongest = char;
                };
            };
        };
        longestCurrent = 0;
        str = str.substr(1)
        console.log(str);
    };
    console.log(charLongest);
    return charLongest;
}

maxChar("apple 1231111");

module.exports = maxChar;
