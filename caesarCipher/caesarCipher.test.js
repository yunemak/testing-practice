import { caesarCipher } from "./caesarCipher";

test("Basic Case", () => {
	expect(caesarCipher("abc", 0)).toBe("abc");
});
