import { Inject, Service } from "typedi";
import Database from "./Database";

@Service()
export default class UserRepository {
  constructor(@Inject() private readonly database: Database) {
    console.log("Create UserRepository");
  }

  async save(email: string, age: number) {
    console.log("Call save in UserRepository");
    const client = await this.database.getPool().connect();
    const result = await client.query(
      "INSERT INTO users(email, age) VALUES ($1, $2) RETURNING id",
      [email, age]
    );
    return result.rows[0];
  }
}
