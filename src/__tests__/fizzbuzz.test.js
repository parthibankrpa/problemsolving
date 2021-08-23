const fizzbuzz = require("../fizzbuzz.js");

describe("testing fizzbuzz",()=>{
    console.log = jest.fn();
        fizzbuzz(15);
    it('console.log the text "hello"', () => {
        expect(console.log.mock.calls[0][0]).toBe(1);
    });
    it('console.log the text "hello"', () => {
        expect(console.log.mock.calls[1][0]).toBe(2);
    });
    it('console.log the text "hello"', () => {
        expect(console.log.mock.calls[2][0]).toBe('fizz');
    });
    it('console.log the text "hello"', () => {
        expect(console.log.mock.calls[14][0]).toBe('fizzBuzz');
    });
});