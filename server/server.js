const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const getPlants = require('./routers/getPlants');
const cors = require = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false}));
// app.use(bodyParser.json());


// statically serve everything in the build folder on the route '/build'
// app.use('/build', express.static(path.join(__dirname, '../build')));
app.use(express.static(path.resolve(__dirname, '../src')))

// app.use(bodyParser.json());

app.use('/step2', getPlants);


app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  /**
   * start server
   */
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;