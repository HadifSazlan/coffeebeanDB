import {db} from "../../config/db.js";
import {suppliers} from "../../db/schema/suppliers.js";
import {eq} from "drizzle-orm";

const findManySuppliers = async () => {
    return db.select().from(suppliers);
};

const addSupplier = async (data) => {
    return db.insert(suppliers).values(data).returning();
};

const findOneSupplier = async (id) => {
    return db.select().from(suppliers).where(eq(suppliers.id, id));
};

const updateSupplier = async (data, id) => {
    return db.update(suppliers).set(data).where(eq(suppliers.id, id)).returning();
}

const deleteSupplier = async (id) => {
    return db.delete(suppliers).where(eq(suppliers.id, id)).returning();
}

export {findManySuppliers, addSupplier, findOneSupplier, updateSupplier, deleteSupplier};