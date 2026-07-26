import { capitalize } from "./capitalize.js";

test("All letters lower case", () => {
	expect(capitalize("den")).toBe("DEN");
});
