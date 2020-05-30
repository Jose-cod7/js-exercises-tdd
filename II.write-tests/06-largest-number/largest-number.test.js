var getLargestNumber = require("./largest-number");
test("Get the largest number", function() {
    var array = [3, 21, 88, 4, 36];
    var result = getLargestNumber(array);
    expect(result).toEqual(88);
    expect(array).toEqual([3, 21, 88, 4, 36]);
});
// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed