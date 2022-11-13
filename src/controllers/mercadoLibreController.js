const MercadolibreService = require('../services/MercadolibreService');
const MercadolibreServiceInstance = new MercadolibreService();

const getUser = async (req, res) => {
    let status = 200;
    const user = await MercadolibreServiceInstance.getUser()
        .catch((error) => {
            status = error.status ? error.status : 500;
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.status(status).json(user);
};

const getLevel = async (req, res) => {
    let status = 200;
    const levelResult = await MercadolibreServiceInstance.getLevel(
        req.params.id
    )
        .catch((error) => {
            status = error.status ? error.status : 500;
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.status(status).json(levelResult);
};

const getUserPurchases = async (req, res) => {
    let status = 200;
    const purchases = await MercadolibreServiceInstance.getUserPurchases(
        req.params.userId,
        req.query?.limit,
        req.query?.offset
    )
        .catch((error) => {
            status = error.status ? error.status : 500;
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.status(status).json(purchases);
};

const getUserRestrictions = async (req, res) => {
    let status = 200;
    const userRestrictions =
        await MercadolibreServiceInstance.getUserRestrictions(req.params.userId)
            .catch((error) => {
                status = error.status ? error.status : 500;
                return error;
            })
            .finally((result) => {
                return result;
            });
    res.status(status).json(userRestrictions);
};

const getShipment = async (req, res) => {
    let status = 200;
    const shipment = await MercadolibreServiceInstance.getShipment(
        req.params.shipmentId
    )
        .catch((error) => {
            status = error.status ? error.status : 500;
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.status(status).json(shipment);
};

const getPayment = async (req, res) => {
    let status = 200;
    const payment = await MercadolibreServiceInstance.getPayment(
        req.params.paymentId
    )
        .catch((error) => {
            status = error.status ? error.status : 500;
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.status(status).json(payment);
};

module.exports = {
    getUser,
    getLevel,
    getUserPurchases,
    getUserRestrictions,
    getShipment,
    getPayment,
};
