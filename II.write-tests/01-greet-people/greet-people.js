function greetPeople(people) {
    var greeting = "Hello ";

    return people.map(function(person) {
        let result = greeting + person;
        console.log(result);
        return greeting + person;
    });
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/