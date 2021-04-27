const Employee = require("../lib/Employee");

describe("Employee class", () => {
    describe("Employee assignment", () => {
        it("Creates an employee objects", () => {
            const employee = new Employee("Todd", 3, "todd@todd.com");

            expect(employee.getName()).toBe("Todd");
            expect(employee.getId()).toBe(3);
            expect(employee.getEmail()).toBe("todd@todd.com");
        });

    });

    describe("getRole", () => {
        it("Should returns Employee", () => {
        const employee = new Employee("Todd", 3, "todd@todd.com");
        expect(employee.getRole()).toBe("Employee");
        });

    });

  /*describe("guessedCorrectly ", () => {
    it("returns true if all letters are correct", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("i");
      expect(word.guessedCorrectly()).toBe(true);
    });
    it("returns false if at least one letter is incorrect", () => {
      const word = new Word("hi");
      word.guessLetter("h");
      word.guessLetter("a");
      expect(word.guessedCorrectly()).toBe(false);
    });
  });*/
});
