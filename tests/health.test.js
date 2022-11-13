const supertest = require('supertest');
const { app, server } = require('../src/index');
const api = supertest(app);

test('health is working', async () => {
    await api
        .get('/api/v1/health')
        .expect(200)
        .expect('Content-Type', /application\/json/);
});

afterAll(() => {
    server.close();
});
