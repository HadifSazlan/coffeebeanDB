import { pgTable, serial, varchar, timestamp, integer } from "drizzle-orm/pg-core";
import { roasters } from "./roasters.js";
import { suppliers } from "./suppliers.js";
import { beanFlavours } from "./bean_flavours.js";
import { relations } from "drizzle-orm";
export const beans = pgTable('beans', {
    id: serial('id').primaryKey(),
    roaster_id: integer('roaster_id'),
    supplier_id: integer('supplier_id'),
    name: varchar('name', { length: 120 }).notNull(),
    slug: varchar('slug', { length: 250 }).notNull().unique(),
    roast_profile: varchar('roast_profile', { length: 25 }),
    brew_type: varchar('brew_type', { length: 25 }),
    origin: varchar('origin', { length: 50 }),
    process: varchar('process', { length: 50 }),
    altitude: varchar('altitude', { length: 70 }),
    link: varchar('link', { length: 250 }),
    created_at: timestamp('created_at', { precision: 6, withTimezone: true }).defaultNow(),
    updated_at: timestamp('updated_at', { precision: 6, withTimezone: true })
});
export const beansRelations = relations(beans, ({ one, many }) => ({
    roaster: one(roasters, {
        fields: [beans.roaster_id],
        references: [roasters.id]
    }),
    supplier: one(suppliers, {
        fields: [beans.roaster_id],
        references: [suppliers.id]
    }),
    beanFlavours: many(beanFlavours),
}));
