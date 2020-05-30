function largerThanTen(array) {
    return array.filter((number) => {
        let boolean = number > 10;
        console.log(boolean);
        return number > 10;
    });
}

module.exports = largerThanTen;