describe("Tests for strng class prototype", function() {

  describe("Test suite for hasVowels() method", function() {

    it("returns true if string contains vowels", function() {
      expect("Javascript is everywhere".hasVowels()).toBe(true);
    });

    it("returns false if the string doesn't have vowels", function() {
      expect("QWRTY SFGJKL XVNM".hasVowels()).toBe(false);
    });

    it("expect to throw an error", function() {
      expect(function() {
        [].hasVowels();
      }).toThrow();
      expect(function() {
        ["sometext"].hasVowels();
      }).toThrow();
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].hasVowels();
      }).toThrowError(TypeError);
    });

    it("expects return type to be boolean", function() {
      expect(typeof "will return string".hasVowels()).toBe('boolean');
    });

  });

  describe("Test suite for toUpper() method", function() {

    it("returns the string in uppercase", function() {
      expect("my name is brian koech".toUpper()).toBe("MY NAME IS BRIAN KOECH");
      expect("string".toUpper()).toContain("STRING");
      expect("this is Andela".toUpper()).toBe("this is Andela".toUpperCase());
    });

    it("expect return type to be a string", function() {
      expect(typeof("this is amazing".toUpper())).toBe('string');
    });

    it("expect to throw an error", function() {
      expect(function() {
        [].toUpper();
      }).toThrow();
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].toUpper();
      }).toThrowError(TypeError);
    });
  });

  describe("Test suite for toLower() method", function() {
    it("returns the string in lowercase", function() {
      expect("CHINUA ACHEBE".toLower()).toBe("CHINUA ACHEBE".toLowerCase());
      expect("TELEVISION netWORK".toLower()).toBe("television network");
    });

    it("expect the value unchanged for a number", function() {
      expect("123".toLower()).toBe('123');
    });

    it("expect not word chars to be ignored", function() {
      expect("'!@#$%^&*(").toBe("'!@#$%^&*(");
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].toLower();
      }).toThrowError(TypeError);
    });
  });

  describe("Test suite for ucFirst() method", function() {
    it("changes the first char to uppercase", function() {
      expect("this is okey".ucFirst()).toBe("This is okey");
      expect("okey".ucFirst()[0]).toBe("O");
    });

    it("return type is string", function() {
      expect(typeof "return something".ucFirst()).toBe('string');
    });

    it("remains unchanged if the first char is uppercase", function() {
      expect("I am".ucFirst()).toBe("I am");
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].ucFirst();
      }).toThrowError(TypeError);
    });
  });

  describe("Test suite for isQuestion() method", function() {
    it("returns true if the string is a qsn", function() {
      expect("What's up?".isQuestion()).toBe(true);
    });

    it("returns false if string isn't a question", function() {
      expect("Nairobi is in Kenya.".isQuestion()).toBe(false);
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].isQuestion();
      }).toThrowError(TypeError);
    });

    it("expects return type to be boolean", function() {
      expect(typeof "GitHub vs Bitbucket.".isQuestion()).toBe('boolean');
    });
  });

  describe("Test suite for words() method", function() {

    it("return type is an array of strings", function() {
      expect(typeof "i am very pleased".words()).toBe('object');
    });

    it("return type is an array", function() {
      expect(Array.isArray("i am very pleased".words())).toBe(true);
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].words();
      }).toThrowError(TypeError);
    });

    it("expects the array to have content", function() {
      expect("Javascript is not java".words()[0]).toBeDefined();
    });
  });

  describe("Test suite for wordCount() method", function() {
    it("returns the number of words in a string", function() {
      expect("what is happening".wordCount()).toBe(3);
      expect("THISISGOINON".wordCount()).toBe(1);
    });

    it("expects return type to be a number", function() {
      expect(typeof "this is an example".wordCount()).toBe('number');
    });

    it("expect the error thrown to be a TypeError", function() {
      expect(function() {
        [].wordCount();
      }).toThrowError(TypeError);
    });
  });

  describe("Test suite for toCurrency() method", function() {
    it("expect a currency rep of a string", function() {
      expect("11111.11".toCurrency()).toBe("11,111.11");
    });

    it("expect $10000000 to return $10,000,000", function() {
      expect("$10000000".toCurrency()).toBe("$10,000,000");
    });

    it("expect $230000.58 to return $230,000.58", function() {
      expect("$230000.58".toCurrency()).toBe("$230,000.58");
    });
  });

  describe("Test suite for fromCurrency() method", function() {
    it("expects a  number from the string representation", function() {
      expect("11,111.11".fromCurrency()).toBe(11111.11);
    });

    it("expect return type to be a number", function() {
      expect(typeof "123,123.11".fromCurrency()).toEqual('number');
    });
  });
});
