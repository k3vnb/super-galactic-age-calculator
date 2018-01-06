function Person(ageInYears) {
  this.ageInYears = ageInYears;
  console.log(ageInYears);
}

Person.prototype.ageInSeconds = function() {
  const thisAgeInSeconds = this.ageInYears * 31557600;
  console.log(thisAgeInSeconds);
  return thisAgeInSeconds;
};

function AgeCompare(now, dateOfBirth) {
  this.dateOfBirth = dateOfBirth;
  this.now = now;

  console.log(this.birthMonth, this.birthDay, this.yearBorn, this.now);
}








exports.personModule = Person;
exports.ageCompareModule = AgeCompare;
