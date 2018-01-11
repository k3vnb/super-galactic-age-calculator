(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = exports.Person = function () {
  function Person(ageInYears) {
    _classCallCheck(this, Person);

    this.ageInYears = ageInYears;
  }

  _createClass(Person, [{
    key: 'ageInSeconds',
    value: function ageInSeconds() {
      var thisAgeInSeconds = this.ageInYears * 31557600;
      return thisAgeInSeconds;
    }
  }]);

  return Person;
}();

;

var AgeCompare = exports.AgeCompare = function () {
  function AgeCompare(nowString, birthString) {
    _classCallCheck(this, AgeCompare);

    this.nowString = nowString;
    this.birthString = birthString;
  }

  _createClass(AgeCompare, [{
    key: 'secondsExactly',
    value: function secondsExactly() {
      var exactSeconds = moment(this.nowString).diff(this.birthString, 'seconds');
      return exactSeconds;
    }
  }, {
    key: 'daysExactly',
    value: function daysExactly() {
      var exactDays = moment(this.nowString).diff(this.birthString, 'days');
      return exactDays;
    }
  }, {
    key: 'weeksExactly',
    value: function weeksExactly() {
      var exactWeeks = moment(this.nowString).diff(this.birthString, 'weeks');
      return exactWeeks;
    }
  }, {
    key: 'yearsExactly',
    value: function yearsExactly() {
      var exactYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25;
      return exactYears;
    }
  }, {
    key: 'mercuryYears',
    value: function mercuryYears() {
      var mercYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .24;
      return mercYears;
    }
  }, {
    key: 'venusYears',
    value: function venusYears() {
      var venusYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .62;
      return venusYears;
    }
  }, {
    key: 'marsYears',
    value: function marsYears() {
      var marsYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 1.88;
      return marsYears;
    }
  }, {
    key: 'jupiterYears',
    value: function jupiterYears() {
      var jupiterYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 11.86;
      return jupiterYears;
    }
  }]);

  return AgeCompare;
}();

;

var Demographics = exports.Demographics = function () {
  function Demographics(country, gender) {
    _classCallCheck(this, Demographics);

    this.country = country;
    this.gender = gender;
  }

  _createClass(Demographics, [{
    key: 'lifeExpectancy',
    value: function lifeExpectancy() {
      var _liveExpectancy;

      var countryA = this.country;
      var liveExpectancy = (_liveExpectancy = {
        'Afghanistan': 60.5,
        'Albania': 77.8,
        'Algeria': 75.6,
        'Angola': 52.4,
        'Antigua and Barbuda': 76.4,
        'Argentina': 76.3,
        'Armenia': 74.8,
        'Australia': 82.8,
        'Austria': 81.5,
        'Azerbaijan': 72.7,
        'Bahamas': 76.1,
        'Bahrain': 76.9,
        'Bangladesh': 71.8,
        'Barbados': 75.5,
        'Belarus': 72.3,
        'Belgium': 81.1,
        'Belize': 70.1,
        'Benin': 60,
        'Bhutan': 69.8,
        'Bolivia': 70.7,
        'Bosnia and Herzegovina': 77.4,
        'Botswana': 65.7,
        'Brazil': 75,
        'Brunei': 77.7,
        'Bulgaria': 74.5,
        'Burkina Faso': 59.9,
        'Burundi': 59.6,
        'Cambodia': 68.7,
        'Cameroon': 57.3,
        'Canada': 82.2,
        'Cape Verde': 73.3,
        'Central African Republic': 52.5,
        'Chad': 53.1,
        'Chile': 80.5,
        'China': 76.1,
        'Colombia': 74.8,
        'Comoros': 63.5,
        'Congo': 64.7,
        'Costa Rica': 79.6,
        'Ivory Coast': 53.3,
        'Croatia': 78,
        'Cuba': 79.1,
        'Cyprus': 80.5,
        'Czech Republic': 78.8,
        'Denmark': 80.6,
        'Djibouti': 63.5,
        'Dominican Republic': 73.9,
        'North Korea': 70.6
      }, _defineProperty(_liveExpectancy, 'Congo', 59.8), _defineProperty(_liveExpectancy, 'Ecuador', 76.2), _defineProperty(_liveExpectancy, 'Egypt', 70.9), _defineProperty(_liveExpectancy, 'El Salvador', 73.5), _defineProperty(_liveExpectancy, 'Equatorial Guinea', 58.2), _defineProperty(_liveExpectancy, 'Eritrea', 64.7), _defineProperty(_liveExpectancy, 'Estonia', 77.6), _defineProperty(_liveExpectancy, 'Ethiopia', 64.8), _defineProperty(_liveExpectancy, 'Fiji', 69.9), _defineProperty(_liveExpectancy, 'Finland', 81.1), _defineProperty(_liveExpectancy, 'France', 82.4), _defineProperty(_liveExpectancy, 'Gabon', 66), _defineProperty(_liveExpectancy, 'Gambia', 61.1), _defineProperty(_liveExpectancy, 'Georgia', 74.4), _defineProperty(_liveExpectancy, 'Germany', 81), _defineProperty(_liveExpectancy, 'Ghana', 62.4), _defineProperty(_liveExpectancy, 'Greece', 81), _defineProperty(_liveExpectancy, 'Grenada', 73.6), _defineProperty(_liveExpectancy, 'Greenland', 71.83), _defineProperty(_liveExpectancy, 'Guatemala', 71), _defineProperty(_liveExpectancy, 'Guinea', 59), _defineProperty(_liveExpectancy, 'Guinea-Bissau', 58.9), _defineProperty(_liveExpectancy, 'Guyana', 66.2), _defineProperty(_liveExpectancy, 'Haiti', 63.5), _defineProperty(_liveExpectancy, 'Honduras', 74.6), _defineProperty(_liveExpectancy, 'Hungary', 75.9), _defineProperty(_liveExpectancy, 'Iceland', 82.7), _defineProperty(_liveExpectancy, 'India', 68.3), _defineProperty(_liveExpectancy, 'Indonesia', 69.1), _defineProperty(_liveExpectancy, 'Iran', 75.5), _defineProperty(_liveExpectancy, 'Iraq', 68.9), _defineProperty(_liveExpectancy, 'Ireland', 81.4), _defineProperty(_liveExpectancy, 'Israel', 82.5), _defineProperty(_liveExpectancy, 'Italy', 82.7), _defineProperty(_liveExpectancy, 'Jamaica', 76.2), _defineProperty(_liveExpectancy, 'Japan', 83.7), _defineProperty(_liveExpectancy, 'Jordan', 74.1), _defineProperty(_liveExpectancy, 'Kazakhstan', 70.2), _defineProperty(_liveExpectancy, 'Kenya', 63.4), _defineProperty(_liveExpectancy, 'Kiribati', 66.3), _defineProperty(_liveExpectancy, 'Kuwait', 74.7), _defineProperty(_liveExpectancy, 'Kyrgyzstan', 71.1), _defineProperty(_liveExpectancy, 'Laos', 65.7), _defineProperty(_liveExpectancy, 'Latvia', 74.6), _defineProperty(_liveExpectancy, 'Lebanon', 74.9), _defineProperty(_liveExpectancy, 'Lesotho', 53.7), _defineProperty(_liveExpectancy, 'Liberia', 61.4), _defineProperty(_liveExpectancy, 'Libya', 72.7), _defineProperty(_liveExpectancy, 'Lithuania', 73.6), _defineProperty(_liveExpectancy, 'Luxembourg', 82), _defineProperty(_liveExpectancy, 'Macedonia', 75.7), _defineProperty(_liveExpectancy, 'Madagascar', 65.5), _defineProperty(_liveExpectancy, 'Malawi', 58.3), _defineProperty(_liveExpectancy, 'Malaysia', 75), _defineProperty(_liveExpectancy, 'Maldives', 78.5), _defineProperty(_liveExpectancy, 'Mali', 58.2), _defineProperty(_liveExpectancy, 'Malta', 81.7), _defineProperty(_liveExpectancy, 'Mauritania', 63.1), _defineProperty(_liveExpectancy, 'Mauritius', 74.6), _defineProperty(_liveExpectancy, 'Mexico', 76.7), _defineProperty(_liveExpectancy, 'Micronesia', 69.4), _defineProperty(_liveExpectancy, 'Moldova', 72.1), _defineProperty(_liveExpectancy, 'Mongolia', 68.8), _defineProperty(_liveExpectancy, 'Montenegro', 76.1), _defineProperty(_liveExpectancy, 'Morocco', 74.3), _defineProperty(_liveExpectancy, 'Mozambique', 57.6), _defineProperty(_liveExpectancy, 'Myanmar', 66.6), _defineProperty(_liveExpectancy, 'Namibia', 65.8), _defineProperty(_liveExpectancy, 'Nepal', 69.2), _defineProperty(_liveExpectancy, 'Netherland', 81.9), _defineProperty(_liveExpectancy, 'New Zealand', 81.6), _defineProperty(_liveExpectancy, 'Nicaragua', 74.8), _defineProperty(_liveExpectancy, 'Niger', 61.8), _defineProperty(_liveExpectancy, 'Nigeria', 54.5), _defineProperty(_liveExpectancy, 'Norway', 81.8), _defineProperty(_liveExpectancy, 'Oman', 76.6), _defineProperty(_liveExpectancy, 'Pakistan', 66.4), _defineProperty(_liveExpectancy, 'Panama', 77.8), _defineProperty(_liveExpectancy, 'Papua New Guinea', 62.9), _defineProperty(_liveExpectancy, 'Paraguay', 74), _defineProperty(_liveExpectancy, 'Peru', 75.5), _defineProperty(_liveExpectancy, 'Phillipines', 68.5), _defineProperty(_liveExpectancy, 'Poland', 77.56), _defineProperty(_liveExpectancy, 'Portugal', 81.1), _defineProperty(_liveExpectancy, 'Qatar', 78.2), _defineProperty(_liveExpectancy, 'Romania', 75), _defineProperty(_liveExpectancy, 'Russia', 70.5), _defineProperty(_liveExpectancy, 'Rwanda', 66.1), _defineProperty(_liveExpectancy, 'Saint Lucia', 75.2), _defineProperty(_liveExpectancy, 'Saint Vincent', 73.2), _defineProperty(_liveExpectancy, 'Samoa', 74), _defineProperty(_liveExpectancy, 'Sao Tome and Principe', 67.5), _defineProperty(_liveExpectancy, 'Saudi Arabia', 74.5), _defineProperty(_liveExpectancy, 'Senegal', 66.7), _defineProperty(_liveExpectancy, 'Serbia', 75.6), _defineProperty(_liveExpectancy, 'Seychelles', 73.2), _defineProperty(_liveExpectancy, 'Sierra Leone', 50.1), _defineProperty(_liveExpectancy, 'Singapore', 83.1), _defineProperty(_liveExpectancy, 'Slovakia', 76.7), _defineProperty(_liveExpectancy, 'Slovenia', 80.8), _defineProperty(_liveExpectancy, 'Solomon Islands', 69.2), _defineProperty(_liveExpectancy, 'Somalia', 55), _defineProperty(_liveExpectancy, 'South Africa', 62.9), _defineProperty(_liveExpectancy, 'Korea', 82.3), _defineProperty(_liveExpectancy, 'Spain', 82.8), _defineProperty(_liveExpectancy, 'Sudan', 64.1), _defineProperty(_liveExpectancy, 'Suriname', 71.6), _defineProperty(_liveExpectancy, 'Swaziland', 58.9), _defineProperty(_liveExpectancy, 'Sweden', 82.4), _defineProperty(_liveExpectancy, 'Switzerland', 83.4), _defineProperty(_liveExpectancy, 'Syria', 64.5), _defineProperty(_liveExpectancy, 'Tajikistan', 69.7), _defineProperty(_liveExpectancy, 'Tanzania', 61.8), _defineProperty(_liveExpectancy, 'Thailand', 74.9), _defineProperty(_liveExpectancy, 'Togo', 59.9), _defineProperty(_liveExpectancy, 'Tonga', 73.5), _defineProperty(_liveExpectancy, 'Trinidad and Tobago', 71.2), _defineProperty(_liveExpectancy, 'Tunisia', 75.3), _defineProperty(_liveExpectancy, 'Turkey', 75.4), _defineProperty(_liveExpectancy, 'Turkmenistan', 66.3), _defineProperty(_liveExpectancy, 'Uganda', 62.3), _defineProperty(_liveExpectancy, 'Ukraine', 71.3), _defineProperty(_liveExpectancy, 'United Arab Emirates', 77.1), _defineProperty(_liveExpectancy, 'United Kingdom', 81.2), _defineProperty(_liveExpectancy, 'United States', 79.3), _defineProperty(_liveExpectancy, 'Uruguay', 77), _defineProperty(_liveExpectancy, 'Uzbekistan', 69.4), _defineProperty(_liveExpectancy, 'Vanuatu', 72), _defineProperty(_liveExpectancy, 'Venezuela', 74.1), _defineProperty(_liveExpectancy, 'Vietnam', 76), _defineProperty(_liveExpectancy, 'Yemen', 65.7), _defineProperty(_liveExpectancy, 'Zambia', 61.8), _defineProperty(_liveExpectancy, 'Zimbabwe', 60.7), _liveExpectancy);
      var countryAvg = liveExpectancy[countryA];
      var genderedAvg = countryAvg * .05;
      if (this.gender == 'neutral') {
        return countryAvg;
      } else if (this.gender == 'male') {
        return countryAvg - genderedAvg;
      } else {
        return countryAvg + genderedAvg;
      }
    }
  }]);

  return Demographics;
}();

;

var LifeLeft = exports.LifeLeft = function () {
  function LifeLeft(compareArray) {
    _classCallCheck(this, LifeLeft);

    this.compareArray = compareArray;
  }

  _createClass(LifeLeft, [{
    key: 'difference',
    value: function difference() {
      if (this.compareArray[0] < this.compareArray[1]) {
        var returnVal = this.compareArray[1] - this.compareArray[0];
        var returnMerc = returnVal / .24;
        var returnVen = returnVal / .62;
        var returnMar = returnVal / 1.88;
        var returnJup = returnVal / 11.68;
        return 'Warning! Our records indicate that, statistically, you are on borrowed time. You should have kicked it ' + returnVal + ' years ago on Earth. You\'d have been a goner ' + returnMerc + ' years ago on Mercury, and ' + returnVen + ' years on Venus. You\'d have breathed your last breathe ' + returnMar + '  &  ' + returnJup + ' years ago on Mars and Jupiter, respectively, assuming you had breath to breathe. We hear its smoggy on Jupiter.';
      } else if (this.compareArray[0] > this.compareArray[1]) {
        var _returnVal = this.compareArray[0] - this.compareArray[1];
        var _returnMerc = _returnVal / .24;
        var _returnVen = _returnVal / .62;
        var _returnMar = _returnVal / 1.88;
        var _returnJup = _returnVal / 11.68;
        return 'Our records indicate that, statistically, you are likely to die in ' + _returnVal + ' years. This is a part of the human condition, and indeed a pre-condition of life itself. On Venus, all other things being equal, we expect your demise in ' + _returnVen + ' years. Mars, ' + _returnMar + ' years. On Jupiter, only ' + _returnJup + ' years.  To optimize existence, we\'d recommend going to Mercury, where you can live sweet life for another ' + _returnMerc + ' years. Bring sunscreen.';
      } else {
        return "Looks like time has caught up to you, congrats on living up to you're statistical life expectancy. Try not to die, if you live longer it brings up the whole life expectancy average for the rest of us. If you do go to Mars, bring a water bottle.";
      }
    }
  }]);

  return LifeLeft;
}();

;

// function Person(ageInYears) {
//   this.ageInYears = ageInYears;
// }
//
// Person.prototype.ageInSeconds = function() {
//   const thisAgeInSeconds = this.ageInYears * 31557600;
//   console.log(thisAgeInSeconds);
//   return thisAgeInSeconds;
// };

// function AgeCompare(nowString, birthString) {
//   this.nowString = nowString;
//   this.birthString = birthString;
// }
// AgeCompare.prototype.secondsExactly = function() {
//   const exactSeconds = moment(this.nowString).diff(this.birthString, 'seconds');
//   return exactSeconds;
// };
// AgeCompare.prototype.daysExactly = function() {
//   const exactDays = moment(this.nowString).diff(this.birthString, 'days');
//   return exactDays;
// };
// AgeCompare.prototype.weeksExactly = function() {
//   const exactWeeks = moment(this.nowString).diff(this.birthString, 'weeks');
//   return exactWeeks;
// };
// AgeCompare.prototype.yearsExactly = function(){
//   const exactYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25;
//   return exactYears;
// };
// AgeCompare.prototype.mercuryYears = function() {
//   const mercYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .24;
//   return mercYears;
// };
// AgeCompare.prototype.venusYears = function() {
//   const venusYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / .62;
//   return venusYears;
// };
// AgeCompare.prototype.marsYears = function() {
//   const marsYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 1.88;
//   return marsYears;
// };
// AgeCompare.prototype.jupiterYears = function() {
//   const jupiterYears = moment(this.nowString).diff(this.birthString, 'days') / 365.25 / 11.86;
//   return jupiterYears;
// };


// function Demographics(country, gender) {
//   this.country = country;
//   this.gender = gender;
// }
//
// Demographics.prototype.lifeExpectancy = function() {
//   const countryA = this.country;
//   const liveExpectancy = {
//   	'Afghanistan': 60.5,
//     'Albania': 77.8,
//     'Algeria': 75.6,
//     'Angola': 52.4,
//     'Antigua and Barbuda':76.4,
//     'Argentina': 76.3,
//     'Armenia': 74.8,
//     'Australia': 82.8,
//     'Austria': 81.5,
//     'Azerbaijan': 72.7,
//     'Bahamas': 76.1,
//     'Bahrain': 76.9,
//     'Bangladesh': 71.8,
//     'Barbados': 75.5,
//     'Belarus': 72.3,
//     'Belgium': 81.1,
//     'Belize': 70.1,
//     'Benin': 60,
//     'Bhutan': 69.8,
//     'Bolivia': 70.7,
//     'Bosnia and Herzegovina': 77.4,
//     'Botswana': 65.7,
//     'Brazil': 75,
//     'Brunei': 77.7,
//     'Bulgaria': 74.5,
//     'Burkina Faso': 59.9,
//     'Burundi': 59.6,
//     'Cambodia': 68.7,
//     'Cameroon': 57.3,
//     'Canada': 82.2,
//     'Cape Verde': 73.3,
//     'Central African Republic': 52.5,
//     'Chad': 53.1,
//     'Chile': 80.5,
//     'China': 76.1,
//     'Colombia': 74.8,
//     'Comoros': 63.5,
//     'Congo': 64.7,
//     'Costa Rica': 79.6,
//     'Ivory Coast': 53.3,
//     'Croatia': 78,
//     'Cuba': 79.1,
//     'Cyprus': 80.5,
//     'Czech Republic': 78.8,
//     'Denmark': 80.6,
//     'Djibouti': 63.5,
//     'Dominican Republic': 73.9,
//     'North Korea': 70.6,
//     'Congo': 59.8,
//     'Ecuador': 76.2,
//     'Egypt':70.9,
//     'El Salvador': 73.5,
//     'Equatorial Guinea': 58.2,
//     'Eritrea': 64.7,
//     'Estonia': 77.6,
//     'Ethiopia': 64.8,
//     'Fiji': 69.9,
//     'Finland': 81.1,
//     'France': 82.4,
//     'Gabon': 66,
//     'Gambia': 61.1,
//     'Georgia': 74.4,
//     'Germany': 81,
//     'Ghana': 62.4,
//     'Greece': 81,
//     'Grenada': 73.6,
//     'Greenland': 71.83,
//     'Guatemala': 71,
//     'Guinea': 59,
//     'Guinea-Bissau': 58.9,
//     'Guyana': 66.2,
//     'Haiti': 63.5,
//     'Honduras': 74.6,
//     'Hungary': 75.9,
//     'Iceland': 82.7,
//     'India': 68.3,
//     'Indonesia': 69.1,
//     'Iran': 75.5,
//     'Iraq': 68.9,
//     'Ireland': 81.4,
//     'Israel': 82.5,
//     'Italy': 82.7,
//     'Jamaica': 76.2,
//     'Japan': 83.7,
//     'Jordan': 74.1,
//     'Kazakhstan': 70.2,
//     'Kenya': 63.4,
//     'Kiribati': 66.3,
//     'Kuwait': 74.7,
//     'Kyrgyzstan': 71.1,
//     'Laos': 65.7,
//     'Latvia': 74.6,
//     'Lebanon': 74.9,
//     'Lesotho': 53.7,
//     'Liberia': 61.4,
//     'Libya': 72.7,
//     'Lithuania': 73.6,
//     'Luxembourg': 82,
//     'Macedonia': 75.7,
//     'Madagascar': 65.5,
//     'Malawi': 58.3,
//     'Malaysia': 75,
//     'Maldives': 78.5,
//     'Mali': 58.2,
//     'Malta': 81.7,
//     'Mauritania': 63.1,
//     'Mauritius': 74.6,
//     'Mexico': 76.7,
//     'Micronesia': 69.4,
//     'Moldova': 72.1,
//     'Mongolia': 68.8,
//     'Montenegro': 76.1,
//     'Morocco': 74.3,
//     'Mozambique': 57.6,
//     'Myanmar': 66.6,
//     'Namibia': 65.8,
//     'Nepal': 69.2,
//     'Netherland': 81.9,
//     'New Zealand': 81.6,
//     'Nicaragua': 74.8,
//     'Niger': 61.8,
//     'Nigeria': 54.5,
//     'Norway': 81.8,
//     'Oman': 76.6,
//     'Pakistan': 66.4,
//     'Panama': 77.8,
//     'Papua New Guinea': 62.9,
//     'Paraguay': 74,
//     'Peru': 75.5,
//     'Phillipines': 68.5,
//     'Poland': 77.56,
//     'Portugal': 81.1,
//     'Qatar': 78.2,
//     'Romania': 75,
//     'Russia': 70.5,
//     'Rwanda': 66.1,
//     'Saint Lucia': 75.2,
//     'Saint Vincent': 73.2,
//     'Samoa': 74,
//     'Sao Tome and Principe': 67.5,
//     'Saudi Arabia': 74.5,
//     'Senegal': 66.7,
//     'Serbia': 75.6,
//     'Seychelles': 73.2,
//     'Sierra Leone': 50.1,
//     'Singapore': 83.1,
//     'Slovakia': 76.7,
//     'Slovenia': 80.8,
//     'Solomon Islands': 69.2,
//     'Somalia': 55,
//     'South Africa': 62.9,
//     'Korea': 82.3,
//     'Spain': 82.8,
//   	'Sudan': 64.1,
//     'Suriname': 71.6,
//     'Swaziland': 58.9,
//     'Sweden': 82.4,
//     'Switzerland': 83.4,
//     'Syria': 64.5,
//     'Tajikistan': 69.7,
//     'Tanzania': 61.8,
//     'Thailand': 74.9,
//     'Togo': 59.9,
//     'Tonga': 73.5,
//     'Trinidad and Tobago': 71.2,
//     'Tunisia': 75.3,
//     'Turkey': 75.4,
//     'Turkmenistan': 66.3,
//     'Uganda': 62.3,
//     'Ukraine': 71.3,
//     'United Arab Emirates': 77.1,
//     'United Kingdom': 81.2,
//     'United States': 79.3,
//     'Uruguay': 77,
//     'Uzbekistan': 69.4,
//     'Vanuatu': 72,
//     'Venezuela': 74.1,
//     'Vietnam': 76,
//     'Yemen': 65.7,
//     'Zambia': 61.8,
//     'Zimbabwe': 60.7
//   };
//
//  const countryAvg = liveExpectancy[countryA];
//  const genderedAvg = countryAvg * .05;
//  if (this.gender == 'neutral') {
//    return countryAvg;
//  } else if (this.gender == 'male') {
//    return countryAvg - genderedAvg;
//  } else {
//    return countryAvg + genderedAvg;
//  }
// };


// function LifeLeft(compareArray) {
//   this.compareArray = compareArray;
// }
//
// LifeLeft.prototype.difference = function() {
//   if (this.compareArray[0] < this.compareArray[1]) {
//     const returnVal = this.compareArray[1] - this.compareArray[0];
//     const returnMerc = returnVal / .24;
//     const returnVen = returnVal / .62;
//     const returnMar = returnVal / 1.88;
//     const returnJup = returnVal / 11.68;
//     return "Warning! Our records indicate that, statistically, you are on borrowed time. You should have kicked it " + returnVal + " years ago on Earth. You'd have been a goner " + returnMerc + " years ago on Mercury, and " + returnVen + " years on Venus. You'd have breathed your last breathe " + returnMar + " & " + returnJup + " years ago on Mars and Jupiter, respectively, assuming you had breath to breathe. We hear its smoggy on Jupiter.";
//   } else if (this.compareArray[0] > this.compareArray[1]) {
//     const returnVal = this.compareArray[0] - this.compareArray[1];
//     const returnMerc = returnVal / .24;
//     const returnVen = returnVal / .62;
//     const returnMar = returnVal / 1.88;
//     const returnJup = returnVal / 11.68;
//     return "Our records indicate that, statistically, you are likely to die in " + returnVal + " years. This is a part of the human condition, and indeed a pre-condition of life itself. On Venus, all other things being equal, we expect your demise in " + returnVen + " years. Mars, " + returnMar + " years. On Jupiter, only " + returnJup + " years.  To optimize existence, we'd recommend going to Mercury, where you can live sweet life for another " + returnMerc + " years. Bring sunscreen.";
//   } else {
//      return "Looks like time has caught up to you, congrats on living up to you're statistical life expectancy. Try not to die, if you live longer it brings up the whole life expectancy average for the rest of us. If you do go to Mars, bring a water bottle.";
//   }
// };


// exports.personModule = Person;
// exports.ageCompareModule = AgeCompare;
// exports.demographicsModule = Demographics;
// exports.lifeLeftModule = LifeLeft;

},{}],2:[function(require,module,exports){
'use strict';

var _calc = require('./../js/calc.js');

$(document).ready(function () {
  var compareArray = [];
  $('form#enter-age').submit(function (event) {
    event.preventDefault();
    var ageInYears = parseInt($("input#age-entry").val());
    if (isNaN(ageInYears)) {
      alert("please enter a numeric value");
    } else {
      var yourAge = new _calc.Person(ageInYears);
      var country = $('#country').val();
      var gender = $('#gender').val();
      var yourDemograph = new _calc.Demographics(country, gender);
      var yourExpect = yourDemograph.lifeExpectancy();
      compareArray.push(yourExpect);
      var countdown = new _calc.LifeLeft(compareArray);
      $('#intro').hide(100);
      $('#hidden-div-1').show(100);
      $('#age-in-seconds').empty().append(yourAge.ageInSeconds());
    }
  });
  $('form#exact-age').submit(function (event) {
    event.preventDefault();
    var birthMonth = $('#month-born').val();
    var birthDay = $('#day-born').val();
    var yearBorn = parseInt($('#year-born').val());
    var now = moment();
    var nowString = now.toString();
    var birthString = moment('' + birthMonth + '-' + birthDay + '-' + yearBorn + '').toString();
    var userCompare = new _calc.AgeCompare(nowString, birthString);
    compareArray.push(userCompare.yearsExactly());
    if (isNaN(yearBorn)) {
      alert("please enter a numeric value");
    } else if (yearBorn > 2017 || yearBorn < 500) {
      alert("please don't lie about your birth year");
    } else {
      var userLifeExp = new _calc.LifeLeft(compareArray);
      $('.section-two').hide(100);
      $('#exact-second-count').empty().append(userCompare.secondsExactly());
      $('#exact-day-count').empty().append(userCompare.daysExactly());
      $('#exact-week-count').empty().append(userCompare.weeksExactly());
      $('#merc-stats').empty().append(userCompare.mercuryYears());
      $('#venus-stats').empty().append(userCompare.venusYears());
      $('#mars-stats').empty().append(userCompare.marsYears());
      $('#jupiter-stats').empty().append(userCompare.jupiterYears());
      $('#life-expect').empty().append(userLifeExp.difference());
      $('#hidden-div-exact').show(100);
      $('.first-response').hide();
    };
  });
});

},{"./../js/calc.js":1}]},{},[2]);
