import { caesarCipher } from "./caesarCipher";

test("Basic Case", () => {
	expect(caesarCipher("abc", 0)).toBe("abc");
});

test("Basic Case", () => {
	expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Basic Case", () => {
	expect(caesarCipher("abc", 2)).toBe("cde");
});

test("Basic Case", () => {
	expect(caesarCipher("abc", 3)).toBe("def");
});
