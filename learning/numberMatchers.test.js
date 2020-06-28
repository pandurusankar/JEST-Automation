// verify matchers in JEST framework

describe("matchers suite",() => {
	it('toBeGreaterThan test', () => {
		//console.log("toBeGreaterThan test - it");
		expect(13).toBeGreaterThan(12);
		expect(12).toBeGreaterThanOrEqual(12);
	});
	
	it('toBeLessThan test', () => {
		//console.log("toBeLessThan test - it");
		const numberValue = 45;
		expect(10).toBeLessThan(12);
		expect(10).toBeLessThanOrEqual(12);
	});
	
	test('adding floating point numbers', () => {
		//console.log("floating number test - test");
		const value = 0.1 + 0.2;
		//expect(value).toBe(0.3);  This won't work because of rounding error
		expect(value).toBeCloseTo(0.3); // This works.
	});

});