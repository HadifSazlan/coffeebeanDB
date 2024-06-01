import {db} from "../../../config/db";
import {roasters} from "../../../db/schema/roasters";
import {eq} from "drizzle-orm"

const findMany = async () => {
    return await db.query.roasters.findMany({
        with: {
            beans: true
        },
    });
};

const findBySlug = async (slug: string) => {
    return await db.query.roasters.findFirst({
        where: eq(roasters.slug, slug),
        with: {
            beans: true,
        },
    });
};

export {findMany, findBySlug};