const Person = require('./../js/calc.js').personModule;
const AgeCompare = require('./../js/calc.js').ageCompareModule;
const Demographics = require('./../js/calc.js').demographicsModule;




$(document).ready(function(){
  $('form#enter-age').submit(function(event){
    event.preventDefault();
    const ageInYears = parseInt($("input#age-entry").val());
    if (isNaN(ageInYears)) {
      alert("please enter a numeric value");
    }
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
    console.log(birthString);
    console.log(nowString);
    console.log(moment(nowString).diff(birthString, 'seconds'));
    $('#exact-second-count').empty().append(userCompare.secondsExactly());
    $('#exact-day-count').empty().append(userCompare.daysExactly());
    $('#exact-week-count').empty().append(userCompare.weeksExactly());
  });
  $('form#demographic-select').submit(function(event){
    event.preventDefault();
    const country = $('#country').val();
    const gender = $('#gender').val();
    const yourDemograph = new Demographics(country);
    console.log(yourDemograph.lifeExpectancy());
  });
});
