const palindrom  = require("../palindrom.js");
describe("testing palindrom with multiple inputs",()=>{
it('testing palindrom with malayalam',()=>{
    expect(palindrom("malayalam")).toBe(true);
})
it('testing palindrom with abcde',()=>{
    expect(palindrom("abcde")).toBe(false);
})
});