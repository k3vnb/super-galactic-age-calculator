function Person(ageInYears) {
  this.ageInYears = ageInYears;
  console.log(ageInYears);
}

Person.prototype.ageInSeconds = function() {
  const ageInSeconds = this.ageInYears * 31557600;
  console.log(ageInSeconds);
  return ageInSeconds;
}








exports.personModule = Person;
