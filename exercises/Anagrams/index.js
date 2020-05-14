/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */

function anagrams(stringA, stringB) {
    // convert to lower case
    let a = stringA.toLowerCase();
    let b = stringB.toLowerCase();

    // remove spaces and punctuation
    a = a.replace(/[^a-z]/g, ''); // REGEX ARE AMAZING!!!
    b = b.replace(/[^a-z]/g, ''); 

    // turn into array so we can use array methods
    a = a.split('');
    b = b.split('');

    // sort
    a = a.sort();
    b = b.sort();

    // join
    a = a.join();
    b = b.join();

    // compare and return
    console.log(a, b);
    if (a === b) {
        return true;
    } else {
        return false;
    };
};

console.log(anagrams('RAIL,,,! SAFETY!', 'fairy tales'));

module.exports = anagrams;
