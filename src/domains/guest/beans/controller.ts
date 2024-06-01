import { Request, Response } from 'express';
import {findMany, findById} from './queries.js';

const index = async (req: Request, res: Response) => {
    try {
        const relation = await findMany()
        res.status(200).json(relation);
    } catch (e:any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const show = async (req: Request, res: Response) => {

    const {id} = req.params;

    try {
        const relation = await findById(parseInt(id))
        res.status(200).json(relation);
    } catch (e:any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
}

export {index, show}