const reverseInt = require('../reverseint.js');

describe("testing integer reveser",()=>{
    test("testing with 15",()=>{
        expect(reverseInt(15)).toBe(51);
    })
    test("testing with 101",()=>{
        expect(reverseInt(101)).toBe(101);
    })
    test("testing with 100",()=>{
        expect(reverseInt(100)).toBe(1);
    })
    test("testing with -15",()=>{
        expect(reverseInt(-15)).toBe(-51);
    })
});