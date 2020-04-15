/**
 * Palindrome
 *
 * For given string return true if the string is a palindrome
 * or false if it is not.
 *
 * Palindromes are strings that form the same word if it is reversed.
 * Include spaces and punctuation in determining if the string
 * is a palindrome.
 *
 * Examples:
 * palindrome("abba") === true
 * palindrome("abcdefg") === false
 */

function palindrome(str) {
    let length = str.length;
    let reverse = '';
    for (let i = length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    if (reverse === str) {
        return true;
    } else {
        return false;
    }
}

module.exports = palindrome;
