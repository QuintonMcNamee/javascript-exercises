/**
* Longest Word
*
* Write a function that returns the longest word in the passed sentence.
* If there are two or more words that are the same length, return
* the first word from the string with that length. Ignore punctuation
* and assume sentence will not be empty.
*
* Examples:
* longestWord("Hello there") === "Hello"
* longestWord("My name is Adam") === "name"
* longestWord("fun&!! time") === "time"
*/

function longestWord(sen) {
    let longest = '';
    let currWord = '';
    let counter = 0;
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';

    for(let letter = 0; letter < sen.length; letter++) {
        for(let i = 0; i < punctuation.length; i++) {
            if (punctuation[i] === sen[letter]){
                sen = sen.slice(letter, 1)
            }
            if (sen[letter] === ' ') {
                currWord = '';
                counter = 0;
            } else {
                currWord += sen[letter];
                counter++;
            }
            if (counter > longest.length) {
                longest = currWord;
            }
        }
    }
    return longest;
}

console.log(longestWord('hello&&&& world!'));

module.exports = longestWord;
