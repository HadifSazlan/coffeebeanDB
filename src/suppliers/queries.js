const getSuppliersQuery = 'SELECT * FROM suppliers';

const addSupplierQuery = 'INSERT INTO suppliers (suppliername, contactemail, contactphone) VALUES ($1, $2, $3)';

const getSupplierQuery = 'SELECT * FROM suppliers WHERE supplierid = $1';

const updateSupplierQuery = 'UPDATE suppliers SET suppliername = $1, contactemail = $2, contactphone = $3 WHERE supplierid = $4';

export { getSuppliersQuery, addSupplierQuery, getSupplierQuery, updateSupplierQuery };