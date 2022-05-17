const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

module.exports = () => {
    router.get('/', homeController.mostarTrabajos);

    return router;
}