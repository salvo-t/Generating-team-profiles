const Employee = require("../lib/Employee")


    describe("name", () => {
        it("Should return name after using get.name", () => {
            const test = new Employee("David")
            expect(test.getName()).toBe("David");
        })
    });

    describe("id", () => {
        it("Should return id after using get.id", () => {
            const test = new Employee("Tom", "2")
            expect(test.getId()).toBe("2");
        })
    });

    describe("email", () => {
        it("Should return email after using get.email", () => {
            const test = new Employee("Jon", "3", "jon@email.com")
            expect(test.getEmail()).toBe("jon@email.com");
        })
    });

    describe("Employee", () => {
        it("Should return Employee after using getRole()", () => {
            const test = new Employee("Employee")
            expect(test.getRole()).toBe("Employee");
        })
    });
