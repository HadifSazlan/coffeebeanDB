import {
    findMany,
    findOne
} from './queries.js';

const index = async (req, res) => {
    try {
        const roasters = await findMany()
        res.status(200).json(roasters);
    } catch (e) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const show = async (req, res) => {
    const {id} = req.params;

    try {
        const roaster = await findOne(id)
        res.status(200).json(roaster);
    } catch (e) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};


export {index, show};
