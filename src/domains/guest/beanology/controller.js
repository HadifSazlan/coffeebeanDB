import {findMany, findOne} from './queries.js';

const index = async (req, res) => {
    try {
        const relation = await findMany()
        res.status(200).json(relation);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const show = async (req, res) => {

    const {id} = req.params;

    try {
        const relation = await findOne(id)
        res.status(200).json(relation);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
}

export {index, show}