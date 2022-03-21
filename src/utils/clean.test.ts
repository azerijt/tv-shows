import { clean } from "./clean";

test("clean removes all <p> and </p> tags from summary text", () => {
  expect(clean("World<p>")).toBe("World");
  expect(clean("Ric</p>hard")).toBe("Richard");
  expect(clean("Academy</p> Scholars")).toBe("Academy Scholars");
});
