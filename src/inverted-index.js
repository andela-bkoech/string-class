"use strict";
String.prototype.hasVowels = function() {
  if (this.match(/[abcde]/gi) === null) {
    return false;
  }
  return true;
};

String.prototype.toUpper = function() {
  return this.replace(/[a-z]/gi, function(val) {

    // check if the char is lowercase i.e. ascii 97-122
    var ascii = val.charCodeAt();

    if (ascii >= 97 && ascii <= 122) {
      // convert to capital
      return String.fromCharCode(ascii - 32);
    } else {
      return val;
    }
  });
};

String.prototype.toLower = function() {
  return this.replace(/[A-Z]/gi, function(val) {

    // check if the char is uppercase 65-90
    var ascii = val.charCodeAt();

    if (ascii >= 65 && ascii <= 90) {
      // convert to lower
      return String.fromCharCode(ascii + 32);
    } else {
      return val;
    }
  });
};

String.prototype.ucFirst = function() {
  return this.replace(/[a-zA-Z]{1}/, function(val) {
    return val.toUpper();
  });
};

String.prototype.isQuestion = function() {
  // /[a-zA-Z.;]{1,}[?]/
  if (this.trim().match(/\?$/) === null) {
    return false;
  } else {
    return true;
  }
};

String.prototype.words = function() {
  return this.replace(/\!\@\#\$\%\^\&\*\(\)\_\+\;\:\.\,<>\?\'/, '').split(/\s/);
};

String.prototype.wordCount = function() {
  return this.words().length;
};

String.prototype.toCurrency = function() {
  return this.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

String.prototype.fromCurrency = function() {
  return parseFloat(this.replace(/[\,]/g, ''));
};
