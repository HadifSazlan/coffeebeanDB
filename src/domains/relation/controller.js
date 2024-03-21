import {summary} from './queries.js';

export const index = async (req, res) => {
  try {
      const relation = await summary()
      res.status(200).json(relation);
  } catch (e) {
      res.status(500).json({msg: e.message || 'Internal server error'});
  }
};