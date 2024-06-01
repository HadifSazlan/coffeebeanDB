import { findManyBeans, addBean, findOneBean, updateBean, deleteBean, } from './queries.js';
const index = async (req, res) => {
    try {
        const beans = await findManyBeans();
        res.status(200).json(beans);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const store = async (req, res) => {
    const { name, slug, origin, process, altitude } = req.body;
    const data = { name, slug, origin, process, altitude };
    try {
        const bean = await addBean(data);
        res.status(200).json(bean);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const fetch = async (req, res) => {
    const { id } = req.params;
    try {
        const bean = await findOneBean(parseInt(id));
        res.status(200).json(bean);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || ' Internal server error' });
    }
};
const update = async (req, res) => {
    const { id } = req.params;
    const { origin, process, altitude } = req.body;
    const data = { origin, process, altitude };
    try {
        const bean = await updateBean(data, parseInt(id));
        res.status(200).json(bean);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const bean = await deleteBean(parseInt(id));
        res.status(200).json(bean);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || ' Internal server error' });
    }
};
export { index, store, fetch, update, remove };
