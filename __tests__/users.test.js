// __test__/users.test.js
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { createUser } from "../utils/users.js";

describe("createUser", () => {
  it("should create a user with id, name, email, createdAt", () => {
    const u = createUser("Ana", "ana@example.com");
    assert.ok(u.id, "id is required");
    assert.equal(u.name, "Ana");
    assert.equal(u.email, "ana@example.com");
    assert.ok(u.createdAt, "createdAt is required");
  });
});
