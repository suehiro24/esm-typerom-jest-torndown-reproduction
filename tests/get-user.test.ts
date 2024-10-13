import { AppDataSource } from "../src/data-source.js";
import { User } from "../src/entity/User.js";
import { destroyDataSource, dropDatabase, runMigrations } from "./setup.js";

describe("User Retrieval", () => {
  beforeEach(async () => await runMigrations());
  afterEach(async () => await dropDatabase());
  afterAll(async () => await destroyDataSource());

  it("should retrieve a user from the database", async () => {
    const user = new User();
    user.firstName = "Jane";
    user.lastName = "Smith";
    user.age = 28;

    await AppDataSource.manager.save(user);

    const users = await AppDataSource.manager.find(User);

    expect(users.length).toBeGreaterThan(0);
    expect(users[0].firstName).toBe("Jane");
    expect(users[0].lastName).toBe("Smith");
    expect(users[0].age).toBe(28);
  });
});
