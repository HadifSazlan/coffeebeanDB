import {
    findManySuppliers,
    addSupplier,
    getSupplierQuery,
    updateSupplierQuery,
    deleteSupplierQuery,
} from './queries.js';

const index = async (req, res) => {
    try {
        const suppliers = await findManySuppliers()
        res.status(200).json(suppliers);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const store = async (req, res) => {
    const {name, email, phone} = req.body;

    const data = {name, email, phone}
    try {
        const supplier = await addSupplier(data)
        res.status(200).json(supplier);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const getSupplier = (req, res) => {
    const {supplierid} = req.params;

    pool.query(getSupplierQuery, [supplierid], (error, results) => {
        if (error) {
            return res.status(500).json({msg: error});
        } else {
            if (results.rows.length === 0) {
                return res.status(404).send(`msg: SupplierID: ${supplierid} not found`);
            } else {
                res.status(200).json(results.rows);
            }
        }
    })
};

const updateSupplier = (req, res) => {
    const {supplierid} = req.params;
    const {suppliername, contactemail, contactphone} = req.body;

    pool.query(updateSupplierQuery, [suppliername, contactemail, contactphone, supplierid], (error, results) => {
        if (error) {
            return res.status(500).json({msg: error});
        } else {
            res.status(200).send(`SupplierID: ${supplierid} updated`);
        }
    })
};

const deleteSupplier = (req, res) => {
    const {supplierid} = req.params;

    pool.query(deleteSupplierQuery, [supplierid], (error, results) => {
        if (error) {
            return res.status(500).json({msg: error});
        } else {
            res.status(200).send(`SupplierID: ${supplierid} deleted`);
        }
    })
};

export {index, store, getSupplier, updateSupplier, deleteSupplier};