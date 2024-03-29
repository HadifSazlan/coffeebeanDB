import {pgTable, serial, varchar, timestamp, integer} from "drizzle-orm/pg-core";
import {roasters} from "./roasters.js";
import {suppliers} from "./suppliers.js";

export const beanology = pgTable('beanology', {
    id: serial('id').primaryKey(),
    roaster_id: integer('roaster_id').references(() => roasters.id),
    supplier_id: integer('supplier_id').references(() => suppliers.id),
    name: varchar('name'),
    origin: varchar('origin', {length: 50}),
    flavor: varchar('flavor', {length: 70}),
    process: varchar('process', {length: 50}),
    altitude: varchar('altitude', {length: 50}),
    created_at: timestamp('created_at', {precision: 6, withTimezone: true}).defaultNow(),
    updated_at: timestamp('updated_at')
});