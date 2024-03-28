import {
  findManyBeans,
  addBean,
  findOneBean,
  updateBean,
  deleteBean,
} from './queries.js';

const index = async (req, res) => {
  try {
      const beans = await findManyBeans()
      res.status(200).json(beans);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const store = async (req, res) => {
  const {origin, flavor, process, altitude} = req.body;

  const data = {origin, flavor, process, altitude}
  try {
      const bean = await addBean(data)
      res.status(200).json(bean);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const fetch = async (req, res) => {
  const {id} = req.params;

  try{
      const bean = await findOneBean(id)
      res.status(200).json(bean);
  } catch (e) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

const update = async (req,res) => {
  const {id} = req.params;
  const {origin, flavor, process, altitude} = req.body;

  const data = {origin, flavor, process, altitude}
  try {
      const bean = await updateBean(data, id)
      res.status(200).json(bean)
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};

const remove = async (req, res) => {
  const {id} = req.params;

  try{
      const bean = await deleteBean(id)
      res.status(200).json(bean);
  } catch (e) {
      res.status(500).json({msg: e.message || ' Internal server error'});
  }
};

export {index, store, fetch, update, remove};
