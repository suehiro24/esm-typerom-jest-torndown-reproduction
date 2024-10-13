import { AppDataSource } from "../src/data-source.js";
import { User } from "../src/entity/User.js";
import { destroyDataSource, dropDatabase, runMigrations } from "./setup.js";


describe("User Insertion", () => {
  beforeEach(async () => await runMigrations());
  afterEach(async () => await dropDatabase());
  afterAll(async () => await destroyDataSource());

  it("should insert a new user into the database", async () => {
    const user = new User();
    user.firstName = "John";
    user.lastName = "Doe";
    user.age = 30;

    const savedUser = await AppDataSource.manager.save(user);

    expect(savedUser.id).toBeDefined();
    expect(savedUser.firstName).toBe("John");
    expect(savedUser.lastName).toBe("Doe");
    expect(savedUser.age).toBe(30);
  });
});
