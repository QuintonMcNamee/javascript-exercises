/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int) {
    let num = 0;
    let result = 0;

    while(int != 0) {
        num = int % 10;
        result = result * 10 + num;
        int = parseInt(int / 10);
        console.log(int)
    }
    
    return result;
}

reverse(-123456)

module.exports = reverse;
