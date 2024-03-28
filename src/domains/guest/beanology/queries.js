import {db} from "../../../config/db.js";
import {beanology} from "../../../db/schema/beanology.js";
import {roasters} from "../../../db/schema/roasters.js";
import {suppliers} from "../../../db/schema/suppliers.js";
import {eq} from "drizzle-orm";

const findMany = async () => {
    return db.select({
        id: beanology.id,
        name: beanology.name,
        origin: beanology.origin,
        flavor: beanology.flavor,
        process: beanology.process,
        altitude: beanology.altitude,
        roasterId: roasters.id,
        roasterName: roasters.name,
        roasterSlug: roasters.slug,
        supplierId: suppliers.id,
        supplierName: suppliers.name
    })
        .from(beanology)
        .leftJoin(roasters, eq(beanology.roaster_id, roasters.id))
        .leftJoin(suppliers, eq(beanology.supplier_id, suppliers.id))
};

const findOne = async (id) => {
    return db.select({
        id: beanology.id,
        name: beanology.name,
        origin: beanology.origin,
        flavor: beanology.flavor,
        process: beanology.process,
        altitude: beanology.altitude,
        roasterId: roasters.id,
        roasterName: roasters.name,
        roasterSlug: roasters.slug,
        supplierId: suppliers.id,
        supplierName: suppliers.name
    })
        .from(beanology)
        .where(eq(beanology.id, id))
        .leftJoin(roasters, eq(beanology.roaster_id, roasters.id))
        .leftJoin(suppliers, eq(beanology.supplier_id, suppliers.id));
};

export {findMany, findOne}