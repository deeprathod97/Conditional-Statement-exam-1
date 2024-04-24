let num1 = 23;
let num2 = 56;

function findLargestNumber(num1, num2) {
    if (num1 >= num2) {
        return num1;
    } else {
        return num2;
    }
}

let largestNumber = findLargestNumber(num1, num2);
console.log("The largest number is:", largestNumber);
