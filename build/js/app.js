(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
const Person = require('./../js/calc.js').personModule;


$(document).ready(function(){
  $('form#enter-age').submit(function(event){
    event.preventDefault();
    const ageInYears = parseInt($("input#age-entry").val());
    const yourAge = new Person(ageInYears);

    $('#age-in-seconds').empty().append(yourAge.ageInSeconds);
  });
});

},{"./../js/calc.js":1}]},{},[2]);
