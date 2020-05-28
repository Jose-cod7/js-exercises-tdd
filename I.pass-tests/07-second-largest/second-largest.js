function secondLargest(numbers) {
    var largestNumber = Math.max.apply(null, numbers);
    numbers.splice(numbers.indexOf(largestNumber), 1);
    var _2ndLargestNumber = Math.max.apply(null, numbers);
    console.log(_2ndLargestNumber);
    return _2ndLargestNumber;
}

module.exports = secondLargest;