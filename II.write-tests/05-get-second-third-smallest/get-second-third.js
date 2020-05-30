function getSecondThird(array) {
    const newArray = array.slice();
    console.log(newArray);
    newArray.sort(function(x, y) {
        return x - y;
    });
    console.log(newArray);
    return [newArray[1], newArray[2]];
}

module.exports = getSecondThird;