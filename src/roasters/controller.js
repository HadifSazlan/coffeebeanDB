/*
import pool from '../../db.js';

import { getRoastersQuery, addRoasterQuery, getRoasterQuery, updateRoasterQuery, deleteRoasterQuery } from './queries.js';

const getRoasters = (req, res) => {
  pool.query(getRoastersQuery, (error, results) => {
    if (error) {
      return res.status(500).json({ msg: error });
    } else {
      res.status(200).json(results.rows);
    }
  })
};

const addRoaster = (req, res) => {
  const { roastername, contactemail, contactphone, beanid } = req.body;

    pool.query(addRoasterQuery, [ roastername, contactemail, contactphone, beanid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(201).json(req.body);
      }
    })
};

const getRoaster = (req, res) => {
  const { roasterid } = req.params;

    pool.query(getRoasterQuery, [ roasterid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(200).json(results.rows);
      }
    })
};

const updateRoaster = (req, res) => {
  const { roasterid } = req.params;
  const { roastername, contactemail, contactphone, beanid } = req.body;

    pool.query(updateRoasterQuery, [ roastername, contactemail, contactphone, beanid, roasterid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(200).send(`RoasterID: ${roasterid} updated`);
      }
    })
};

const deleteRoaster = (req, res) => {
  const { roasterid } = req.params;

    pool.query(deleteRoasterQuery, [ roasterid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(200).send(`RoasterID: ${roasterid} deleted`);
      }
    })
};

export { getRoasters, addRoaster, getRoaster, updateRoaster, deleteRoaster };*/
