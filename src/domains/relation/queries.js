import {db} from "../../config/db.js";
import {beanology} from "../../db/schema/beanology.js";
import {roasters} from "../../db/schema/roasters.js";
import {suppliers} from "../../db/schema/suppliers.js";
import {eq} from "drizzle-orm";

export const summary = async () => {
    return db.select({
        id: beanology.id,
        name: beanology.name,
        origin: beanology.origin,
        flavor: beanology.flavor,
        process: beanology.process,
        altitude: beanology.altitude,
        roasterId: roasters.id,
        roasterName: roasters.name,
        supplierId: suppliers.id,
        supplierName: suppliers.name
    })
        .from(beanology)
        .leftJoin(roasters, eq(beanology.roaster_id, roasters.id))
        .leftJoin(suppliers, eq(beanology.supplier_id, suppliers.id))
};