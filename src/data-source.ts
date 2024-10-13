import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User.js"

const AppDataSource = new DataSource({
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "password",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: ["./migration/**/*.{js,ts}"],
    subscribers: [],
})

await AppDataSource.initialize()
export {AppDataSource}