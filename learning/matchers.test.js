// verify matchers in JEST framework

describe("matchers suite",() => {
	it.only('toBe test', () => {
		expect(12).toBe(12);
	});
	
	it('toEqual test', () => {
		const data = {one:1};
		data['two'] = 2;
		const array = [1,4,7];
		expect(data).toEqual({one:1, two:2});
		expect(array).toEqual([1,4,7]);
		expect(array).not.toEqual([1,4]);
	});
	
	it('not toBe test', () => {
		expect(786).not.toBe(0);
	});
});