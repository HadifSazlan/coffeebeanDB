import { Request, Response } from 'express';
import {
    findManySuppliers,
    addSupplier,
    findOneSupplier,
    updateSupplier,
    deleteSupplier,
} from './queries';
import {addSupplierRequest, updateSupplierRequest} from "./types";


const index = async (req: Request, res: Response) => {
    try {
        const suppliers = await findManySuppliers()
        res.status(200).json(suppliers);
    } catch (e:any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const store = async (req: Request, res: Response) => {
    const {name, slug, email, phone} = req.body;

    const data : addSupplierRequest = {name, slug, email, phone}

    try {
        const supplier = await addSupplier(data)
        res.status(200).json(supplier);
    } catch (e:any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const fetch = async (req: Request, res: Response) => {
    const {id} = req.params;

    try{
        const supplier = await findOneSupplier(parseInt(id))
        res.status(200).json(supplier);
    } catch (e:any) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};

const update = async (req: Request,res: Response) => {
    const {id} = req.params;
    const {name, slug, email, phone} = req.body;

    const data : updateSupplierRequest = {name, slug, email, phone}

    try {
        const supplier = await updateSupplier(data, parseInt(id))
        res.status(200).json(supplier)
    } catch (e:any) {
        res.status(500).json({msg: e.message || 'Internal server error'});
    }
};

const remove = async (req: Request, res: Response) => {
    const {id} = req.params;

    try{
        const supplier = await deleteSupplier(parseInt(id))
        res.status(200).json(supplier);
    } catch (e:any) {
        res.status(500).json({msg: e.message || ' Internal server error'});
    }
};

export {index, store, fetch, update, remove};