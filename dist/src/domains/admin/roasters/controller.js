import { findManyRoasters, addRoaster, findOneRoaster, updateRoaster, deleteRoaster, } from './queries.js';
const index = async (req, res) => {
    try {
        const roasters = await findManyRoasters();
        res.status(200).json(roasters);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const store = async (req, res) => {
    const { name, slug, email, phone } = req.body;
    const data = { name, slug, email, phone };
    try {
        const roaster = await addRoaster(data);
        res.status(200).json(roaster);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const fetch = async (req, res) => {
    const { id } = req.params;
    try {
        const roaster = await findOneRoaster(parseInt(id));
        res.status(200).json(roaster);
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
        const roaster = await updateRoaster(data, parseInt(id));
        res.status(200).json(roaster);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const roaster = await deleteRoaster(parseInt(id));
        res.status(200).json(roaster);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || ' Internal server error' });
    }
};
export { index, store, fetch, update, remove };
