const Person = require('./../js/calc.js').personModule;
const AgeCompare = require('./../js/calc.js').ageCompareModule;
const moment = require('moment');


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
    const birthMoment = moment('' + birthMonth + '-' + birthDay + '-' + yearBorn + '').toString();
    console.log(birthMoment);
    console.log(now);
    const day = new Date(yearBorn, birthMonth, birthDay);
    const dayWrapper = moment(day);
    const yourExactAge = new AgeCompare(dayWrapper, );
    console.log(dayWrapper);
  });
});
