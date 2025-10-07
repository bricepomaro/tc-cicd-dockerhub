// test/app.test.js
import { describe, it, expect } from "vitest";
import { hello } from "../src/index.js";
describe("hello()", () => {
it("retourne la valeur par défaut", () => {
expect(hello()).toBe("hello, world!");
});
it("utilise le nom passé en paramètre", () => {
expect(hello("CI")).toBe("hello, CI!");
});
});