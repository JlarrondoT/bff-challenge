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
    .get(
        '/user/:userId/restrictions/',
        mercadoLibreController.getUserRestrictions
    )
    .get('/user/:userId/purchases/', mercadoLibreController.getUserPurchases)
    .get('/level/:id', mercadoLibreController.getLevel)
    .get('/shipment/:shipmentId', mercadoLibreController.getShipment)
    .get('/payment/:paymentId', mercadoLibreController.getPayment);

module.exports = router;
