const express = require('express');
const MercadolibreService = require('./src/MercadolibreService');
const MercadolibreServiceInstance = new MercadolibreService();

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        status: 200,
    });
});

app.get('/user', async (req, res) => {
    const user = await MercadolibreServiceInstance.getUser();
    res.status(200).json(user);
});

app.get('/level/:id', async (req, res) => {
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
});

app.get('/purchases/:userId/:limit?/:offset?', async (req, res) => {
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
});

app.listen(PORT, (error) => {
    if (!error) {
        console.log(
            'Server is Successfully Running, and App is listening on port ' +
                PORT
        );
    } else console.log("Error occurred, server can't start", error);
});
