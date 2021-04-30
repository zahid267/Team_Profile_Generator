const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Employee assignment", () => {
        it("Creates an employee objects", () => {
            const employee = new Employee("Todd", 3, "todd@todd.com");
            console.log("name :" +employee.getName());
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

});
