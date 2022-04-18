import { Pool } from "pg";
import { Service } from "typedi";
import pool from "./pool";

@Service()
export default class UserRepository {
  private readonly pool: Pool;

  constructor() {
    console.log("Create UserRepository");
    this.pool = pool;
  }

  async save(email: string, age: number) {
    console.log("Call save in UserRepository");
    const client = await this.pool.connect();
    const result = await client.query(
      "INSERT INTO users(email, age) VALUES ($1, $2) RETURNING id",
      [email, age]
    );
    return result.rows[0];
  }
}
