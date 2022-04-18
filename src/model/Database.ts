import { Pool } from "pg";
import { Service } from "typedi";

@Service()
export default class Database {
  private readonly pool: Pool;

  private readonly opts = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT) || 5432,
  };

  constructor() {
    console.log("Create Database Container");
    this.pool = new Pool(this.opts);
  }

  getPool() {
    console.log("Get Pool");
    return this.pool;
  }
}
