const mercadoLibreController = require('../src/controllers/mercadoLibreController');
const MercadolibreService = require('../src/services/MercadolibreService');
const meliServiceInstance = new MercadolibreService();

const initialUser = {
    id_usuario: 1,
    nombre: 'MercadolibreMOCK',
    apellido: 'AAA',
    nivel: 'ORO',
    imagen: 'https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/180x180.png',
};
jest.mock('../src/services/MercadolibreService', () => {
    const originalModule = jest.requireActual(
        '../src/services/MercadolibreService'
    );
    //Mock the default export and named export 'foo'
    return {
        __esModule: true,
        ...originalModule,
        getUser: jest.fn(() => initialUser),
        foo: 'mocked foo',
    };
});

describe('user test suite', () => {
    test('user is returned', async () => {
        jest.spyOn(meliServiceInstance, 'getUser').mockResolvedValueOnce(
            initialUser
        );
        const mReq = {};
        const mRes = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        const response = await mercadoLibreController.getUser(mReq, mRes);
        expect(response).toEqual(initialUser);
    });
});
