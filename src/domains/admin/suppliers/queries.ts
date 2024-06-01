import {db} from "../../../config/db";
import {suppliers} from "../../../db/schema/suppliers";
import {eq} from "drizzle-orm";
import {addSupplierRequest, updateSupplierRequest} from "./types";

const findManySuppliers = async () => {
    return db.select().from(suppliers);
};


const addSupplier = async (data: addSupplierRequest) => {
    return db.insert(suppliers).values(data).returning();
};

const findOneSupplier = async (id: number) => {
    return db.select().from(suppliers).where(eq(suppliers.id, id));
};

const updateSupplier = async (data: updateSupplierRequest, id: number) => {
    return db.update(suppliers).set(data).where(eq(suppliers.id, id)).returning();
}

const deleteSupplier = async (id: number) => {
    return db.delete(suppliers).where(eq(suppliers.id, id)).returning();
}

export {findManySuppliers, addSupplier, findOneSupplier, updateSupplier, deleteSupplier};