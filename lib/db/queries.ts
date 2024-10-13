import { sql } from "drizzle-orm";

export const usersPromise = sql`SELECT * FROM users`;