import {
  findManyRoasters,
  addRoaster,
  findOneRoaster,
  updateRoaster,
  deleteRoaster,
} from './queries.js';

const index = async (req, res) => {
  try {
      const roasters = await findManyRoasters()
      res.status(200).json(roasters);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const store = async (req, res) => {
  const {name, email, phone, beanId} = req.body;

  const data = {name, email, phone, beanId}
  try {
      const roaster = await addRoaster(data)
      res.status(200).json(roaster);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const fetch = async (req, res) => {
  const {id} = req.params;

  try{
      const roaster = await findOneRoaster(id)
      res.status(200).json(roaster);
  } catch (e) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

const update = async (req,res) => {
  const {id} = req.params;
  const {name, email, phone, beanId} = req.body;

  const data = {name, email, phone, beanId}
  try {
      const roaster = await updateRoaster(data, id)
      res.status(200).json(roaster)
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;

  try{
      const roaster = await deleteRoaster(id)
      res.status(200).json(roaster);
  } catch (e) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

export {index, store, fetch, update, remove};
