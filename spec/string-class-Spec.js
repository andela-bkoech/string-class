describe("Tests for strng class prototype", function() {

  describe("Test suite for hasVowels() method", function() {

    it("returns true if string contains vowels", function() {
      expect("Javascript is everywhere".hasVowels()).toBe(true);
    });

    it("returns false if the string does'nt have vowels", function() {
      expect("QWRTY SFGJKL XVNM".hasVowels()).toBe(false);
    });

  });

  describe("Test suite for toUpper() method", function() {

    it("returns the string in uppercase", function() {
      expect("my name is brian koech".toUpper()).toBe("MY NAME IS BRIAN KOECH");
      expect("this is amazing".toUpper()).toBe("this is amazing".toUpperCase());
      expect("string".toUpper()).toContain("STRING");
      expect("this is Andela".toUpper()).toBe("this is Andela".toUpperCase());
    });

    it("expect return type to be a string", function() {
      expect(typeof("this is amazing".toUpper())).toBe('string');
    });
  });

  describe("Test suite for toLower() method", function() {
    it("returns the string in lowercase", function() {
      expect("CHINUA ACHEBE".toLower()).toBe("CHINUA ACHEBE".toLowerCase());
      expect("TELEVISION netWORK".toLower()).toBe("television network");
    });

    it("expect the value unchanged for number", function() {
      expect("123".toLower()).toBe('123');
    });
  });

  describe("Test suite for ucFirst() method", function() {
    it("changes the first char to uppercase", function() {
      expect("this is okey".ucFirst()).toBe("This is okey");
    });

    it("remains unchanged if the first char is uppercase", function() {
      expect("I am".ucFirst()).toBe("I am");
    });
  });

  describe("Test suite for isQuestion() method", function() {
    it("returns true if the string is a qsn", function() {
      expect("What's up?".isQuestion()).toBe(true);
    });

    it("returns false if string isn't a question", function() {
      expect("Nairobi is in Kenya.".isQuestion()).toBe(false);
    });
  });

  describe("Test suite for words() method", function() {

    it("return type is an array of strings", function() {
      expect(typeof "i am very pleased".words()).toBe('object');
    });

    it("return type is an array", function() {
      expect(Array.isArray("i am very pleased".words())).toBe(true);
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
  });

  describe("Test suite for toCurrency() method", function() {
    it("expect a currency rep of a string", function() {
      expect("11111.11".toCurrency()).toBe("11,111.11");
    });

    it("expect a currency rep of a string", function() {
      expect().toBe();
    });
  });

  describe("Test suite for fromCurrency() method", function() {
    it("expects a  number from the string representation", function() {
      expect("11,111.11".fromCurrency()).toBe(11111.11);
    });

    it("expect return type to be a number", function() {
      expect(typeof "123,123.11".fromCurrency()).toEqual('number');
    })
  });
});
