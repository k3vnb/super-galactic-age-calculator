const Person = require('./../js/calc.js').personModule;

describe('Person', function() {

  it('multiplies an input age in years by the amount of seconds a 325.25 day year, ie 31557600 seconds', function() {
    const user1 = new Person(1)
    const user2 = new Person(44)
    expect(user1.ageInSeconds()).toEqual(31557600);
    expect(user2.ageInSeconds()).toEqual(1388534400);
  });

});
