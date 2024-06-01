import {db} from "../../../config/db.js";
import {beans} from "../../../db/schema/beans.js";
import {eq} from "drizzle-orm";

import {addBeanRequest, updateBeanRequest} from './types.js'

const findManyBeans = async () => {
    return db.select().from(beans);
};

const addBean = async (data: addBeanRequest) => {
    return db.insert(beans).values(data).returning();
};

const findOneBean = async (id: number) => {
    return db.select().from(beans).where(eq(beans.id, id));
};

const updateBean = async (data: updateBeanRequest, id: number) => {
    return db.update(beans).set(data).where(eq(beans.id, id)).returning();
}

const deleteBean = async (id: number) => {
    return db.delete(beans).where(eq(beans.id, id)).returning();
}

export {findManyBeans, addBean, findOneBean, updateBean, deleteBean};