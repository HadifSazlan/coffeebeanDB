import {db} from "../../../config/db.js";
import {beanology} from "../../../db/schema/beanology.js";
import {eq} from "drizzle-orm";

const findMany = async () => {
    return await db.query.beanology.findMany({
        with: {
            roaster: true,
            supplier: true
        }
    })
};

const findById = async (id) => {

    return await db.query.beanology.findFirst({
        where: eq(beanology.id, id),
        with: {
            roaster: true,
            supplier: true
        }
    })
};

export {findMany, findById}