/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
    if (number >= 0) {
        return true
    }
    return false
}

console.log(isPositive(10))
console.log(isPositive(0))
console.log(isPositive(-5))


/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a
    } else if (b >= a && b >= c) {
        return b
    } else if (c >= a && c >= b) {
        return c
    }
}

console.log(getMaxNumber(1, 2, 3))
console.log(getMaxNumber(-5, 0, 5))
console.log(getMaxNumber(-0.1, 0, 0.2))

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 *
 * @param {Position} queen - The position of the queen.
 * @param {Position} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
    if (queen.x == king.x || queen.y == king.y || Math.abs(queen.x - king.x) == Math.abs(queen.y - king.y)) {
        return true
    } 
    return false
}

console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 5, y: 5}))
console.log(canQueenCaptureKing({x: 2, y: 1}, {x: 2, y: 8}))
console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 2, y: 8}))
console.log(canQueenCaptureKing({x: 1, y: 1}, {x: 5, y: 2}))

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a + b > c && a + c > b && b + c > a) { 
            if (a == b || b == c || a == c ) {
                return true
            }
        }
    }
    return false
}

console.log(isIsoscelesTriangle(1, 2, 3))
console.log(isIsoscelesTriangle(3, 1, 2))
console.log(isIsoscelesTriangle(2, 3, 2))
console.log(isIsoscelesTriangle(3, 2, 2))
console.log(isIsoscelesTriangle(2, 2, 3))
console.log(isIsoscelesTriangle(2, 2, 5))
console.log(isIsoscelesTriangle(3, 0, 3))

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
    let str = ''
       
    if (num > 0 && num < 40) {
        let numbers_X10 = Math.floor(num / 10)

        if (numbers_X10 === 3) {
            str += 'XXX'
        }
        if (numbers_X10 === 2) {
            str += 'XX'
        }
        if (numbers_X10 === 1) {
            str += 'X'
        }
        if (num % 10 === 9) {
            str += 'IX'
        }
        if (num % 10 === 8) {
            str += 'VIII'
        }
        if (num % 10 === 7) {
            str += 'VII'
        }
        if (num % 10 === 6) {
            str += 'VI'
        }
        if (num % 10 === 5) {
            str += 'V'
        }
        if (num % 10 === 4) {
            str += 'IV'
        }
        if (num % 10 === 3) {
            str += 'III'
        }
        if (num % 10 === 2) {
            str += 'II'
        }
        if (num % 10 === 1) {
            str += 'I'
        }
    }
    return str
}

console.log(convertToRomanNumerals(1))
console.log(convertToRomanNumerals(2))
console.log(convertToRomanNumerals(5))
console.log(convertToRomanNumerals(10))
console.log(convertToRomanNumerals(26))

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
    let str = ''

    for (i = 0; i < numberStr.length; i++) {
        if (numberStr[i] === '-') {
            str += 'minus '
        }
        if (numberStr[i] === '.') {
            str += 'point '
        }
        if (numberStr[i] === ',') {
            str += 'point '
        }
        if (numberStr[i] === '0') {
            str += 'zero '
        }
        if (numberStr[i] === '1') {
            str += 'one '
        }
        if (numberStr[i] === '2') {
            str += 'two '
        }
        if (numberStr[i] === '3') {
            str += 'three '
        }
        if (numberStr[i] === '4') {
            str += 'four '
        }
        if (numberStr[i] === '5') {
            str += 'five '
        }
        if (numberStr[i] === '6') {
            str += 'six '
        }
        if (numberStr[i] === '7') {
            str += 'seven '
        }
        if (numberStr[i] === '8') {
            str += 'eight '
        }
        if (numberStr[i] === '9') {
            str += 'nine '
        }
    }
    return str
}

console.log(convertNumberToString('1'))
console.log(convertNumberToString('10'))
console.log(convertNumberToString('-10'))
console.log(convertNumberToString('10.5'))
console.log(convertNumberToString('10,5'))
console.log(convertNumberToString('1950.2'))

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] != str[right]) {
            return false
        } else {left++
                right--
        }
    }
    return true
}

console.log(isPalindrome('abcba'))
console.log(isPalindrome('0123210'))
console.log(isPalindrome('qweqwe'))

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 't'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            return i
        }
    }
    return -1
}

console.log(getIndexOf('qwerty', 'q'))
console.log(getIndexOf('qwerty', 't'))
console.log(getIndexOf('qwerty', 'Q'))
console.log(getIndexOf('qwerty', 'p'))

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
    if (num === 0) {
        return true
    }

    while (num > 0) {
        if (num % 10 === digit) {
            return true        
        }
        num = Math.floor(num / 10)
    }
    return false
}

console.log(isContainNumber(123450, 5))
console.log(isContainNumber(123450, 1))
console.log(isContainNumber(123450, 0))
console.log(isContainNumber(12345, 0))
console.log(isContainNumber(12345, 6))

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        let left_sum = 0
        let right_sum = 0
        for (let n = i - 1; n >= 0; n--)  {
            left_sum += arr[n]
        }
        for (let m = i + 1; m < arr.length; m++) {
            right_sum += arr[m]
        }
        if (left_sum === right_sum) {
            return i
        }
    }
    return -1
}

console.log(getBalanceIndex([1, 2, 5, 3, 0]))
console.log(getBalanceIndex([2, 3, 9, 5]))
console.log(getBalanceIndex([1, 2, 3, 4, 5]))

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
    let matrix = []
    for (i = 0; i < size; i++) {
        matrix[i] = []
        for (j = 0; j < size; j++) {
            matrix[i][j] = 0
        }
    }

    let numbers = 1
    let startX = 0
    let endX = size - 1
    let startY = 0
    let endY = size - 1

    while (startX <= endX && startY <= endY) {
        for (Y = startY; Y <= endY; Y++) {
            matrix[startX][Y] = numbers
            numbers += 1
        }
        startX += 1

        for (X = startX; X <= endX; X++) {
            matrix[X][endY] = numbers
            numbers += 1
        }
        endY -= 1

        if (startX <= endX) {
            for (Y = endY; Y >= startY; Y--) {
                matrix[endX][Y]= numbers
                numbers +=1
            }
            endX -= 1
        }

        if (startY <= endY) {
            for (X = endX; X >= startX; X--) {
                matrix[X][startY]= numbers
                numbers +=1
            }
            startY += 1
        } 
    }
    return matrix
}

console.log(getSpiralMatrix(3))
console.log(getSpiralMatrix(4))

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
    let n = matrix.length
    for (i = 0; i < n; i ++) {
        for (j = i + 1; j < n; j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }
    }

    for (i = 0; i < n; i ++) {
        for (j = 0; j < Math.floor(n / 2); j++) {
            let temp = matrix[i][j]
            matrix[i][j] = matrix[i][n - 1 - j]
            matrix[i][n - 1 - j] = temp
        }
    }
    return matrix
}

console.log(rotateMatrix([
                          [1, 2, 3],
                          [4, 5, 6],
                          [7, 8, 9]
                                    ]))

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
    for (i = 0; i < arr.length; i ++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log(sortByAsc([2, 9, 5]))
console.log(sortByAsc([2, 9, 5, 9]))
console.log(sortByAsc([-2, 9, 5, -3]))

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
    let current = str
    for (i = 0; i < iterations; i++) {
        let evens = ''
        let odds = ''

        for (j = 0; j < current.length; j++){
            if (j % 2 === 0) { 
                evens += current[j]
            } else {
                odds += current[j]
            }
        }
        
        current = evens + odds
    }

    return current
}

console.log(shuffleChar('012345', 1))
console.log(shuffleChar('qwerty', 1))
console.log(shuffleChar('012345', 2))
console.log(shuffleChar('qwerty', 2))
console.log(shuffleChar('012345', 3))
console.log(shuffleChar('qwerty', 3))


/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 */
 function getNearestBigger(number) {
    let digits = {}
    let numbers = 0
    let rest = number
    while (rest > 0) {
        digits[numbers] = rest % 10
        rest = (rest - (rest % 10)) / 10
        numbers += 1
    }

    let pivot = -1;
    for (let i = 1; i < numbers; i++) {
        if (digits[i] < digits[i - 1]) {
            pivot = i;
            break;
        }
    }

    if (pivot === -1) {
        return number;
    }

    let swap = -1;
    for (let i = 0; i < pivot; i++) {
        if (digits[i] > digits[pivot]) {
            if (swap === -1 || digits[i] < digits[swap]) {
                swap = i;
            }
        }
    }

    let tmp = digits[pivot]
    digits[pivot] = digits[swap]
    digits[swap] = tmp

    for (i = 0; i < pivot; i++) {
        for (j = i + 1; j < pivot; j++) {
            if (digits[j] > digits[i]) {
                let t = digits[i]
                digits[i] = digits[j]
                digits[j] = t
            }
        }
    }

    let result = 0

    for (i = numbers - 1; i >= 0; i--) {
        result = result * 10 + digits[i]
    }
    return result
}

console.log(getNearestBigger(12345))
console.log(getNearestBigger(123450))
console.log(getNearestBigger(12344))
console.log(getNearestBigger(123440))
console.log(getNearestBigger(1203450))
console.log(getNearestBigger(90822))
console.log(getNearestBigger(321321))

