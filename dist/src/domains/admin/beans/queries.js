import { db } from "../../../config/db.js";
import { beans } from "../../../db/schema/beans.js";
import { eq } from "drizzle-orm";
const findManyBeans = async () => {
    return db.select().from(beans);
};
const addBean = async (data) => {
    return db.insert(beans).values(data).returning();
};
const findOneBean = async (id) => {
    return db.select().from(beans).where(eq(beans.id, id));
};
const updateBean = async (data, id) => {
    return db.update(beans).set(data).where(eq(beans.id, id)).returning();
};
const deleteBean = async (id) => {
    return db.delete(beans).where(eq(beans.id, id)).returning();
};
export { findManyBeans, addBean, findOneBean, updateBean, deleteBean };
