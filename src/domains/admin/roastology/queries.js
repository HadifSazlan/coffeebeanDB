import {db} from "../../../config/db.js";
import {roastology} from "../../../db/schema/roastology.js";
import {eq} from "drizzle-orm";

const findManyRoasts = async () => {
    return db.select().from(roastology);
};

const addRoast = async (data) => {
    return db.insert(roastology).values(data).returning();
};

const findOneRoast = async (id) => {
    return db.select().from(roastology).where(eq(roastology.id, id));
};

const updateRoast = async (data, id) => {
    return db.update(roastology).set(data).where(eq(roastology.id, id)).returning();
}

const deleteRoast = async (id) => {
    return db.delete(roastology).where(eq(roastology.id, id)).returning();
}

export {findManyRoasts, addRoast, findOneRoast, updateRoast, deleteRoast};