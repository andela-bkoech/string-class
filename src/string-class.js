"use strict";
(function() {
  // checks if string is passed.
  String.prototype.isString = function() {
    if (typeof this !== 'string') {
      throw new TypeError();
    }
  };

  String.prototype.hasVowels = function() {
    this.isString();
    // match all vowels in the string
    if (this.match(/[abcde]/gi) === null) {
      return false;
    }
    return true;
  };

  String.prototype.toUpper = function() {
    this.isString();
    // replace all lowercase letters a-z with their uppercase values
    return this.replace(/[a-z]/g, function(val) {
      // convert to capital 97-122
      return String.fromCharCode(val.charCodeAt() - 32);
    });
  };

  String.prototype.toLower = function() {
    this.isString();
    return this.replace(/[A-Z]/g, function(val) {
      // convert to lower (65 - 90) 
      return String.fromCharCode(val.charCodeAt() + 32);
    });
  };

  String.prototype.ucFirst = function() {
    this.isString();
    return this.replace(/[a-zA-Z]{1}/, function(val) {
      return val.toUpper();
    });
  };

  String.prototype.isQuestion = function() {
    this.isString();
    // [a-zA-Z.;]{1,}[?]
    if (this.trim().match(/\?$/) === null) {
      return false;
    } else {
      return true;
    }
  };

  String.prototype.words = function() {
    this.isString();
    // remove all special chars then split at \s 
    return this.replace(/[!@#$%^&*()_+;:.,<>?']/g, '').split(/\s/);
  };

  String.prototype.wordCount = function() {
    this.isString();
    return this.words().length;
  };

  String.prototype.toCurrency = function() {
    this.isString();
    return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  String.prototype.fromCurrency = function() {
    this.isString();
    return parseFloat(this.replace(/[,]/g, ''));
  };
})();
