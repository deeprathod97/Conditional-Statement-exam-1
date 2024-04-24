let inputNumber = 6;
let result = checkDivisibilityBy3(inputNumber);

function checkDivisibilityBy3(number) {
    if (number % 3 === 0) {
        return "Yes";
    } else {
        return "No";
    }
}


console.log(result);
