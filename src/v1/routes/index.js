const express = require('express');
const router = express.Router();

const mercadoLibreController = require('../../controllers/mercadoLibreController');

router
    .get('/health', (req, res) => {
        res.status(200).json({
            status: 'service up!',
        });
    })
    .get('/user', mercadoLibreController.getUser)
    .get('/restrictions/:userId', mercadoLibreController.getUserRestrictions)
    .get('/level/:id', mercadoLibreController.getLevel)
    .get(
        '/purchases/:userId/:limit?/:offset?',
        mercadoLibreController.getUserPurchases
    );

module.exports = router;
