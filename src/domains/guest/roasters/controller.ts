import { Request, Response } from 'express';
import {
    findMany,
    findBySlug
} from './queries';

const index = async (req: Request, res: Response) => {
    try {
        const roasters = await findMany()
        res.status(200).json(roasters);
    } catch (e:any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const show = async (req: Request, res: Response) => {
    const {slug} = req.params;

    try {
        const roaster = await findBySlug(slug)
        res.status(200).json(roaster);
    } catch (e:any) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};


export {index, show};
