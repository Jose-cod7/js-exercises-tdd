function removeMiddle(words) {
    let expectedResult = words.splice(2, 1);
    console.log(expectedResult);
    return expectedResult;
}

module.exports = removeMiddle;