import {db} from "../../config/db.js";
import {suppliers} from "../../db/schema/suppliers.js";

const findManySuppliers = async () => {
    return db.select().from(suppliers);
};

const addSupplier = async (data) => {
    return db.insert(suppliers).values(data).returning();
};

const getSupplierQuery = 'SELECT * FROM suppliers WHERE supplierid = $1';

const updateSupplierQuery = 'UPDATE suppliers SET suppliername = $1, contactemail = $2, contactphone = $3 WHERE supplierid = $4';

const deleteSupplierQuery = 'DELETE FROM suppliers WHERE supplierid = $1';

export { findManySuppliers, addSupplier, getSupplierQuery, updateSupplierQuery, deleteSupplierQuery };