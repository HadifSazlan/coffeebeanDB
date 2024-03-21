import {pgTable, serial, varchar, integer, timestamp} from "drizzle-orm/pg-core";
import {beanology} from "./beanology.js";

export const roasters = pgTable('roasters', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 70}),
    email: varchar('email', {length: 50}),
    phone: varchar('phone', {length: 20}),
    beanId: integer('beanId').references(()=> beanology.id),
    created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
    updated_at: timestamp('updated_at')
});