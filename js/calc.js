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

AgeCompare.prototype.exactly = function() {
  const exactSeconds = moment(this.nowString).diff(this.birthString, 'seconds');
  const exactDays = moment(this.nowString).diff(this.birthString, 'days');
  const exactWeeks = moment(this.nowString).diff(this.birthString, 'weeks');
  console.log(exactSeconds);
  console.log(exactDays);
  console.log(exactWeeks);
  return exactDays;
}









exports.personModule = Person;
exports.ageCompareModule = AgeCompare;
