import {db} from "../../../config/db.js";
import {beanology} from "../../../db/schema/beanology.js";
import {eq} from "drizzle-orm";

const findManyBeans = async () => {
    return db.select().from(beanology);
};

const addBean = async (data) => {
    return db.insert(beanology).values(data).returning();
};

const findOneBean = async (id) => {
    return db.select().from(beanology).where(eq(beanology.id, id));
};

const updateBean = async (data, id) => {
    return db.update(beanology).set(data).where(eq(beanology.id, id)).returning();
}

const deleteBean = async (id) => {
    return db.delete(beanology).where(eq(beanology.id, id)).returning();
}

export {findManyBeans, addBean, findOneBean, updateBean, deleteBean};