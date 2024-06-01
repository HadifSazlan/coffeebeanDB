import {pgTable, serial, varchar} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {beanFlavours} from "./bean_flavours.js";

export const flavours = pgTable('flavours', {
    id: serial('id').primaryKey(),
    name: varchar('name', {length: 70}).notNull(),
})


export const flavoursRelations = relations(flavours, ({ many}) => ({
    beanFlavours: many(beanFlavours),
}));