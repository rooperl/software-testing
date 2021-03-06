const chai = require('chai');
const countBy = require('../lib/src/countBy.js').default;

const assert = chai.assert;
const expect = chai.expect;

describe("Object Test Suite", () => {
    describe("Function: CountBy", () => {
        it("Should count by number", () => {
            expect(countBy([{ a: 1 }, { a: 0 }, { a: 1 }], u => u.a)).to.eql({ 1: 2, 0: 1 });
        });
        it("Should count by string", () => {
            expect(countBy([{ a: 'a' }, { a: 'b' }, { a: 'c' }], u => u.a)).to.eql({ a: 1, b: 2, c: 3 });
        });
        it("Should count by empty", () => {
            expect(countBy([], u => u.a)).to.eql({});
        });
    });
});