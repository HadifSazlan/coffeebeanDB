import {db} from "../../config/db.js";
import {beanology} from "../../db/schema/beanology.js";
import {roastology} from "../../db/schema/roastology.js";
import {roasters} from "../../db/schema/roasters.js";
import {suppliers} from "../../db/schema/suppliers.js";
import {eq} from "drizzle-orm";

export const summary = async () => {
    return db.select({
        beanId: beanology.id,
        origin: beanology.origin,
        flavor: beanology.flavor,
        process: beanology.process,
        altitude: beanology.altitude,
        roastId: roastology.id,
        roastLevel: roastology.level,
        body: roastology.body,
        aroma: roastology.aroma,
        brewMethod: roastology.brewMethod,
        roasterId: roasters.id,
        roaster: roasters.name,
        supplierId: suppliers.id,
        supplier: suppliers.name
    })
    .from(beanology)
    .innerJoin(roastology, eq(beanology.id, roastology.beanId))
    .innerJoin(roasters, eq(beanology.id, roasters.beanId))
    .innerJoin(suppliers, eq(beanology.id, suppliers.beanId));
};