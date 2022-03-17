const db = require("../models/plantModel");

const plants = {};

plants.getCards = (req, res, next) => {
    const query = `SELECT * FROM plants;`;
    db.query(query)
    .then((data) => {
        // console.log('data is ', data.rows)
        res.locals = data.rows;
        return next();
    })
    .catch((err) => {
        return next(err);
    });
}

module.exports = plants;