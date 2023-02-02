const Engineer = require("../lib/Engineer");

describe("github", () => {
    it("Should return github after using getRole()", () => {
        const test = new Engineer("Sam", "7", "Sam@gmail.com", "github.com")
        expect(test.getGitHub()).toBe("github.com");
    })
});

describe("Engineer", () => {
    it("Should return Engineer after using getRole()", () => {
        const test = new Engineer("Engineer")
        expect(test.getRole()).toBe("Engineer");
    })
});