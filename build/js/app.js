(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const Person = require('./../js/calc.js').personModule;
const AgeCompare = require('./../js/calc.js').ageCompareModule;



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
});

},{"./../js/calc.js":1}]},{},[2]);
