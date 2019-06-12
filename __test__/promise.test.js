import { getDataFromApi } from '../promise';

describe('Probando promesas', () => {

    test('Realizando una prueba de promesa con api', done => {
        const api = 'https://rickandmortyapi.com/api/character/';
        getDataFromApi(api).then(data => {
            expect(data.results.lenght).toBeGreaterThan(0);
            done();
        });
    });
});