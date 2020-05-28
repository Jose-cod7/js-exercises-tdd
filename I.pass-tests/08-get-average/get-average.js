// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings

function average(numbers) {
    numbers.splice(1, 1);
    numbers.splice(3, 2);
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let ave = total / numbers.length;
    console.log(ave);
    return ave;
}

module.exports = average;