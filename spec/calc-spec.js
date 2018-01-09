const Person = require('./../js/calc.js').personModule;
const AgeCompare = require('./../js/calc.js').ageCompareModule;
const Demographics = require('./../js/calc.js').demographicsModule;
const LifeLeft = require('./../js/calc.js').lifeLeftModule;


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
  it('calculates the difference between a user input birthdate and a later date representing now in seconds, days, and weeks', function() {
    const birthday = '12-02-1990';
    const nowTest = '01-31-2018';
    const user1 = new AgeCompare(nowTest, birthday)
    expect(user1.secondsExactly()).toEqual(857260800);
    expect(user1.daysExactly()).toEqual(9922);
    expect(user1.weeksExactly()).toEqual(1417);

  });
  it('calculates the difference between a user input birthdate and a later date representing now in seconds, days, and weeks', function() {
    const birthday = '12-02-1990';
    const nowTest = '01-31-2018';
    const user1 = new AgeCompare(nowTest, birthday)
    expect(user1.mercuryYears()).toEqual(113.1873146246863);
    expect(user1.venusYears()).toEqual(43.8144443708463);
    expect(user1.marsYears()).toEqual(14.44944442017272);
    expect(user1.jupiterYears()).toEqual(2.290468424108323);

  });

});
