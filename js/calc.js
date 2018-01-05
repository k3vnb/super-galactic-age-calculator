function Person(ageInYears) {
  this.ageInYears = ageInYears;
  console.log(ageInYears);
}

Person.prototype.ageInSeconds = function() {
  const thisAgeInSeconds = this.ageInYears * 31557600;
  console.log(thisAgeInSeconds);
  return thisAgeInSeconds;
}








exports.personModule = Person;
