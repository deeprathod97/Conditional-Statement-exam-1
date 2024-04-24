let age = 20; 
function determineRunningDistance(age) {
    if (age < 13) {
        return "1 Kms";
    } else if (age >= 13 && age < 18) {
        return "5 Kms";
    } else if (age >= 18 && age < 30) {
        return "10 Kms";
    } else {
        return "You can have friends from anywhere";
    }
}


let runningDistance = determineRunningDistance(age);
console.log(runningDistance);
