import {pgTable, serial, varchar, timestamp} from "drizzle-orm/pg-core";

export const roasters = pgTable('roasters', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 70}).notNull(),
    slug: varchar('slug', {length: 70}).notNull(),
    email: varchar('email', {length: 50}),
    phone: varchar('phone', {length: 20}),
    created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
    updated_at: timestamp('updated_at')
});