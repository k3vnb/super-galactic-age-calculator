const Person = require('./../js/calc.js').personModule;


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
});
