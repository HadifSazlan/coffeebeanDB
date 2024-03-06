import pool from '../../db.js';
import { getSuppliersQuery, addSupplierQuery, getSupplierQuery, updateSupplierQuery } from './queries.js';

const getSuppliers = (req, res) => {
    pool.query(getSuppliersQuery, (error, results) => {
        if (error) {
            return res.status(500).json({ msg: error });
        } else {
            res.status(200).json(results.rows);
        }
    })
};

const addSupplier = (req, res) => {
    const supplier = req.body;
    const { suppliername, contactemail, contactphone } = supplier;

    pool.query(addSupplierQuery, [ suppliername, contactemail, contactphone ], (error, results) => {
        if (error) {
            return res.status(500).json({ msg: error});
        } else {
            res.status(201).json(supplier);
        }
    })
};

const getSupplier = (req, res) => {
    const id = req.params;
    const { supplierid } = id;

    pool.query(getSupplierQuery, [ supplierid ], (error, results) => {
        if (error) {
            return res.status(500).json({ msg: error});
        } else {
            if (results.rows.length === 0) {
                return res.status(404).send({ msg: `Supplier id no.${ supplierid } not found` });
            } else {
            res.status(200).json(results.rows);
            }
        }
    })
};

const updateSupplier = (req, res) => {
    const { supplierid } = req.params;
    const { suppliername, contactemail, contactphone } = req.body;

    pool.query(updateSupplierQuery, [ suppliername, contactemail, contactphone, supplierid ], (error, results) => {
        if (error) {
            return res.status(500).json({ msg: error });
        } else {
            res.status(200).send(`Supplier id no.${supplierid} updated successfully`);
        }
    })
}

export { getSuppliers, addSupplier, getSupplier, updateSupplier };