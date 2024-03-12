import pool from '../../db.js';

import { getBeansQuery, addBeanQuery, getBeanQuery, updateBeanQuery, deleteBeanQuery } from './queries.js';

const getBeans = (req, res) => {
  pool.query(getBeansQuery, (error, results) => {
    if (error) {
      return res.status(500).json({ msg: error });
    } else {
      res.status(200).json(results.rows);
    }
  })
};

const addBean = (req, res) => {
  const { beanname, origin, processingmethod, flavorprofile, supplierid } = req.body;

    pool.query(addBeanQuery, [ beanname, origin, processingmethod, flavorprofile, supplierid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(201).json(req.body);
      }
    })
};

const getBean = (req, res) => {
  const { beanid } = req.params;

    pool.query(getBeanQuery, [ beanid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(200).json(results.rows);
      }
    })
};

const updateBean = (req, res) => {
  const { beanid } = req.params;
  const { beanname, origin, processingmethod, flavorprofile, supplierid } = req.body;

    pool.query(updateBeanQuery, [ beanname, origin, processingmethod, flavorprofile, supplierid, beanid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(200).send(`BeanID: ${beanid} updated`);
      }
    })
};

const deleteBean = (req, res) => {
  const { beanid } = req.params;

    pool.query(deleteBeanQuery, [ beanid ], (error, results) => {
      if (error) {
        return res.status(500).json({ msg: error });
      } else {
        res.status(200).send(`BeanID: ${beanid} deleted`);
      }
    })
};

export { getBeans, addBean, getBean, updateBean, deleteBean };