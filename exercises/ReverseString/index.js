/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str) {
    let length = str.length;
    let result = '';
    
    for(let i = length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}

// reverse('hello')

module.exports = reverse;
