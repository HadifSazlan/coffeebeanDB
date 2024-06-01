import {pgTable, primaryKey, integer} from "drizzle-orm/pg-core";
import {relations} from "drizzle-orm";
import {beans} from "./beans.js";
import {flavours} from "./flavours.js";

export const beanFlavours = pgTable('bean_flavours', {
        beanId: integer('bean_id')
            .notNull()
            .references(() => beans.id),
        flavourId: integer('flavour_id')
            .notNull()
            .references(() => flavours.id)
    },
    (t) => ({
        pk: primaryKey({columns: [t.beanId, t.flavourId]}),
    })
)

export const beanFlavoursRelations = relations(beanFlavours, ({one}) => ({
    bean: one(beans, {
        fields: [beanFlavours.beanId],
        references: [beans.id],
    }),
    flavour: one(flavours, {
        fields: [beanFlavours.flavourId],
        references: [flavours.id],
    }),
}));