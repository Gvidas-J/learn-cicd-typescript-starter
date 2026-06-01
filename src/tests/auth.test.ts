import { describe, expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

// const wrong: IncomingHttpHeaders = { authorization: "alpha bravo charlie delta" };
const wrong: IncomingHttpHeaders = { authorization: "ApiKey password123 charlie delta" };
const working: IncomingHttpHeaders = { authorization: "apiKey password123 charlie delta" };

test("working", () => {
  expect(getAPIKey(working)).toBe("password123");
});
test("wrong", () => {
  expect(getAPIKey(wrong)).toBeFalsy();
});
