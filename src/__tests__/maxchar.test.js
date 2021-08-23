const maxChar = require("../maxchar.js");

describe("testing maxchar",()=>{
    test("use case 1",()=>{
        expect(maxChar("apple")).toBe("p");
    })
    test("use case 1",()=>{
        expect(maxChar('11')).toBe('1');
    })
    test("use case 1",()=>{
        expect(maxChar('abcccccccccd')).toBe('c');
    })
})