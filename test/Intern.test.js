const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Intern assignment", () => {
        it("Creates an Intern objects", () => {
            const intern = new Intern("Todd", 3, "todd@todd.com","Charlton");
           // console.log("name :" +intern.getName());
            expect(intern.name).toEqual("Todd");
            expect(intern.id).toEqual(3);
            expect(intern.email).toEqual("todd@todd.com");
            expect(intern.school).toEqual("Charlton");
        });

        it("Should returns Intern", () => {
            const intern = new Intern("Todd", 3, "todd@todd.com","Charlton");
            expect(intern.getRole()).toEqual("Intern");
        });
        // Exception test
        it("should return 'undefined' if not provided an id and email", () => {
            const intern = new Intern("John");
            // Verify that the correct error was thrown when the callback is executed
            expect(intern.school).toEqual(undefined);
          });
          // Exception test
        it("should return 'undefined' values if not provided any parameter values", () => {
            const intern = new Intern();
            
            expect(intern.name).toEqual(undefined);
        });
        // Exception test
        it("should give typeof role if not provided any parameter values", () => {
            const intern = new Intern();
            let internRole;
            internRole = intern.getRole();
            expect(typeof internRole).toEqual("string");
        });
        // Exception test
        it("should give typeof intern to be object if not provided any parameter values", () => {
            const intern = new Intern();
            expect(typeof intern).toEqual("object");
        });
    });
});