import {db} from "../../../config/db.js";
import {roasters} from "../../../db/schema/roasters.js";
import {eq} from "drizzle-orm";

const findMany = async () => {
    return await db.query.roasters.findMany({
        with: {
            beans: true
        },
    });
};

const findBySlug = async (slug) => {
    return await db.query.roasters.findFirst({
        where: eq(roasters.slug, slug),
        with: {
            beans: true,
        },
    });
};

export {findMany, findBySlug};