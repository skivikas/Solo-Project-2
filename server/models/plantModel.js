const { Pool } = require('pg');

const PG_URI = 'postgres://yfpjlqnq:geMLh1J-L9a7Y3sLxd1L958MgKAFa48O@kashin.db.elephantsql.com/yfpjlqnq';

const pool = new Pool({
    connectionString: PG_URI
  });


module.exports = {
    query: (text, params, callback) => {
      // console.log('executed query', text);
        return pool.query(text, params, callback);
    }
  };