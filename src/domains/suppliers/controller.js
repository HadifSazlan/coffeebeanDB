import {
    findManySuppliers,
    addSupplier,
    findOneSupplier,
    updateSupplier,
    deleteSupplier,
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
    const {name, email, phone, beanId} = req.body;

    const data = {name, email, phone, beanId}
    try {
        const supplier = await addSupplier(data)
        res.status(200).json(supplier);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const fetch = async (req, res) => {
    const {id} = req.params;

    try{
        const supplier = await findOneSupplier(id)
        res.status(200).json(supplier);
    } catch (e) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};

const update = async (req,res) => {
    const {id} = req.params;
    const {name, email, phone, beanId} = req.body;

    const data = {name, email, phone, beanId}
    try {
        const supplier = await updateSupplier(data, id)
        res.status(200).json(supplier)
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const remove = async (req, res) => {
    const {id} = req.params;

    try{
        const supplier = await deleteSupplier(id)
        res.status(200).json(supplier);
    } catch (e) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};

export {index, store, fetch, update, remove};