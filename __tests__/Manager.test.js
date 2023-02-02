const Manager = require("../lib/Manager")

describe("officeNumber", () => {
    it("Should return office number after using getRole()", () => {
        const test = new Manager("bob", "1", "bob@email.com", "123")
        expect(test.getOfficeNumber()).toBe("123");
    })
});

describe("Manager", () => {
    it("Should return manager after using getRole()", () => {
        const test = new Manager("Manager")
        expect(test.getRole()).toBe("Manager");
    })
});