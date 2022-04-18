import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

const opts = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: Number(process.env.DB_PORT) || 5432,
};

const pool = new Pool(opts);
console.log("Create pool");

export default pool;
