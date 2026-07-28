import { reverseString } from "./reverseString";

test("General", () => {
	expect(reverseString("deneme")).toBe("emened");
});

test("General", () => {
	expect(reverseString("a")).toBe("a");
});

test("General", () => {
	expect(reverseString("reverse")).toBe("esrever");
});

test("Palindrome", () => {
	expect(reverseString("ada")).toBe("ada");
});
