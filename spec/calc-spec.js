const Person = require('./../js/calc.js').personModule;
const AgeCompare = require('./../js/calc.js').ageCompareModule;
var moment = require('moment');

describe('Person', function() {

  it('multiplies an input age in years by the amount of seconds a 325.25 day year, ie 31557600 seconds', function() {
    const user1 = new Person(1)
    const user2 = new Person(44)
    const user3 = new Person("hello");
    expect(user1.ageInSeconds()).toEqual(31557600);
    expect(user2.ageInSeconds()).toEqual(1388534400);
    expect(user3.ageInSeconds()).toEqual(NaN);
  });

});
describe('AgeCompare', function() {

  it('calculates the difference between a birthdate and now in seconds, days, and weeks', function() {
    const birthday = moment('12-02-1990').toString();
    const nowTest = moment('01-06-2018').toString();
    const user1 = new AgeCompare(birthday, nowTest)
    expect(user1.secondsExactly()).toEqual(31557600);

  });

});
