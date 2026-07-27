import { capitalize } from "./capitalize.js";

test("All letters lower case", () => {
	expect(capitalize("den")).toBe("Den");
});

test("Nothing", () => {
	expect(capitalize("")).toBe("");
});

test("All letters capital", () => {
	expect(capitalize("ANKARA")).toBe("ANKARA");
});