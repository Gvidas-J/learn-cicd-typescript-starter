import { expect, test } from "vitest";
import { getAPIKey } from "../api/auth.js";
import { IncomingHttpHeaders } from "http";

const wrong: IncomingHttpHeaders = {
  authorization: "alpha bravo charlie delta",
};
const wronglength: IncomingHttpHeaders = { authorization: "alpha" };
const working: IncomingHttpHeaders = {
  authorization: "ApiKey password123 charlie delta",
};

test("working", () => {
  expect(getAPIKey(working)).toBe("password123");
});

test("wrong length", () => {
  expect(getAPIKey(wronglength)).toBeFalsy();
});

test("wrong", () => {
  expect(getAPIKey(wrong)).toBeFalsy();
});
