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
  it('calculates the difference between a user input birthdate and a later date representing now and returns the user age on planets Mercury, Venus, Mars, Jupiter', function() {
    const birthday = '12-02-1990';
    const nowTest = '01-31-2018';
    const user1 = new AgeCompare(nowTest, birthday)
    expect(user1.mercuryYears()).toEqual(113.1873146246863);
    expect(user1.venusYears()).toEqual(43.8144443708463);
    expect(user1.marsYears()).toEqual(14.44944442017272);
    expect(user1.jupiterYears()).toEqual(2.290468424108323);
  });

});

describe('Demographics', function() {

  it('retrieves life expectancy for user according to country', function() {
    const country = 'Italy';
    const gender = 'neutral';
    const user1 = new Demographics(country, gender)
    expect(user1.lifeExpectancy()).toBe(82.7);

  });
  it('retrieves life expectancy for user according to country for females', function() {
    const country = 'Zimbabwe';
    const gender = 'female';
    const user1 = new Demographics(country, gender)
    expect(user1.lifeExpectancy()).toBe(63.735);
  });
  it('retrieves life expectancy for user according to country for males', function() {
    const country = 'Lebanon';
    const gender = 'male';
    const user1 = new Demographics(country, gender)
    expect(user1.lifeExpectancy()).toBe(71.155);
  });

});
describe('LifeLeft', function() {
  it('returns difference between life expectancy and current age of user on 5 planets if user age is under life expectancy', function() {
    const userAge = 20;
    const userLifeEx = 80;
    const compareArray = [userAge, userLifeEx];
    const user1 = new LifeLeft(compareArray);
    expect(user1.difference()).toBe("Warning! Our records indicate that, statistically, you are on borrowed time. You should have kicked it 60 years ago on Earth. You'd have been a goner 250 years ago on Mercury, and 96.7741935483871 years on Venus. You'd have breathed your last breathe 31.914893617021278 & 5.136986301369864 years ago on Mars and Jupiter, respectively, assuming you had breath to breathe. We hear its smoggy on Jupiter.");
  });
  it('returns difference between life expectancy and current age of user on 5 planets if user age is over life expectancy', function() {
    const userAge = 80;
    const userLifeEx = 70;
    const compareArray = [userAge, userLifeEx];
    const user1 = new LifeLeft(compareArray);
    expect(user1.difference()).toBe("Our records indicate that, statistically, you are likely to die in 10 years. This is a part of the human condition, and indeed a pre-condition of life itself. On Venus, all other things being equal, we expect your demise in 16.129032258064516 years. Mars, 5.319148936170213 years. On Jupiter, only 0.8561643835616438 years.  To optimize existence, we'd recommend going to Mercury, where you can live sweet life for another 41.66666666666667 years. Bring sunscreen.");
  });
  it('returns a string if user age is equal to user life expectancy', function() {
    const userAge = 80;
    const userLifeEx = 80;
    const compareArray = [userAge, userLifeEx];
    const user1 = new LifeLeft(compareArray);
    expect(user1.difference()).toBe("Looks like time has caught up to you, congrats on living up to you're statistical life expectancy. Try not to die, if you live longer it brings up the whole life expectancy average for the rest of us. If you do go to Mars, bring a water bottle.");
  });

});
