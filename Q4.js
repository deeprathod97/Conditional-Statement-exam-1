let inputNumber = 7;
let result = checkOddEven(inputNumber);


function checkOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(result);

