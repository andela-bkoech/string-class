(function() {
  'use strict';
  // checks if string is passed.
  String.prototype.hasVowels = function() {
    //this.isString();
    // match all vowels in the string
    return /[aeiou]/ig.test(this);
  };

  String.prototype.toUpper = function() {
    // replace all lowercase letters a-z with their uppercase values
    return this.replace(/[a-z]/g, function(val) {
      // ascii convert to capital (97-122)
      return String.fromCharCode(val.charCodeAt() - 32);
    });
  };

  String.prototype.toLower = function() {
    return this.replace(/[A-Z]/g, function(val) {
      // convert to lower (65 - 90) 
      return String.fromCharCode(val.charCodeAt() + 32);
    });
  };

  String.prototype.ucFirst = function() {
    return this.replace(/^[a-z]/, function(val) {
      // return the 
      return val.toUpper();
    });
  };

  String.prototype.isQuestion = function() {
    // could use this instead: [a-zA-Z.;]{1,}[?]
    if (this.trim().match(/\?$/) === null) {
      return false;
    } else {
      return true;
    }
  };

  String.prototype.words = function() {
    // remove all special chars then split at \s 
    return this.replace(/[!@#$%^&*()_+;:.,<>?']/g, '').split(/\s/);
  };

  String.prototype.wordCount = function() {
    return this.words().length;
  };

  String.prototype.toCurrency = function() {
    return Number(this.replace(/[^0-9\.]/g, '')).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  String.prototype.fromCurrency = function() {
    return parseFloat(this.replace(/[,]/g, ''));
  };
})();
