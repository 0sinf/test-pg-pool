import { Inject, Service } from "typedi";
import Database from "./Database";

@Service()
export default class PostRepository {
  constructor(@Inject() private readonly database: Database) {
    console.log("Create PostRepository");
  }

  async save(title: string, description: string) {
    console.log("Call save in PostRepository");
    const client = await this.database.getPool().connect();
    const result = await client.query(
      "INSERT INTO post(title, description) VALUES ($1, $2) RETURNING id",
      [title, description]
    );
    return result.rows[0];
  }
}
