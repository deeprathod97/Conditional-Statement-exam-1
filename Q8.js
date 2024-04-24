let distance = 100;
let time = 2;

const result = calculateSpeed(distance, time);

function calculateSpeed(distance, time) {
    const speed = distance / time;
    if (speed > 40) {
        return "Apply Brake";
    } else {
        return "Keep Going";
    }
}



console.log(result);
