const supertest = require('supertest');
const { app, server } = require('../src/index');
const api = supertest(app);

describe('user test suite', () => {
    test('GET user status code 200', async () => {
        const userResponse = await api.get('/api/v1/user');
        expect(userResponse.status).toBe(200);
        expect(userResponse.body).toBeDefined();
    });
    test('GET user has restrictions', async () => {
        const restrictionsResponse = await api.get(
            '/api/v1/user/1/restrictions'
        );
        expect(restrictionsResponse.status).toBe(200);
        expect(restrictionsResponse.body).toHaveLength(1);
    });
    test('GET user non existing user restrictions', async () => {
        const restrictionsResponse = await api.get(
            '/api/v1/user/2/restrictions'
        );
        expect(restrictionsResponse.status).toBe(404);
    });

    test('GET user has purchases', async () => {
        const restrictionsResponse = await api.get('/api/v1/user/1/purchases');
        expect(restrictionsResponse.status).toBe(200);
        expect(restrictionsResponse.body.data).toHaveLength(10);
    });

    test('GET user non existing user code purchases', async () => {
        const restrictionsResponse = await api.get('/api/v1/user/2/purchases');
        expect(restrictionsResponse.status).toBe(404);
    });
    afterAll(() => {
        server.close();
    });
});

describe('level test suite', () => {
    test('GET /level status code 200', async () => {
        const levelResponse = await api.get('/api/v1/level/ORO');
        expect(levelResponse.status).toBe(200);
        expect(levelResponse.body).toBeTruthy();
    });
    test('GET /level get wrong level', async () => {
        const levelResponse = await api.get('/api/v1/level/PLATA');
        expect(levelResponse.status).toBe(404);
    });
    afterAll(() => {
        server.close();
    });
});
describe('shipment test suite', () => {
    test('GET /shipment status code 200', async () => {
        const shipmentResponse = await api.get('/api/v1/shipment/1000010195');
        expect(shipmentResponse.status).toBe(200);
        expect(shipmentResponse.body).toBeTruthy();
    });
    test('GET /shipment wrong url param', async () => {
        const shipmentResponse = await api.get('/api/v1/shipment/1000020111');
        expect(shipmentResponse.status).toBe(404);
    });
    afterAll(() => {
        server.close();
    });
});
describe('payment test suite', () => {
    test('GET /payment status code 200', async () => {
        const paymentResponse = await api.get('/api/v1/payment/7010191');
        expect(paymentResponse.status).toBe(200);
        expect(paymentResponse.body).toBeTruthy();
    });
    test('GET /payment wrong payment url param', async () => {
        const paymentResponse = await api.get('/api/v1/payment/9910191');
        expect(paymentResponse.status).toBe(404);
    });
    afterAll(() => {
        server.close();
    });
});
