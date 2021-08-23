// import { expect, test } from '@jest/globals';
const reverse = require('../stringreverse.js');
test("string reverse",()=>{
    expect("elppa elppa").toBe(reverse("apple apple"));
})

test("string reverse",()=>{
    expect(reverse("")).toBe("");
})