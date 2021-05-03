const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Engineer assignment", () => {
        it("Creates an Engineer objects", () => {
            const engineer = new Engineer("Todd", 3, "todd@todd.com","todd456");
           // console.log("name :" +engineer.getName());
            expect(engineer.name).toEqual("Todd");
            expect(engineer.id).toEqual(3);
            expect(engineer.email).toEqual("todd@todd.com");
            expect(engineer.github).toEqual("todd456");
        });

        it("Should returns Engineer", () => {
            const engineer = new Engineer("Todd", 3, "todd@todd.com","todd456");
            expect(engineer.getRole()).toEqual("Engineer");
        });
        // Exception test
        it("should return 'undefined' if not provided an id and email", () => {
            const eng = new Engineer("John");
            // Verify that the correct error was thrown when the callback is executed
            expect(eng.getGithub()).toEqual(undefined);
          });
          // Exception test
        it("should return 'undefined' values if not provided any parameter values", () => {
            const eng = new Engineer();
            
            expect(eng.name).toEqual(undefined);
        });
        // Exception test
        it("should give typeof role if not provided any parameter values", () => {
            const eng = new Engineer();
            let engRole;
            engRole = eng.getRole();
            expect(typeof engRole).toEqual("string");
        });
        // Exception test
        it("should give typeof eng to be object if not provided any parameter values", () => {
            const eng = new Engineer();
            expect(typeof eng).toEqual("object");
        });
    });
});