const express = require('express');

const router = express.Router();

const plants = require('../controllers/plants')

router.get('/', plants.getCards, (req, res) => {
    res.status(200).json(res.locals)
});

module.exports = router;