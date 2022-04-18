import { Pool } from "pg";
import { Service } from "typedi";
import pool from "./pool";

@Service()
export default class PostRepository {
  private readonly pool: Pool;

  constructor() {
    console.log("Create PostRepository");
    this.pool = pool;
  }

  async save(title: string, description: string) {
    console.log("Call save in PostRepository");
    const client = await this.pool.connect();
    const result = await client.query(
      "INSERT INTO post(title, description) VALUES ($1, $2) RETURNING id",
      [title, description]
    );
    return result.rows[0];
  }
}
