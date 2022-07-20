import Tax from '../index';

describe("test", () => {
    test("test", () => {
        const num = new Tax();
        expect(num.taxSum(144, 144, 12)).toEqual(4896);
    });
});