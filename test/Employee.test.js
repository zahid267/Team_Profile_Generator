const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Employee assignment", () => {
        it("Creates an employee objects", () => {
            const employee = new Employee("Todd", 3, "todd@todd.com");
           // console.log("name :" +employee.getName());
            expect(employee.name).toEqual("Todd");
            expect(employee.id).toEqual(3);
            expect(employee.email).toEqual("todd@todd.com");
        });

        it("Should returns Employee", () => {
            const employee = new Employee("Todd", 3, "todd@todd.com");
            expect(employee.getRole()).toEqual("Employee");
        });
        // Exception test
        it("should throw an error if not provided an id and email", () => {
            const emp = new Employee("Sarah");
            // Verify that the correct error was thrown when the callback is executed
            expect(emp.getEmail()).toEqual(undefined);
          });
          // Exception test
        it("should produce 'undefined' values if not provided any parameter values", () => {
            const emp = new Employee();
            expect(emp.name).toEqual(undefined);
        });
        // Exception test
        it("should give typeof role if not provided any parameter values", () => {
            const emp = new Employee();
            let empRole;
            empRole = emp.getRole();
            expect(typeof empRole).toEqual("string");
        });
        // Exception test
        it("should give typeof emp to be object if not provided any parameter values", () => {
            const emp = new Employee();
            expect(typeof emp).toEqual("object");
        });
    });
});