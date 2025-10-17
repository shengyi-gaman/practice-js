  it("should create a user with id, name, email, createdAt", () => {
    const u = createUser("Ana", "ana@example.com");
    assert.ok(u.id, "id is required");
    assert.equal(u.name, "Ana");
    assert.equal(u.email, "ana@example.com");
    assert.ok(u.createdAt, "createdAt is required");
+   assert.ok(u.role, "role is required"); // 👈 esto hará fallar el test
  });

