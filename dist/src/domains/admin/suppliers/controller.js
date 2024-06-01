import { findManySuppliers, addSupplier, findOneSupplier, updateSupplier, deleteSupplier, } from './queries.js';
const index = async (req, res) => {
    try {
        const suppliers = await findManySuppliers();
        res.status(200).json(suppliers);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const store = async (req, res) => {
    const { name, slug, email, phone } = req.body;
    const data = { name, slug, email, phone };
    try {
        const supplier = await addSupplier(data);
        res.status(200).json(supplier);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const fetch = async (req, res) => {
    const { id } = req.params;
    try {
        const supplier = await findOneSupplier(parseInt(id));
        res.status(200).json(supplier);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || ' Internal server error' });
    }
};
const update = async (req, res) => {
    const { id } = req.params;
    const { name, slug, email, phone } = req.body;
    const data = { name, slug, email, phone };
    try {
        const supplier = await updateSupplier(data, parseInt(id));
        res.status(200).json(supplier);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const supplier = await deleteSupplier(parseInt(id));
        res.status(200).json(supplier);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || ' Internal server error' });
    }
};
export { index, store, fetch, update, remove };
