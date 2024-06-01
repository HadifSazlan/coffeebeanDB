import {db} from "../../../config/db";
import {roasters} from "../../../db/schema/roasters";
import {eq} from "drizzle-orm";

const findManyRoasters = async () => {
    return db.select().from(roasters);
};

const addRoaster = async (data: addRoasterRequest) => {
    return db.insert(roasters).values(data).returning();
};

const findOneRoaster = async (id:number) => {
    return db.select().from(roasters).where(eq(roasters.id, id));
};

const updateRoaster = async (data:updateRoasterRequest, id:number) => {
    return db.update(roasters).set(data).where(eq(roasters.id, id)).returning();
}

const deleteRoaster = async (id:number) => {
    return db.delete(roasters).where(eq(roasters.id, id)).returning();
}

export {findManyRoasters, addRoaster, findOneRoaster, updateRoaster, deleteRoaster};