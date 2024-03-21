import {pgTable, serial, varchar, integer, timestamp} from "drizzle-orm/pg-core";
import {beanology} from "./beanology.js";

export const roastology = pgTable('roastology', {
    id: serial('id').primaryKey(),
    level: varchar('level', {length: 20}),
    body: varchar('body', {length: 20}),
    aroma: varchar('aroma', {length: 50}),
    brewMethod: varchar('brewMethod', {length: 20}),
    beanId: integer('beanId').references(()=> beanology.id),
    created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
    updated_at: timestamp('updated_at')
});