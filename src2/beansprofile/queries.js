const getBeansQuery = 'SELECT * FROM beansprofile';

const addBeanQuery = 'INSERT INTO beansprofile (beanname, origin, processingmethod, flavorprofile, supplierid) VALUES ($1, $2, $3, $4, $5)';

const getBeanQuery = 'SELECT * FROM beansprofile WHERE beanid = $1';

const updateBeanQuery = 'UPDATE beansprofile SET beanname = $1, origin = $2, processingmethod = $3, flavorprofile = $4, supplierid = $5 WHERE beanid = $6';

const deleteBeanQuery = 'DELETE FROM beansprofile WHERE beanid = $1';

export { getBeansQuery, addBeanQuery, getBeanQuery, deleteBeanQuery, updateBeanQuery };