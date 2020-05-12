/**
* Is Even
*
* Determine if given number is even
* without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
* nor a conditional operator.
*
* Examples:
* isEven(4) === true
* isEven(3) === false
*/

function isEven(n) {
    //bitwise operation
    return !(n & 1)
}

module.exports = isEven;
