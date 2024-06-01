import { findMany, findBySlug } from './queries.js';
const index = async (req, res) => {
    try {
        const roasters = await findMany();
        res.status(200).json(roasters);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || 'Internal server error' });
    }
};
const show = async (req, res) => {
    const { slug } = req.params;
    try {
        const roaster = await findBySlug(slug);
        res.status(200).json(roaster);
    }
    catch (e) {
        res.status(500).json({ msg: e.message || ' Internal server error' });
    }
};
export { index, show };
