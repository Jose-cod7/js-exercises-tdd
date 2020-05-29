// Turn this function into an arrow function
const arrow = () => {
    let string = "es6 is awesome!";
    console.log(string);
    return "es6 is awesome!";
};

//Use the es6 syntax for default parameter
const defaultParameter = (name = "sam") => {
    return name;
};

// Use the spread operator to combine arr1 and arr2
const combineArrays = (arr1, arr2) => {
    let arrays = [...arr1, ...arr2];
    console.log(arrays);
    return arrays;
};

//use destructuring to return the object's cyf property
const destructuring = (obj) => {
    const { cyf, test, learning } = obj;
    return cyf;
};

// use template literal to return a string with the sum of a and b
const templateString = (a, b) => {
    let templateDone = `The sum is equal to ${a + b}`.toString();
    console.log(templateDone);
    return templateDone;
};

module.exports = {
    arrow,
    defaultParameter,
    combineArrays,
    destructuring,
    templateString,
};