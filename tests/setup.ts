import { AppDataSource } from "../src/data-source.js";

if (process.env.NODE_ENV !== "test") {
  throw new Error("NODE_ENV is not test");
}

export async function runMigrations() {
  await AppDataSource.runMigrations();
}

export async function dropDatabase() {
  await AppDataSource.dropDatabase();
}

export async function destroyDataSource() {
  await AppDataSource.destroy();
}
