const Intern = require("../lib/Intern")

describe("school", () => {
    it("Should return school after using getRole()", () => {
        const test = new Intern("Tim", "5", "Tim@gmail.com", "John Madden School")
        expect(test.getSchool()).toBe("John Madden School");
    })
});

describe("Intern", () => {
    it("Should return Intern after using getRole()", () => {
        const test = new Intern("Intern")
        expect(test.getRole()).toBe("Intern");
    })
});