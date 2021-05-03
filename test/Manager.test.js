const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Manager assignment", () => {
        it("Creates an Manager objects", () => {
            const manager = new Manager("Todd", 3, "todd@todd.com","613-456-9542");
           // console.log("name :" +manager.getName());
            expect(manager.name).toEqual("Todd");
            expect(manager.id).toEqual(3);
            expect(manager.email).toEqual("todd@todd.com");
            expect(manager.officeNumber).toEqual("613-456-9542");
        });

        it("Should returns Manager", () => {
            const manager = new Manager("Todd", 3, "todd@todd.com","613-456-9542");
            expect(manager.getRole()).toEqual("Manager");
        });
        // Exception test
        it("should return 'undefined' if not provided an id and email", () => {
            const mng = new Manager("John");
            // Verify that the correct error was thrown when the callback is executed
            expect(mng.officeNumber).toEqual(undefined);
          });
          // Exception test
        it("should return 'undefined' values if not provided any parameter values", () => {
            const mng = new Manager();
            
            expect(mng.name).toEqual(undefined);
        });
        // Exception test
        it("should give typeof role if not provided any parameter values", () => {
            const mng = new Manager();
            let mngRole;
            mngRole = mng.getRole();
            expect(typeof mngRole).toEqual("string");
        });
         // Exception test
         it("should give typeof mng to be object if not provided any parameter values", () => {
            const mng = new Manager();
            expect(typeof mng).toEqual("object");
        });
    });
});