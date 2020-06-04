var { convertToNewRoman, convertToOldRoman } = require("./roman-converter");

describe("Old Roman Test", () => {
    const EXPECT_RESULT = {
        1: "I",
        2: "II",
        3: "III",
        4: "IIII",
        5: "V",
        9: "VIIII",
        10: "X",
        40: "XXXX",
    };

    test("return empty string for no value", () => {
        expect(convertToOldRoman()).toEqual("");
    });

    test("return a old Roman Numeral", () => {
        var result = convertToOldRoman(9);
        console.log(result);
        expect(result).toEqual("VIIII");
    });

    test("Return a old Roman Numeral for any number pased in the function", () => {
        Object.keys(EXPECT_RESULT).forEach((input) => {
            const expected = EXPECT_RESULT[input];
            console.log(expected);
            expect(convertToOldRoman(input)).toEqual(expected);
        });
    });
});

describe("New Roman Test", () => {
    const EXPECT_RESULT = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        14: "XIV",
        40: "XL",
        44: "XLIV",
    };
    test("return empty string for no value", () => {
        expect(convertToNewRoman()).toEqual("");
    });

    test("return a New Roman Numeral", () => {
        var result = convertToNewRoman(9);
        expect(result).toEqual("IX");
    });

    test("Return a New Roman Numeral for any number pased in the function", () => {
        Object.keys(EXPECT_RESULT).forEach((input) => {
            const expected = EXPECT_RESULT[input];
            console.log(expected);
            expect(convertToNewRoman(input)).toEqual(expected);
        });
    });
});