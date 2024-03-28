import {
  findManyRoasts,
  addRoast,
  findOneRoast,
  updateRoast,
  deleteRoast,
} from './queries.js';

const index = async (req, res) => {
  try {
      const roasts = await findManyRoasts()
      res.status(200).json(roasts);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const store = async (req, res) => {
  const {level, body, aroma, brewMethod, beanId} = req.body;

  const data = {level, body, aroma, brewMethod, beanId}
  try {
      const roast = await addRoast(data)
      res.status(200).json(roast);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const fetch = async (req, res) => {
  const {id} = req.params;

  try{
      const roast = await findOneRoast(id)
      res.status(200).json(roast);
  } catch (e) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

const update = async (req,res) => {
  const {id} = req.params;
  const {level, body, aroma, brewMethod, beanId} = req.body;

  const data = {level, body, aroma, brewMethod, beanId}
  try {
      const roast = await updateRoast(data, id)
      res.status(200).json(roast)
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;

  try{
      const roast = await deleteRoast(id)
      res.status(200).json(roast);
  } catch (e) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

export {index, store, fetch, update, remove};