// Problem-1
// If you don't get the number after checking at first,
//  put the output 'please enter a number' and if you get the number,
//   you will return the output.

function mindGame(num) {
    if (typeof num != 'number') {
        return 'please enter a number';
    }
    else {
        const numCount = num * 3;
        const numplus = numCount + 10;
        const divided = numplus / 2;
        const numMinus = divided - 5;
        return numMinus;
    }
}
const total = mindGame(5);
console.log(total);


// Problem-2
// If you don't get the number after checking at first,
//  put the output 'please enter a number' and if you get the string,
//   you will return the output: even or odd.
function evenOdd(stringtype) {
    if (typeof stringtype != 'string') {
        return 'please enter a string';
    }
    else if (stringtype.length % 2 == 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const StringEvenOdd = evenOdd('Phero');
console.log(StringEvenOdd);


// Problem-3
// If you don't get the number after checking at first, put the output 'please enter a number' and if you get the number, you will return the output.
function isLGSeven(num) {
    let differences = num - 7;
    if (typeof num != 'number') {
        return 'please enter a number';
    }
    else if (differences > 7) {
        return number * 2;
    }
    else {
        return differences;
    }
}
let output = isLGSeven(6);
console.log(output);


// Problem-4
// If you don't get the number after checking at first, put the output 'please enter a array' and if you get the number, you will return the output.
function findingBadData(number) {
    if (!Array.isArray(number)) {
        return 'please enter a array';
    }
    let badData = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] < 0) {
            badData++;
        }
    }
    return badData;
}
let numberArray = findingBadData([2, -5, -7, -13]);
console.log(numberArray);


// Problem-5
// I'll check if I'm string from any one of them,
//  please enter all valid nunber' and if you're right,
//   I'll put the output number.
function gemsToDiamond(num1, num2, num3) {
    let sum = num1 * 21 + num2 * 32 + num3 * 43;
    if (typeof num1 != 'number' ||
        typeof num2 != 'number' ||
        typeof num3 != 'number') {
        return 'please enter all valid number';
    }
    else if (sum > 2000) {
        return sum - 2000;
    }
    else {
        return sum;
    }
}
let diamond = gemsToDiamond(1, 1, 1);
console.log(diamond); 