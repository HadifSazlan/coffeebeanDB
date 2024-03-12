const getRoastersQuery = 'SELECT * FROM roasters';

const addRoasterQuery = 'INSERT INTO roasters (roastername, contactemail, contactphone, beanid) VALUES ($1, $2, $3, $4)';

const getRoasterQuery = 'SELECT * FROM roasters WHERE roasterid = $1';

const updateRoasterQuery = 'UPDATE roasters SET roastername = $1, contactemail = $2, contactphone = $3, beanid = $4 WHERE roasterid = $5';

const deleteRoasterQuery = 'DELETE FROM roasters WHERE roasterid = $1';

export { getRoastersQuery, addRoasterQuery, getRoasterQuery, updateRoasterQuery, deleteRoasterQuery };