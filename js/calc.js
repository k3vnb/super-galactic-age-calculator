function Person(ageInYears) {
  this.ageInYears = ageInYears;
}

Person.prototype.ageInSeconds = function() {
  const thisAgeInSeconds = this.ageInYears * 31557600;
  console.log(thisAgeInSeconds);
  return thisAgeInSeconds;
};

function AgeCompare(nowString, birthString) {
  this.nowString = nowString;
  this.birthString = birthString;
}

AgeCompare.prototype.secondsExactly = function() {
  const exactSeconds = moment(this.nowString).diff(this.birthString, 'seconds');
  return exactSeconds;
}
AgeCompare.prototype.daysExactly = function() {
  const exactDays = moment(this.nowString).diff(this.birthString, 'days');
  return exactDays;
}
AgeCompare.prototype.weeksExactly = function() {
  const exactWeeks = moment(this.nowString).diff(this.birthString, 'weeks');
  return exactWeeks;
}









exports.personModule = Person;
exports.ageCompareModule = AgeCompare;
