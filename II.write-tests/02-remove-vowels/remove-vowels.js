function removeVowels(word) {
    var characters = word.split("");
    console.log(characters);
    var result = [];

    characters.forEach(function(character) {
        if (
            character !== "a" &&
            character !== "o" &&
            character !== "i" &&
            character !== "e" &&
            character !== "u"
        ) {
            result.push(character);
        } else {
            result.push("_");
        }
    });
    let result1 = result.join("");
    console.log(result1);
    return result1;
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/