import {pgTable, serial, varchar, timestamp} from "drizzle-orm/pg-core";

export const beanology = pgTable('beanology', {
    id: serial('id').primaryKey(),
    origin: varchar('origin', {length: 50}),
    flavor: varchar('flavor', {length: 70}),
    process: varchar('process', {length: 50}),
    altitude: varchar('altitude', {length: 50}),
    created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
    updated_at: timestamp('updated_at')
});