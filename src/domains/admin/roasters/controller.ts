import {Request, Response} from 'express';
import {
    findManyRoasters,
    addRoaster,
    findOneRoaster,
    updateRoaster,
    deleteRoaster,
} from './queries.js';
import {addRoasterRequest, updateRoasterRequest} from './types.js'

const index = async (req: Request, res: Response) => {
    try {
        const roasters = await findManyRoasters()
        res.status(200).json(roasters);
    } catch (e: any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const store = async (req: Request, res: Response) => {
    const {name, slug, email, phone} = req.body;

    const data: addRoasterRequest = {name, slug, email, phone}
    try {
        const roaster = await addRoaster(data)
        res.status(200).json(roaster);
    } catch (e: any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const fetch = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const roaster = await findOneRoaster(parseInt(id))
        res.status(200).json(roaster);
    } catch (e: any) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};

const update = async (req: Request, res: Response) => {
    const {id} = req.params;
    const {name, slug, email, phone} = req.body;

    const data: updateRoasterRequest = {name, slug, email, phone}
    try {
        const roaster = await updateRoaster(data, parseInt(id))
        res.status(200).json(roaster)
    } catch (e: any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const remove = async (req: Request, res: Response) => {
    const {id} = req.params;

    try {
        const roaster = await deleteRoaster(parseInt(id))
        res.status(200).json(roaster);
    } catch (e: any) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};

export {index, store, fetch, update, remove};
