var greetPeople = require("./greet-people");

test("print list of names prefixed with Hello", function() {
    var mentors = ["Irina", "Ashleigh", "Etza"];
    var result = greetPeople(mentors);
    expect(result).toEqual(["Hello Irina", "Hello Ashleigh", "Hello Etza"]);
});