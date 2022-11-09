const MercadolibreService = require('../services/MercadolibreService');
const MercadolibreServiceInstance = new MercadolibreService();

const getUser = async (req, res) => {
    const user = await MercadolibreServiceInstance.getUser();
    res.status(200).json(user);
};

const getLevel = async (req, res) => {
    const levelResult = await MercadolibreServiceInstance.getLevel(
        req.params.id
    )
        .catch((error) => {
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.json(levelResult);
};

const getUserPurchases = async (req, res) => {
    const purchases = await MercadolibreServiceInstance.getUserPurchases(
        req.params.userId,
        req.params?.limit,
        req.params?.offset
    )
        .catch((error) => {
            return error;
        })
        .finally((result) => {
            return result;
        });
    res.json(purchases);
};

module.exports = { getUser, getLevel, getUserPurchases };
