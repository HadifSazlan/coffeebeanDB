import {db} from "../../../config/db.js";
import {roasters} from "../../../db/schema/roasters.js";
import {eq} from "drizzle-orm";
import {beanology} from "../../../db/schema/beanology.js";

const findMany = async () => {
    return db.select()
        .from(roasters)
        .leftJoin(beanology, eq(beanology.roaster_id, roasters.id));
};

const findOne = async (id) => {
    return db.select()
        .from(roasters)
        .where(eq(roasters.id, id))
        .leftJoin(beanology, eq(beanology.roaster_id, roasters.id));
};

export {findMany, findOne};