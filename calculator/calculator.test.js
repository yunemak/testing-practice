import { calculator } from "./calculator";

test("Sum", () => {
	expect(calculator.add(1, 2)).toBe(3);
});

test("Subtract", () => {
	expect(calculator.subtract(1, 2)).toBe(-1);
});

test("Multiply", () => {
	expect(calculator.multiply(4, 5)).toBe(20);
});

test("Divide by zero", () => {
	expect(() => calculator.divide(4, 0)).toThrow();
});

test("Divide", () => {
	expect(calculator.divide(4, 3)).toBe(4 / 3);
});
