function convertToOldRoman(number) {
    var romanToNum = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    var romanNum = "";
    for (var key in romanToNum) {
        //console.log("key", key);
        //console.log("value", romanToNum[key]);
        while (number >= romanToNum[key]) {
            romanNum += key;
            number -= romanToNum[key];
            //console.log("Num is decreased:", number);
        }
    }
    //console.log(romanNum);
    return romanNum;
}

function convertToNewRoman(number) {
    var romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1,
    };
    var romanNum = "";

    for (var key in romanToNum) {
        //console.log("key", key);
        //console.log("value", romanToNum[key]);
        while (number >= romanToNum[key]) {
            romanNum += key;
            number -= romanToNum[key];
            //console.log("Num is decreased:", number);
        }
    }
    //console.log(romanNum);
    return romanNum;
}

module.exports = {
    convertToNewRoman,
    convertToOldRoman,
};