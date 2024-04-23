import {pgTable, serial, varchar, timestamp} from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    username: varchar('username', {length: 50}).unique().notNull(),
    password: varchar('password', {length: 64}).notNull(),
    name: varchar('name', {length: 70}),
    phone: varchar('phone', {length: 20}),
    created_at: timestamp('created_at', {precision: 6, withTimezone: true}).defaultNow(),
    updated_at: timestamp('updated_at', {precision: 6, withTimezone: true})
});