import { Request, Response } from 'express';
import {
  findManyBeans,
  addBean,
  findOneBean,
  updateBean,
  deleteBean,
} from './queries.js';

import {addBeanRequest, updateBeanRequest} from './types.js'

const index = async (req: Request, res: Response) => {
  try {
      const beans = await findManyBeans()
      res.status(200).json(beans);
  } catch (e:any) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const store = async (req: Request, res: Response) => {
  const {name, slug, origin, process, altitude} = req.body;

  const data: addBeanRequest = {name, slug, origin, process, altitude}
  try {
      const bean = await addBean(data)
      res.status(200).json(bean);
  } catch (e:any) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const fetch = async (req: Request, res: Response) => {
  const {id} = req.params;

  try{
      const bean = await findOneBean(parseInt(id))
      res.status(200).json(bean);
  } catch (e:any) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

const update = async (req: Request,res: Response) => {
  const {id} = req.params;
  const {origin, process, altitude} = req.body;

  const data: updateBeanRequest = {origin, process, altitude}
  try {
      const bean = await updateBean(data, parseInt(id))
      res.status(200).json(bean)
  } catch (e:any) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const remove = async (req: Request, res: Response) => {
  const {id} = req.params;

  try{
      const bean = await deleteBean(parseInt(id))
      res.status(200).json(bean);
  } catch (e:any) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

export {index, store, fetch, update, remove};
