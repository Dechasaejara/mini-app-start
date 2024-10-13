
import { pgTable, integer, text, boolean } from 'drizzle-orm/pg-core';


export const Users = pgTable('users', {
    id: integer('id').primaryKey(),
    first_name: text('first_name').notNull(),
    last_name: text('last_name'),
    username: text('username'),
    language_code: text('language_code'), 
    is_premium: boolean('is_premium'),
});



export type UserDTO = typeof Users.$inferSelect;
export type NewUserDTO = typeof Users.$inferInsert;
