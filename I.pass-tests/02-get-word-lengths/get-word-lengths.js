var getWordLengths = function(someWords) {
    var someWords = ["sun", "potato", "roundabout", "pizza"];
    return someWords.map((word) => word.length);
};

module.exports = getWordLengths;

console.log(getWordLengths());