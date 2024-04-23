import {db} from "../../../config/db.js";
import {beans} from "../../../db/schema/beans.js";
import {eq} from "drizzle-orm";

const findMany = async () => {
    return await db.query.beans.findMany({
        with: {
            roaster: true,
            supplier: true
        }
    })
};

const findById = async (id) => {

    return await db.query.beans.findFirst({
        where: eq(beans.id, id),
        with: {
            roaster: true,
            supplier: true
        }
    })
};

export {findMany, findById}