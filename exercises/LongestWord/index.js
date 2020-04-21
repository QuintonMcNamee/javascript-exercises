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
            if (punctuation[i] === sen[letter]) {
                console.log('before: ', sen);
                sen = sen.substring(0, letter) + sen.substring(letter + 1, sen.length);
                console.log('after: ', sen);
                i--;
            }
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
    console.log(longest);
}

longestWord('hel!lo& world&');

module.exports = longestWord;
