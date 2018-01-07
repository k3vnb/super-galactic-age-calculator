const Person = require('./../js/calc.js').personModule;
const AgeCompare = require('./../js/calc.js').ageCompareModule;
const Demographics = require('./../js/calc.js').demographicsModule;


$(document).ready(function(){
  var compareArray = [];
  $('form#enter-age').submit(function(event){
    event.preventDefault();
    const ageInYears = parseInt($("input#age-entry").val());
    if (isNaN(ageInYears)) {
      alert("please enter a numeric value");
    }
    compareArray.push(ageInYears);
    const yourAge = new Person(ageInYears);
    $('#age-in-seconds').empty().append(yourAge.ageInSeconds());
  });
  $('form#exact-age').submit(function(event){
    event.preventDefault();
    const birthMonth = $('#month-born').val();
    const birthDay = $('#day-born').val();
    const yearBorn = parseInt($('#year-born').val());
    const now = moment();
    const nowString = now.toString();
    const birthString = moment('' + birthMonth + '-' + birthDay + '-' + yearBorn + '').toString();
    const userCompare = new AgeCompare(nowString, birthString);
    console.log('yes' + compareArray);
    console.log(birthString);
    console.log(nowString);
    console.log(moment(nowString).diff(birthString, 'seconds'));
    $('#exact-second-count').empty().append(userCompare.secondsExactly());
    $('#exact-day-count').empty().append(userCompare.daysExactly());
    $('#exact-week-count').empty().append(userCompare.weeksExactly());
    console.log("merc " + userCompare.mercuryYears() + " ven: " + userCompare.venusYears() + " mar: " + userCompare.marsYears() + " jup: " + userCompare.jupiterYears());
  });
  $('form#demographic-select').submit(function(event){
    event.preventDefault();
    const country = $('#country').val();
    const gender = $('#gender').val();
    const yourDemograph = new Demographics(country, gender);
    const yourExpect = yourDemograph.lifeExpectancy();
    compareArray.push(yourExpect);
    console.log("bbbbb" + compareArray)
    console.log(yourDemograph.lifeExpectancy());
  });
  $()
});
